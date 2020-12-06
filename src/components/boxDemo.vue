<template>
    <p>boxDemo</p>
    <BfButton @click="toggleBox">点击打开弹窗</BfButton>
<!--    <BfBox :visible="x" @update:visible="x = $event"></BfBox>-->
    <BfBox v-model:visible="x" :closeOverlay="false" :onOk="okFunction" :onCancel="cancelFunction" title="自定义标题">
        <p>slot</p>
        <p>456</p>
    </BfBox>
</template>

<script lang="ts">
    import {ref} from 'vue';
    import BfBox from '../lib/bf-box.vue';
    import BfButton from '../lib/bf-button.vue';
    export default {
        name: "boxDemo",
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
            return {
                x,
                toggleBox,
                okFunction,
                cancelFunction,
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>