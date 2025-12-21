<script lang="ts" setup>
const model = defineModel<string>()
</script>

<template>
  <input
    v-model.trim="model"
    class="rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-indigo-600 focus:outline-none focus:ring-1 sm:rounded-lg sm:text-base dark:border-0 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-indigo-400"
  />
</template>
