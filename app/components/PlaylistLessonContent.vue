<script setup lang="ts">
defineProps<{ title: string; description: string }>()
</script>

<template>
  <article
    class="prose prose-h3:m-0 prose-h3:dark:text-gray-200 prose-p:mt-2 prose-p:dark:text-gray-300 max-w-none"
  >
    <header>
      <h3>{{ title }}</h3>
    </header>
    <p>
      {{ description }}
    </p>
  </article>
</template>
