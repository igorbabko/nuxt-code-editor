export function getPlaylistLink(playlist: Playlist, lesson?: Lesson) {
  if (!lesson) {
    throw404('Lesson not found')
  }

  return `/playlists/${playlist.slug}/lessons/${lesson.slug}`
}
