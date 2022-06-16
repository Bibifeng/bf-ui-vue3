<template>
	<div class="top-nav">
		<span class="toggle-aside" @click="showAside"></span>
		<div class="logo">
			<img alt="Vue logo" src="../assets/logo.png" />
		</div>
		<ul class="menu">
			<li>菜单1</li>
			<li>
				<router-link to="/doc">组件文档</router-link>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Ref, inject } from 'vue';
export default {
	name: 'topnav',
	setup() {
		const asideVisible = inject<Ref<boolean>>('asideVisible');
		const showAside = () => {
			asideVisible.value = !asideVisible.value;
		};
		return { showAside };
	},
};
</script>

<style lang="scss" scoped>
.top-nav {
	background: antiquewhite;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 10;
	.toggle-aside {
		display: none;
		width: 24px;
		height: 24px;
		background: red;
		position: absolute;
		left: 16px;
		top: 50%;
		transform: translateY(-50%);
	}
	.logo {
		img {
			width: 4em;
			height: 4em;
		}
		margin: 6px;
		cursor: pointer;
	}
	.menu {
		display: flex;
		white-space: nowrap;
		flex-wrap: nowrap;
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
