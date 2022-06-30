<template>
	<div class="layout">
		<!-- 顶部导航条 -->
		<page-header class="page-header" show-menu-btn></page-header>
		<!-- 内容 -->
		<div class="content">
			<!-- 菜单 -->
			<Transition name="fade">
				<page-menu v-if="asideVisible" class="page-menu"></page-menu>
			</Transition>
			<!-- 主区域 -->
			<div class="page-main">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import PageHeader from '@/views/frame/header.vue';
import PageMenu from './menu.vue';
import { Ref, inject } from 'vue';
export default {
	name: 'Doc',
	components: {
		PageHeader,
		PageMenu,
	},
	setup() {
		const asideVisible = inject<Ref<boolean>>('asideVisible');
		return { asideVisible };
	},
};
</script>

<style lang="scss" scoped>
.layout {
	display: flex;
	flex-direction: column;
	height: 100vh;
	.page-header {
		position: fixed;
		z-index: 100;
		flex-shrink: 0;
	}
	.content {
		flex-grow: 1;
		padding: 86px 6px 6px 156px;
		@media (max-width: 500px) {
			padding-left: 0;
		}
		display: flex;
		.page-menu {
			position: fixed;
			z-index: 90;
			flex-shrink: 0;
		}

		/* 进入之前和离开后的样式 */
		.fade-enter-from,
		.fade-leave-to {
			left: -150px;
		}

		/* 离开和进入过程中的样式 */
		.fade-enter-active,
		.fade-leave-active {
			transition: left 0.25s ease;
		}

		/* 进入之后和离开之前的样式 */
		.fade-enter-to,
		.fade-leave-from {
			left: 0;
		}

		.page-main {
			flex-grow: 1;
			padding: 16px;
			background: white;
			overflow: auto;
		}
	}
}
</style>
