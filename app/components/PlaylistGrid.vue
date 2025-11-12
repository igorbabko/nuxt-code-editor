<script setup lang="ts">
const playlistsStore = usePlaylistsStore()
</script>

<template>
  <div
    class="col-span-1 grid gap-2 sm:gap-4 md:col-span-2 lg:grid-cols-2 xl:col-span-3 xl:grid-cols-3"
  >
    <PlaylistGridItem
      v-for="playlist in playlistsStore.filteredPlaylists"
      :key="playlist.title"
      :playlist="playlist"
    />
    <p
      v-if="playlistsStore.filteredPlaylists.length === 0"
      class="col-span-full text-center text-gray-400"
    >
      No playlists found
    </p>
  </div>
</template>
