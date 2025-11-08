export function getPlaylistLink(playlist: Playlist, lesson?: Lesson) {
  if (!lesson) {
    throw createError({ statusCode: 404, message: 'Lesson not found' })
  }

  return `/playlists/${slugify(playlist.title)}/lessons/${slugify(lesson.title)}`
}
