<script setup lang="ts">
defineProps<{ heading: string; subheading: string }>()
</script>

<template>
  <div class="container max-w-screen-sm">
    <h2 class="text-center text-2xl font-bold sm:text-4xl dark:text-white">
      {{ heading }}
    </h2>
    <p
      class="mt-1 text-center text-gray-600 sm:mt-2 sm:text-lg dark:text-gray-300"
    >
      {{ subheading }}
    </p>
  </div>
</template>
