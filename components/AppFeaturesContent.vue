<script setup lang="ts">
const { getLessonById } = useLessonsStore()

const featureIcons: Record<number, string> = {
  1: 'cog',
  2: 'fire',
  3: 'puzzle',
}

const features = usePlaylistsStore()
  .playlists.slice(0, 3)
  .map((playlist) => ({
    title: playlist.title,
    description: playlist.description,
    link: getPlaylistLink(playlist, getLessonById(playlist.lessonIds[0])),
    icon: featureIcons[playlist.id],
  }))
</script>

<template>
  <div class="container grid gap-4 lg:grid-cols-3 lg:gap-8">
    <AppFeaturesCard
      v-for="feature in features"
      :key="feature.title"
      :feature="feature"
    />
  </div>
</template>
