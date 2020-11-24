<template>
    <div>
        <bf-switch v-model:value="bool"></bf-switch>
    </div>
</template>

<script lang="ts">
    import bfSwitch from '../lib/switch.vue';
    import { ref } from 'vue';
    export default {
        name: "switchDemo",
        components: {
            bfSwitch,
        },
        setup() {
            const bool = ref(false);
            return {
                bool
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>