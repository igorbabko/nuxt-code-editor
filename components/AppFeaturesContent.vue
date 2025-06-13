<script setup lang="ts">
const { playlists } = usePlaylistsStore()
const { getLessonById } = useLessonsStore()

const features = ['cog', 'fire', 'puzzle'].map((icon, i) => {
  const lesson = getLessonById(playlists[i].lessonIds[0])

  if (!lesson) {
    throw createError({ statusCode: 404, message: 'Lesson not found' })
  }

  return {
    title: playlists[i].title,
    description: playlists[i].description,
    link: `/playlists/${slugify(playlists[i].title)}/lessons/${slugify(lesson.title)}`,
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
