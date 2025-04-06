<script setup lang="ts">
const lessons = [
  {
    number: 1,
    title: 'Getting Started with Prettier',
    duration: '5:30',
  },
  {
    number: 2,
    title: 'Advanced GitLens Features',
    duration: '8:45',
  },
  {
    number: 3,
    title: 'Debugging with ESLint',
    duration: '6:15',
  },
]
</script>

<template>
  <ul class="flex flex-col gap-y-1">
    <LessonListItem
      v-for="lesson in lessons"
      :key="lesson.number"
      :lesson="lesson"
    />
  </ul>
</template>
