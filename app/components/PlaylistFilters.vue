<script lang="ts" setup>
const playlistsStore = usePlaylistsStore()
</script>

<template>
  <div class="flex flex-col gap-y-4 md:col-span-1 lg:gap-y-6">
    <AppFormField
      v-model="playlistsStore.searchQuery"
      type="search"
      placeholder="Playlist Title"
      id="search"
    />
    <div class="flex flex-col gap-y-2">
      <h3 class="font-semibold sm:text-lg dark:text-white">Tags</h3>
      <TagList />
    </div>
  </div>
</template>
