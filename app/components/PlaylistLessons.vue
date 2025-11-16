<script lang="ts" setup>
defineProps<{ lessonIds: number[] }>()
</script>

<template>
  <div class="flex flex-col gap-y-4 lg:col-span-1">
    <PlaylistLessonsHeader />
    <LessonList :lesson-ids="lessonIds" />
  </div>
</template>
