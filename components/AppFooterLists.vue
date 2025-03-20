<script setup lang="ts">
const lists = [
  {
    heading: 'Popular Playlists',
    items: ['Prettier', 'GitLens', 'Live Share'],
  },
  {
    heading: 'Configurations',
    items: ['Settings', 'Keyboard Shortcuts', 'Code Snippets'],
  },
  {
    heading: 'Social',
    items: ['YouTube', 'Telegram', 'GitHub'],
  },
]
</script>

<template>
  <div class="flex flex-col gap-y-8 sm:flex-row sm:gap-x-16">
    <AppFooterList v-for="list in lists" :key="list.heading" :list="list" />
  </div>
</template>
