<script setup lang="ts">
defineProps<{ heading: string; subheading: string }>()
</script>

<template>
  <div class="container max-w-screen-sm">
    <h1 class="text-center text-4xl font-black sm:text-5xl dark:text-white">
      {{ heading }}
    </h1>
    <p
      class="mt-2 text-center text-gray-600 sm:mt-3 sm:text-lg dark:text-gray-300"
    >
      {{ subheading }}
    </p>
  </div>
</template>
