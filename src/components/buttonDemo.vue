<template>
    <p>buttonDemo</p>
    <bf-button>你好</bf-button>
</template>

<script lang="ts">
    import bfButton from '../lib/bf-button.vue'; // 一定要写后缀名
    export default {
        name: "buttonDemo",
        components: {
            bfButton,
        },
    }
</script>

<style lang="scss" scoped>

</style>