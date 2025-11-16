<script lang="ts" setup>
const playlistsStore = usePlaylistsStore()
const tagsStore = useTagsStore()
const route = useRoute()
const router = useRouter()

playlistsStore.searchQuery = route.query.search
  ? (route.query.search as string).trim()
  : ''

tagsStore.selectedTagIds = route.query.tags
  ? (route.query.tags as string).split(',').map(Number)
  : []

watch(
  () => [playlistsStore.searchQuery, tagsStore.selectedTagIds] as const,
  ([searchQuery, selectedTagIds]) => {
    const query: Record<string, string> = {}

    if (searchQuery) {
      query.search = searchQuery
    }

    if (selectedTagIds.length > 0) {
      query.tags = selectedTagIds.join(',')
    }

    router.replace({ query })
  },
  { immediate: true },
)
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
