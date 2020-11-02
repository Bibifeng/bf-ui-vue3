<template>
    <p>buttonDemo</p>
    <bf-button
        @click="sayHi"
        @mouseover="sayHi"
        @focus="sayHi"
        size="small"
    >你好</bf-button>
</template>

<script lang="ts">
    import bfButton from '../lib/bf-button.vue'; // 一定要写后缀名
    export default {
        name: "buttonDemo",
        components: {
            bfButton,
        },
        setup() {
            const sayHi = () => {
                console.log('hi');
            };
            return {
                sayHi,
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>