<script setup lang="ts">
const { getLessonById } = useLessonsStore()

const featureIcons: Record<number, string> = {
  1: 'cog',
  2: 'fire',
  3: 'puzzle',
}

const features = usePlaylistsStore()
  .playlists.slice(0, 3)
  .map((playlist) => {
    const lesson = getLessonById(playlist.lessonIds[0])

    if (!lesson) {
      throw createError({ statusCode: 404, message: 'Lesson not found' })
    }

    return {
      title: playlist.title,
      description: playlist.description,
      link: `/playlists/${slugify(playlist.title)}/lessons/${slugify(lesson.title)}`,
      icon: featureIcons[playlist.id],
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
