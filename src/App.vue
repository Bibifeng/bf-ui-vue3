<template>
	<!--  <img alt="Vue logo" src="./assets/logo.png" />-->
	<router-view></router-view>
</template>

<script lang="ts">
import { ref, provide } from 'vue';
import { router } from './router';
export default {
	name: 'App',
	setup() {
		const width = document.documentElement.clientWidth;
		const asideVisible = ref(width > 500);
		provide('asideVisible', asideVisible);
		router.afterEach(() => {
			if (width <= 500) {
				asideVisible.value = false;
			}
		});
	},
};
</script>
