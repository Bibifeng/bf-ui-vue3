<template>
    <div :size="size">
        <button v-bind="rest">
            <slot></slot>
        </button>
    </div>
</template>

<script lang="ts">
    export default {
        inheritAttrs: false, // 不继承默认属性到最外层标签中
        name: "bf-button",
        setup(props, context) {
            const {size, ...rest} = context.attrs;
            return {
                size,
                rest
            };
        }
    }
</script>

<style lang="scss" scoped>
div {
    background: #f3f3f3;
}
</style>