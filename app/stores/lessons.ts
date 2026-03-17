export interface Lesson {
  id: number
  title: string
  slug: string
  description: string
  duration: number
}

export const useLessonsStore = defineStore('lessons', () => {
  const lessons = ref<Lesson[]>([])

  const fetch = () =>
    lessons.value.length ? null : $fetch<Lesson[]>('/api/lessons').then((r) => (lessons.value = r))

  const getLessonById = (id: number) => lessons.value.find((l) => l.id === id)
  const getLessonsByIds = (ids: number[]) => lessons.value.filter((l) => ids.includes(l.id))
  const getLessonBySlug = (slug: string) => lessons.value.find((l) => l.slug === slug)

  return { lessons, fetch, getLessonById, getLessonsByIds, getLessonBySlug }
})
