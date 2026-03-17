<script lang="ts" setup>
const route = useRoute()
const lessonsStore = useLessonsStore()
const playlistsStore = usePlaylistsStore()

await Promise.all([
  callOnce(lessonsStore.fetch),
  callOnce(playlistsStore.fetch),
])

const playlist = playlistsStore.getPlaylistBySlug(
  route.params.playlistSlug as string,
)

if (!playlist) {
  throw404('Playlist not found')
}

const lesson = lessonsStore.getLessonBySlug(route.params.lessonSlug as string)

if (!lesson || !playlist.lessonIds.includes(lesson.id)) {
  throw404('Lesson not found')
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
