<template>
    <p>tabsDemo</p>
    <bf-tabs v-model:selected="tabTitle">
        <bf-tab title="导航1">tab1</bf-tab>
        <bf-tab title="导航2（长度测试）">tab2</bf-tab>
    </bf-tabs>
</template>

<script lang="ts">
    import bfTabs from '../lib/bf-tabs.vue';
    import bfTab from '../lib/bf-tab.vue';
    import {ref} from 'vue';
    export default {
        name: "tabsDemo",
        components: {
            bfTabs,
            bfTab,
        },
        setup() {
            const tabTitle = ref('导航2（长度测试）');
            return {
                tabTitle,
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>