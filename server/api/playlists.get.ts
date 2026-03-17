export default defineEventHandler(async () => {
  const db = useDrizzle()

  const results = await db.query.playlists.findMany({
    with: {
      playlistsToTags: {
        columns: {
          tagId: true,
        },
      },
      lessons: {
        columns: {
          id: true,
          order: true,
        },
        orderBy: (lessons, { asc }) => [asc(lessons.order)],
      },
    },
  })

  return results.map((playlist) => ({
    id: playlist.id,
    title: playlist.title,
    slug: playlist.slug,
    description: playlist.description,
    tagIds: playlist.playlistsToTags.map((pt) => pt.tagId),
    lessonIds: playlist.lessons.map((l) => l.id),
  }))
})
