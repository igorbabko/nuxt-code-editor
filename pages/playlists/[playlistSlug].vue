<script setup lang="ts">
const { getPlaylistBySlug } = usePlaylistsStore()
const { getLessonBySlug } = useLessonsStore()

const playlist = getPlaylistBySlug(useRoute().params.playlistSlug as string)
const lesson = getLessonBySlug(useRoute().params.lessonSlug as string)

if (!playlist) {
  throw createError({ statusCode: 404, message: 'Playlist not found' })
}

if (!lesson) {
  throw createError({ statusCode: 404, message: 'Lesson not found' })
}
</script>

<template>
  <section class="flex flex-col gap-y-8 pt-24 pb-12 sm:py-16 md:gap-y-12">
    <AppSectionHeader
      type="page"
      :heading="playlist.title"
      :subheading="playlist.description"
    />
    <div class="container grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8">
      <PlaylistLessons />
      <NuxtPage />
    </div>
  </section>
</template>
