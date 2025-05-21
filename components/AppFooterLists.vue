<script setup lang="ts">
const lists = [
  {
    heading: 'Popular Playlists',
    items: [
      {
        label: 'Prettier',
        link: '/playlists/prettier/lessons/getting-started-with-prettier',
      },
      {
        label: 'GitLens',
        link: '/playlists/prettier/lessons/getting-started-with-prettier',
      },
      {
        label: 'Live Share',
        link: '/playlists/prettier/lessons/getting-started-with-prettier',
      },
    ],
  },
  {
    heading: 'Configurations',
    items: [
      {
        label: 'Settings',
        link: '/playlists/prettier/lessons/getting-started-with-prettier',
      },
      {
        label: 'Keyboard Shortcuts',
        link: '/playlists/prettier/lessons/getting-started-with-prettier',
      },
      {
        label: 'Code Snippets',
        link: '/playlists/prettier/lessons/getting-started-with-prettier',
      },
    ],
  },
  {
    heading: 'Social',
    items: [
      {
        label: 'YouTube',
        link: '/playlists/prettier/lessons/getting-started-with-prettier',
      },
      {
        label: 'Telegram',
        link: '/playlists/prettier/lessons/getting-started-with-prettier',
      },
      {
        label: 'GitHub',
        link: '/playlists/prettier/lessons/getting-started-with-prettier',
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
