export interface Playlist {
  id: number
  title: string
  slug: string
  description: string
  tagIds: number[]
  lessonIds: number[]
}

export const usePlaylistsStore = defineStore('playlists', () => {
  const playlists = ref<Playlist[]>([])
  const searchQuery = ref('')

  const fetch = () =>
    playlists.value.length ? null : $fetch<Playlist[]>('/api/playlists').then((r) => (playlists.value = r))

  const getPlaylistBySlug = (slug: string) => playlists.value.find((p) => p.slug === slug)

  return { playlists, searchQuery, fetch, getPlaylistBySlug }
})
