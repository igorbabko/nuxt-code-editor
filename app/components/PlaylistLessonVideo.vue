<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <iframe
    class="aspect-video w-full rounded-md sm:rounded-lg"
    src="https://www.youtube.com/embed/Ra563HfcxXU?list=PLXDouhCU5r6qRE46qQ2rYIPnbJ5a9jzmd"
    :title="title"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  >
  </iframe>
</template>
