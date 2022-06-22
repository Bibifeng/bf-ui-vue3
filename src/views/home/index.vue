<template>
	<div class="home-page">
		<!-- 头部导航和banner区域 -->
		<div class="header-banner">
			<!-- 首页头部 -->
			<page-header></page-header>
			<!-- 首页banner -->
			<div class="banner">
				<h1 class="name">bf-ui</h1>
				<h2 class="dec">一个 UI 框架</h2>
				<router-link class="actions" to="/doc">开始</router-link>
			</div>
		</div>

		<!-- 内容区 -->
		<div class="features">
			<ul>
				<li>
					<svg>
						<use xlink:href="#icon-vue"></use>
					</svg>
					<h3>基于 Vue 3</h3>
					<p>使用了 Vue 3 Composition API</p>
				</li>
				<li>
					<svg>
						<use xlink:href="#icon-vue"></use>
					</svg>
					<h3>基于 Vue 3</h3>
					<p>使用了 Vue 3 Composition API</p>
				</li>
				<li>
					<svg>
						<use xlink:href="#icon-vue"></use>
					</svg>
					<h3>基于 Vue 3</h3>
					<p>使用了 Vue 3 Composition API</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import PageHeader from '@/views/frame/header.vue';
export default {
	name: 'Home',
	components: {
		PageHeader,
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.home-page {
	.header-banner {
		background: rgb(250, 227, 230);
		background: linear-gradient(139deg, rgba(250, 227, 230, 1) 0%, rgba(197, 193, 242, 1) 100%);
		clip-path: ellipse(90% 60% at 50% 40%);
		.banner {
			padding: 100px 0;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			.name {
				color: $color-primary;
				font-weight: bold;
				font-size: 48px;
			}
			.dec {
				color: $color-primary;
				font-size: $font-size-h2;
			}
			> .actions {
				margin-top: 32px;
				display: inline-block;
				$h: 32px;
				height: $h;
				line-height: $h;
				padding: 0 16px;
				border-radius: 4px;
				background: $color-primary;
				color: #fff;
				transition: background 0.2s;
				&:hover {
					border-bottom: none;
					background: $color-primary-hover;
				}
			}
		}
	}

	.features {
		margin: 64px auto 0 auto;
		width: 400px;
		@media (min-width: 800px) {
			width: 800px;
		}
		@media (min-width: 1200px) {
			width: 1200px;
		}

		ul {
			display: flex;
			flex-wrap: wrap;

			li {
				width: 400px;
				margin: 16px 0;
				display: grid;
				justify-content: center;
				align-content: space-between;
				grid-template-areas: 'icon title' 'icon dec';
				grid-template-columns: 80px auto;
				grid-template-rows: 1fr auto;

				> svg {
					grid-area: icon;
					width: 64px;
					height: 64px;
				}
				> h3 {
					grid-area: title;
					font-size: $font-size-h3;
				}
				> p {
					grid-area: dec;
				}
			}
		}
	}
}
</style>
