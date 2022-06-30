<template>
	<div class="page-header">
		<svg v-if="showMenuBtn" class="icon toggle-aside" @click="showAside">
			<use :xlink:href="menuIcon"></use>
		</svg>
		<div class="logo" @click="toHome">
			<svg class="icon">
				<use xlink:href="#icon-vue"></use>
			</svg>
		</div>
		<ul class="menu">
			<li>
				<router-link to="/doc">组件文档</router-link>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Ref, inject, computed } from 'vue';
import { useRouter } from 'vue-router';
export default {
	name: 'PageHeader',
	props: {
		// 是否展示左侧菜单切换按钮
		showMenuBtn: {
			type: Boolean,
			default: false,
		},
	},
	setup() {
		// 初始化路由
		const router = useRouter();

		// 控制菜单显隐
		const asideVisible = inject<Ref<boolean>>('asideVisible');

		// 切换菜单icon
		const menuIcon = computed(() => {
			return asideVisible.value ? '#icon-shouqicaidan' : '#icon-zhankaicaidan';
		});

		/**
		 * @desc 点击菜单按钮展开or收起
		 */
		const showAside = () => {
			asideVisible.value = !asideVisible.value;
		};

		/**
		 * @desc 返回首页
		 */
		const toHome = () => {
			router.replace('/');
		};

		return {
			showAside,
			menuIcon,
			toHome,
		};
	},
};
</script>

<style lang="scss" scoped>
.page-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	top: 0;
	left: 0;
	width: 100%;
	box-shadow: $box-shadow;
	background: #fff;
	.toggle-aside {
		display: none;
		width: 24px;
		height: 24px;
		position: absolute;
		left: 16px;
		top: 50%;
		transform: translateY(-50%);
	}
	.logo {
		margin: 0 6px;
		cursor: pointer;
		.icon {
			width: 32px;
			height: 32px;
		}
	}
	.menu {
		display: flex;
		white-space: nowrap;
		flex-wrap: nowrap;
		color: $color-primary;
		> li {
			margin: 0 1em;
		}
	}
	@media (max-width: 500px) {
		.toggle-aside {
			display: inline-block;
		}
		.menu {
			display: none;
		}
		.logo {
			margin: 6px auto;
		}
	}
}
</style>
