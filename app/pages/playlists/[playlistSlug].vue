<script setup lang="ts">
const playlist = usePlaylistsStore().getPlaylistBySlug(
  useRoute().params.playlistSlug as string,
)

if (!playlist) {
  throw createError({ statusCode: 404, message: 'Playlist not found' })
}
</script>

<template>
  <section class="flex flex-col gap-y-8 pb-12 pt-24 sm:py-16 md:gap-y-12">
    <AppSectionHeader
      type="page"
      :heading="playlist.title"
      :subheading="playlist.description"
    />
    <div class="container grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8">
      <PlaylistLessons :lesson-ids="playlist.lessonIds" />
      <NuxtPage />
    </div>
  </section>
</template>
