<template>
	<div class="bf-tabs">
		<div class="bf-tabs-nav" ref="navContent">
			<div
				class="bf-tabs-nav-item"
				:class="{ selected: t === selected }"
				v-for="(t, tindex) in titles"
				:ref="
					el => {
						if (t === selected) curNavItem = el;
					}
				"
				:key="tindex"
				@click="changeNav(t)"
			>
				{{ t }}
			</div>
			<div class="bf-tabs-nav-line" ref="line"></div>
		</div>
		<!--这里不直接用slot是因为需要检查slot里面的内容，以便动态显示不同的slot，因为tab内容在任何时候都是至多只有一个显示在页面上-->
		<div class="bf-tabs-content">
			<component :is="curTab" :key="curTab.props.title" class="bf-tabs-content-item"></component>
		</div>
	</div>
</template>

<script lang="ts">
import bfTab from './bf-tab.vue';
import { ref, onMounted, watchEffect, computed } from 'vue';
export default {
	name: 'bf-tabs',
	props: {
		selected: {
			type: String,
		},
	},
	setup(props, context) {
		// 获取默认slot（也就是每个tab）
		const defaultSlots = context.slots.default();
		defaultSlots.forEach(i => {
			// 语法检查
			if (i.type !== bfTab) {
				throw new Error('bf-tabs子元素必须是bf-tab');
			}
		});
		// 每个tab的title组成的数组，用来渲染nav-item
		const titles = defaultSlots.map(t => {
			return t.props.title;
		});
		// 获取当前要显示的tab
		const curTab = computed(() => {
			return defaultSlots.find(slotItem => slotItem.props.title === props.selected);
		});
		// 点击切换tab的nav
		const changeNav = (title: string) => {
			context.emit('update:selected', title);
		};

		const curNavItem = ref<HTMLDivElement>(null); // 当前被选中的选项卡
		const line = ref<HTMLDivElement>(null); // 选项卡被选中时的下划线
		const navContent = ref<HTMLDivElement>(null); // 选项卡的父容器
		// 方法：动态改变下划线的长度和left值
		const changeLineLeftAndWidth = () => {
			// 获取当前选中的nav的长度，将长度赋值给下划线
			const { width } = curNavItem.value.getBoundingClientRect();
			line.value.style.width = width + 'px';
			// 当前选项卡的left减去nav容器的left就是下划线所在的left
			const { left: navContentLeft } = navContent.value.getBoundingClientRect();
			const { left: curNavItemLeft } = curNavItem.value.getBoundingClientRect();
			line.value.style.left = curNavItemLeft - navContentLeft + 'px';
		};
		// onMounted 和 onUpdated 都接收一个回调方法
		// watchEffect 可同时代替 onMounted 和 onUpdated，同样也是接收一个回调方法
		// 因为 watchEffect 会在 onMounted之前执行一次，此时curNavItem、line、navContent是null，代码会报错导致页面空白
		// 如果不希望watchEffect在onMounted之前执行，官网建议是将watchEffect放在onMounted之中
		onMounted(() => {
			watchEffect(changeLineLeftAndWidth);
		});

		return {
			defaultSlots,
			curTab,
			titles,
			changeNav,
			curNavItem,
			line,
			navContent,
		};
	},
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.bf-tabs {
	&-nav {
		display: flex;
		color: $color;
		border-bottom: 1px solid $border-color;
		position: relative;
		&-item {
			padding: 8px 0;
			margin: 0 16px;
			cursor: pointer;
			&:first-child {
				margin-left: 0;
			}
			&.selected {
				color: $blue;
			}
		}
		&-line {
			position: absolute;
			height: 3px;
			background: $blue;
			left: 0;
			bottom: -1px;
			width: 100px;
			transition: all 250ms;
		}
	}
	&-content {
		padding: 8px 0;
	}
}
</style>
