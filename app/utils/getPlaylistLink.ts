export function getPlaylistLink(playlist: Playlist, lesson: Lesson) {
  if (!lesson) {
    throw throw404('Lesson not found')
  }

  return `/playlists/${slugify(playlist.title)}/lessons/${slugify(lesson.title)}`
}
