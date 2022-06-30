<template>
	<button class="bf-switch" @click="toggle" :class="{ 'bf-checked': value }">
		<span></span>
	</button>
</template>

<script>
export default {
	name: 'bf-switch',
	props: {
		value: Boolean,
	},
	setup(props, context) {
		const toggle = () => {
			context.emit('update:value', !props.value);
		};
		return {
			toggle,
		};
	},
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.bf-switch {
	height: $h;
	width: $h * 2;
	border: none;
	background: #bfbfbf;
	border-radius: $h / 2;
	position: relative;
	> span {
		position: absolute;
		top: 2px;
		left: 2px;
		height: $h2;
		width: $h2;
		background: white;
		border-radius: $h2 / 2;
		transition: all 250ms;
	}
}
.bf-switch.bf-checked {
	background: #1890ff;
	> span {
		left: calc(100% - #{$h2} - 2px);
	}
}
.bf-switch:focus {
	outline: none;
}
.bf-switch:active {
	> span {
		width: $h2 + 4px;
	}
}
.bf-switch.bf-checked:active {
	> span {
		width: $h2 + 4px;
		margin-left: -4px;
	}
}
</style>
