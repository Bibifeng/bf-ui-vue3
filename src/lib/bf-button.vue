<template>
    <button class="bf-button" :class="`theme-${theme}`">
        <slot></slot>
    </button>
</template>

<script lang="ts">
    export default {
        name: "bf-button",
        props: {
            theme: {
                type: String,
                default: () => {
                    return 'button'
                }
            }
        },
        setup() {
            return {

            };
        }
    }
</script>

<style lang="scss" scoped>
</style>