<script setup lang="ts">
const tags = [
  'Productivity',
  'Development',
  'Design',
  'Utility',
  'Integration',
  'Testing',
  'Debugging',
  'Formatting',
  'Collaboration',
  'Documentation',
]
</script>

<template>
  <ul class="flex flex-col gap-y-1">
    <TagListItem v-for="tag in tags" :key="tag">{{ tag }}</TagListItem>
  </ul>
</template>
