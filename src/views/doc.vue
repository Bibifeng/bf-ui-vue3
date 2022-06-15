<template>
	<div class="layout">
		<topnav class="top-nav"></topnav>
		<div class="content">
			<aside v-if="asideVisible">
				<h2>组件列表</h2>
				<ol>
					<li>
						<router-link to="/doc/switch">switch</router-link>
					</li>
					<li>
						<router-link to="/doc/button">button</router-link>
					</li>
					<li>
						<router-link to="/doc/box">box</router-link>
					</li>
					<li>
						<router-link to="/doc/tabs">tabs</router-link>
					</li>
				</ol>
			</aside>
			<main>
				<router-view></router-view>
			</main>
		</div>
	</div>
</template>

<script lang="ts">
import Topnav from '../components/topnav.vue';
import { Ref, inject } from 'vue';
export default {
	name: 'doc',
	components: {
		Topnav,
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
	> .top-nav {
		flex-shrink: 0;
	}
	> .content {
		flex-grow: 1;
		padding: 86px 6px 6px 156px;
		@media (max-width: 500px) {
			padding-left: 0;
		}
	}
}
.content {
	display: flex;
	> aside {
		flex-shrink: 0;
	}
	> main {
		flex-grow: 1;
		padding: 16px;
		background: white;
	}
}
aside {
	background: lightblue;
	width: 150px;
	padding: 90px 16px 16px 16px;
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	> h2 {
		margin-bottom: 4px;
	}
	> ol {
		> li {
			padding: 4px 0;
		}
	}
}
main {
	overflow: auto;
}
</style>
