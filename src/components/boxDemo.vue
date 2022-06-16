<template>
	<p>boxDemo</p>
	<BfButton @click="toggleBox">模板打开弹窗</BfButton>
	<BfButton @click="openBox">方法打开弹窗</BfButton>
	<!--    <BfBox :visible="x" @update:visible="x = $event"></BfBox>-->
	<BfBox v-model:visible="x" :closeOverlay="false" :onOk="okFunction" :onCancel="cancelFunction" title="自定义标题">
		<template v-slot:content>
			<p>具名slot</p>
			<p>456</p>
		</template>
	</BfBox>
</template>

<script lang="ts">
import { ref } from 'vue';
import BfBox from '../lib/bf-box.vue';
import BfButton from '../lib/bf-button.vue';
import { openBfBox } from '../lib/openBfBox';
export default {
	name: 'boxDemo',
	components: {
		BfBox,
		BfButton,
	},
	setup() {
		const x = ref(false);
		const toggleBox = () => {
			x.value = !x.value;
		};
		const okFunction = () => {
			console.log('okFunction');
			return true; // 只有为true的时候才会关闭弹窗
		};
		const cancelFunction = () => {
			console.log('cancelFunction');
			return true; // 只有为true的时候才会关闭弹窗
		};
		const openBox = () => {
			// 用js形式打开弹窗
			openBfBox({
				title: '方法打开弹窗',
				content: 'hello',
				onOk: okFunction, // 必传，按钮才能生效
				onCancel: cancelFunction, // 必传，按钮才能生效
				closeOverlay: false, // 点击弹窗遮罩是否关闭，默认是
			});
		};
		return {
			x,
			toggleBox,
			okFunction,
			cancelFunction,
			openBox,
		};
	},
};
</script>

<style lang="scss" scoped></style>
