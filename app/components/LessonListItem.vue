<script setup lang="ts">
const props = defineProps<{
  lesson: { number: number; title: string; duration: string }
}>()

const playlistSlug = useRoute().params.playlistSlug
const lessonSlug = props.lesson.title.toLowerCase().replaceAll(' ', '-')

const linkClasses = computed(() => [
  'flex w-full items-center justify-between gap-x-4 rounded-lg p-3 dark:text-gray-300 dark:hover:bg-gray-700',
  useRoute().params.lessonSlug === lessonSlug
    ? 'bg-indigo-50 text-indigo-700 dark:bg-gray-700'
    : 'text-gray-600 hover:bg-gray-100',
])
</script>

<template>
  <li>
    <NuxtLink
      :to="`/playlists/${playlistSlug}/lessons/${lessonSlug}`"
      :class="linkClasses"
    >
      <span class="truncate text-sm font-medium sm:text-base">
        {{ lesson.number }}. {{ lesson.title }}
      </span>
      <span class="text-sm text-gray-500 sm:text-base">
        {{ lesson.duration }}
      </span>
    </NuxtLink>
  </li>
</template>
