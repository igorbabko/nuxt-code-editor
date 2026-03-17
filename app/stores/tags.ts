export interface Tag {
  id: number
  name: string
}

export const useTagsStore = defineStore('tags', () => {
  const tags = ref<Tag[]>([])
  const selectedTagIds = ref<number[]>([])

  const fetch = () =>
    tags.value.length ? null : $fetch<Tag[]>('/api/tags').then((r) => (tags.value = r))

  const getTagsById = (ids: number[]) => tags.value.filter((t) => ids.includes(t.id))

  const toggleTag = (id: number) =>
    (selectedTagIds.value = selectedTagIds.value.includes(id)
      ? selectedTagIds.value.filter((i) => i !== id)
      : [...selectedTagIds.value, id])

  return { tags, selectedTagIds, fetch, getTagsById, toggleTag }
})
