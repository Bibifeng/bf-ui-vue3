<template>
	<div>
		<div class="demo">
			<h2>{{ DemoNormal.__sourceCodeTitle }}</h2>
			<div class="demo-component">
				<component :is="DemoNormal" />
			</div>
			<div class="demo-actions">
				<bf-button>查看代码</bf-button>
			</div>
			<div class="demo-code">
				{{ DemoNormal.__sourceCode }}
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import DemoNormal from './demo-normal.preview.vue';
export default {
	components: {
		DemoNormal,
	},
	setup() {
		return {
			DemoNormal,
		};
	},
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
	border: 1px solid $border-color;
	margin: 16px 0 32px;
	> h2 {
		font-size: 20px;
		padding: 8px 16px;
		border-bottom: 1px solid $border-color;
	}
	&-component {
		padding: 16px;
	}
	&-actions {
		padding: 8px 16px;
		border-top: 1px dashed $border-color;
	}
	&-code {
		padding: 8px 16px;
		border-top: 1px dashed $border-color;
		> pre {
			line-height: 1.1;
			font-family: Consolas, 'Courier New', Courier, monospace;
			margin: 0;
		}
	}
}
</style>
