<script setup lang="ts">
const props = defineProps<{
  playlist: {
    title: string
    description: string
    tagIds: number[]
    lessonIds: number[]
  }
}>()

const tags = useTagsStore().getTagsById(props.playlist.tagIds)

const lesson = useLessonsStore().getLessonById(props.playlist.lessonIds[0])

if (!lesson) {
  throw createError({ statusCode: 404, message: 'Lesson not found' })
}

const playlistSlug = props.playlist.title.toLowerCase().replaceAll(' ', '-')
const lessonSlug = lesson.title.toLowerCase().replaceAll(' ', '-')
</script>

<template>
  <NuxtLink :to="`/playlists/${playlistSlug}/lessons/${lessonSlug}`">
    <article
      class="flex h-full flex-col rounded-md border border-gray-200 p-4 hover:border-indigo-600 sm:rounded-xl sm:p-6 dark:border-black dark:bg-gray-700 dark:hover:border-indigo-400"
    >
      <header>
        <h3 class="font-semibold sm:text-lg dark:text-white">
          {{ playlist.title }}
        </h3>
      </header>
      <p
        class="mt-2 mb-6 text-sm text-gray-600 sm:text-base dark:text-gray-400"
      >
        {{ playlist.description }}
      </p>
      <footer class="mt-auto">
        <ul class="flex flex-wrap gap-x-2">
          <li
            v-for="tag in tags"
            :key="tag.id"
            class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
          >
            {{ tag.name }}
          </li>
        </ul>
      </footer>
    </article>
  </NuxtLink>
</template>
