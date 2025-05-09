<script setup lang="ts">
defineProps<{ label: string; type: string; id: string }>()
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <AppLabel :for="id">{{ label }}</AppLabel>
    <AppInput :type="type" :id="id" />
  </div>
</template>
