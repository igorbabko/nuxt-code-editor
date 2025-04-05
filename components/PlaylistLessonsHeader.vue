<script setup lang="ts">
const links = [
  {
    to: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
    icon: 'globe',
  },
  {
    to: 'https://github.com/prettier/prettier-vscode',
    icon: 'bracket',
  },
]
</script>

<template>
  <div class="flex items-center justify-between gap-x-4">
    <h3 class="text-lg font-semibold sm:text-lg dark:text-white">Lessons</h3>
    <div class="flex gap-x-2">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
        :to="link.to"
        target="_blank"
        class="hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-300"
      >
        <Icon :name="link.icon" class="size-6 sm:size-8" />
      </NuxtLink>
    </div>
  </div>
</template>
