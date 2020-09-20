<template>
    <div>
        <bf-switch :value="y" @input="y = $event"></bf-switch>
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
            const y = ref(false);
            return {
                y
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>