<script setup lang="ts">
defineProps<{ feature: { icon: string; title: string; description: string } }>()
</script>

<template>
  <a href="#">
    <article
      class="h-full rounded-md border border-gray-200 bg-white p-4 hover:border-indigo-600 sm:rounded-xl sm:p-6 dark:border-black dark:bg-gray-800 dark:hover:border-indigo-400"
    >
      <header class="flex flex-col gap-y-3">
        <Icon
          :name="feature.icon"
          class="size-10 text-indigo-600 sm:size-12 dark:text-indigo-400"
        />
        <h3 class="font-semibold sm:text-lg dark:text-white">
          {{ feature.title }}
        </h3>
      </header>
      <p class="mt-1 text-sm text-gray-600 sm:text-base dark:text-gray-400">
        {{ feature.description }}
      </p>
    </article>
  </a>
</template>
