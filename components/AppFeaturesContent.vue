<script setup lang="ts">
const { playlists } = usePlaylistsStore()
const { getLessonById } = useLessonsStore()

const features = ['cog', 'fire', 'puzzle'].map((icon, i) => {
  const lesson = getLessonById(playlists[i].lessonIds[0])

  return {
    title: playlists[i].title,
    description: playlists[i].description,
    link: getPlaylistLink(playlists[i], lesson),
    icon,
  }
})
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
