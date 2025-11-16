<script setup lang="ts">
const props = defineProps<{ lessonIds: number[] }>()

const lessonsStore = useLessonsStore()

const lessons = computed(() => {
  return lessonsStore.getLessonsByIds(props.lessonIds).map((lesson, index) => {
    return {
      ...lesson,
      number: index + 1,
    }
  })
})
</script>

<template>
  <ul class="flex flex-col gap-y-1">
    <LessonListItem
      v-for="lesson in lessons"
      :key="lesson.id"
      :lesson="lesson"
    />
  </ul>
</template>
