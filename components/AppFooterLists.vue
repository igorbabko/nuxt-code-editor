<script setup lang="ts">
import type { Playlist } from '~/stores/playlists'

const { getLessonById } = useLessonsStore()
const { playlists } = usePlaylistsStore()

const getPlaylistLink = (playlist: Playlist) => {
  const lesson = getLessonById(playlist.lessonIds[0])

  if (!lesson) {
    throw createError({ statusCode: 404, message: 'Lesson not found' })
  }

  return `/playlists/${slugify(playlist.title)}/lessons/${slugify(lesson.title)}`
}

const lists = [
  {
    heading: 'Popular Playlists',
    items: playlists
      .filter((playlist) =>
        ['Git Mastery', 'Debugging Techniques', 'Web Development'].includes(
          playlist.title,
        ),
      )
      .map((playlist) => ({
        label: playlist.title,
        link: getPlaylistLink(playlist),
      })),
  },
  {
    heading: 'Configurations',
    items: playlists
      .filter((playlist) =>
        ['Settings', 'Extensions', 'Keyboard Shortcuts'].includes(
          playlist.title,
        ),
      )
      .map((playlist) => ({
        label: playlist.title,
        link: getPlaylistLink(playlist),
      })),
  },
  {
    heading: 'Social',
    items: [
      {
        label: 'YouTube',
        link: 'https://www.youtube.com',
      },
      {
        label: 'Telegram',
        link: 'https://telegram.org',
      },
      {
        label: 'GitHub',
        link: 'https://github.com',
      },
    ],
  },
]
</script>

<template>
  <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <AppFooterList v-for="list in lists" :key="list.heading" :list="list" />
  </div>
</template>
