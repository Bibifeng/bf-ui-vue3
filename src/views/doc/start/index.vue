<template>
	<article class="markdown-body">
		<h1>快速开始</h1>
		<news></news>
	</article>
</template>

<script lang="ts">
import news from './test.md';
export default {
	name: 'DocStart',
	components: {
		news,
	},
};
</script>

<style lang="scss" scoped></style>
