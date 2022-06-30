<!--
 * @name: markdown-content
 * @author: shibi
 * @date: 2022-06-30 11:12
 * @description: markdown-content
 * @update: 2022-06-30 11:12
-->
<template>
	<!-- markdown-body是github-markdown-css依赖包的自带样式 -->
	<article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
	name: 'MarkdownPage',
	props: {
		// markdown路径
		path: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const content = ref<string>(null);
		// import md文件之后，vite会请求对应文件，然后markdown2Vue插件会将md转换成html并且以JSON字符串的形式返回
		import(props.path).then(res => {
			content.value = res.default;
		});
		return {
			content,
		};
	},
};
</script>

<style lang="scss" scoped></style>
