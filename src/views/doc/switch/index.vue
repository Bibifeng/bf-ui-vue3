<template>
	<div>
		<bf-switch v-model:value="bool"></bf-switch>
	</div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
	name: 'SwitchDemo',
	setup() {
		const bool = ref(false);
		return {
			bool,
		};
	},
};
</script>

<style lang="scss" scoped></style>
