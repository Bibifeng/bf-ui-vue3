<template>
    <p>buttonDemo</p>
    <bf-button>你好</bf-button>
    <bf-button theme="button">你好</bf-button>
    <bf-button theme="link">你好</bf-button>
    <bf-button theme="text">你好</bf-button>
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