interface Tag {
  id: number
  name: string
}

export const useTagsStore = defineStore('tags', () => {
  const tags = ref([
    { id: 1, name: 'Utility' },
    { id: 2, name: 'Formatting' },
    { id: 3, name: 'Development' },
    { id: 4, name: 'Collaboration' },
    { id: 5, name: 'Git' },
    { id: 6, name: 'Version Control' },
    { id: 7, name: 'Debugging' },
    { id: 8, name: 'Testing' },
    { id: 9, name: 'Web Development' },
    { id: 10, name: 'Python' },
    { id: 11, name: 'React' },
    { id: 12, name: 'Remote' },
    { id: 13, name: 'Productivity' },
    { id: 14, name: 'Settings' },
    { id: 15, name: 'Keyboard' },
    { id: 16, name: 'Extensions' },
  ] as Tag[])

  const getTagsByIds = (ids: number[]) =>
    tags.value.filter((tag) => ids.includes(tag.id))

  return {
    tags,
    getTagsByIds,
  }
})
