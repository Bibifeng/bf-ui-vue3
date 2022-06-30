<template>
	<article class="markdown-body" v-html="news"></article>
</template>

<script lang="ts">
import news from './test.md';
export default {
	name: 'DocStart',
	setup() {
		return {
			news,
		};
	},
};
</script>

<style lang="scss" scoped></style>
