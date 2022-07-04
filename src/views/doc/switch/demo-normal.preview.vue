<preview>常规用法1</preview>

<template>
	<bf-switch v-model:value="bool" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const bool = ref(false);
</script>
