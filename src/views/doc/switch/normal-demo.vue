<demo>常规用法2</demo>

<template>
	<bf-switch v-model:value="bool" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const bool = ref(false);
</script>
