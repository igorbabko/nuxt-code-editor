<template>
  <div
    class="col-span-1 grid gap-2 sm:gap-4 md:col-span-2 lg:grid-cols-2 xl:col-span-3 xl:grid-cols-3"
  >
    <PlaylistGridItem
      v-for="playlist in usePlaylistsStore().playlists"
      :key="playlist.title"
      :playlist="playlist"
    />
  </div>
</template>
