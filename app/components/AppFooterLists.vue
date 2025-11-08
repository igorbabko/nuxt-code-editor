<script setup lang="ts">
const { playlists } = usePlaylistsStore()
const { getLessonById } = useLessonsStore()

const lists = [
  {
    heading: 'Popular Playlists',
    items: playlists.slice(4, 7).map((playlist) => {
      const lesson = getLessonById(playlist.lessonIds[0])

      return {
        label: playlist.title,
        link: getPlaylistLink(playlist, lesson),
      }
    }),
  },
  {
    heading: 'Configurations',
    items: playlists.slice(0, 3).map((playlist) => {
      const lesson = getLessonById(playlist.lessonIds[0])

      return {
        label: playlist.title,
        link: getPlaylistLink(playlist, lesson),
      }
    }),
  },
  {
    heading: 'Social',
    items: [
      {
        label: 'YouTube',
        link: 'https://youtube.com',
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
  <div class="flex flex-col gap-y-8 sm:flex-row sm:gap-x-16">
    <AppFooterList v-for="list in lists" :key="list.heading" :list="list" />
  </div>
</template>
