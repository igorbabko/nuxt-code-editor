<script lang="ts" setup>
const route = useRoute()
const playlistsStore = usePlaylistsStore()
const lessonsStore = useLessonsStore()

const playlist = playlistsStore.getPlaylistBySlug(
  route.params.playlistSlug as string,
)

if (!playlist) {
  throw createError({ statusCode: 404, message: 'Playlist not found' })
}

const lesson = lessonsStore.getLessonBySlug(route.params.lessonSlug as string)

if (!lesson || !playlist.lessonIds.includes(lesson.id)) {
  throw createError({ statusCode: 404, message: 'Lesson not found' })
}
</script>

<template>
  <div class="flex flex-col gap-y-6 md:gap-y-8 lg:col-span-2">
    <PlaylistLessonVideo :title="lesson.title" />
    <PlaylistLessonContent
      :title="lesson.title"
      :description="lesson.description"
    />
  </div>
</template>
