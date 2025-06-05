export interface Playlist {
  id: number
  title: string
  description: string
}

export const usePlaylistsStore = defineStore('playlists', () => {
  const playlists = ref<Playlist[]>([
    {
      id: 1,
      title: 'Settings',
      description:
        'Master VS Code settings to create your perfect coding environment.',
    },
    {
      id: 2,
      title: 'Keyboard Shortcuts',
      description:
        'Boost your productivity with essential VS Code shortcuts and keybindings.',
    },
    {
      id: 3,
      title: 'Extensions',
      description:
        'Discover must-have VS Code extensions for modern development.',
    },
    {
      id: 4,
      title: 'Git Mastery',
      description:
        'Learn advanced Git operations and collaboration directly in VS Code.',
    },
    {
      id: 5,
      title: 'Debugging Techniques',
      description:
        'Master debugging tools and techniques in VS Code for various languages.',
    },
    {
      id: 6,
      title: 'Web Development',
      description:
        'Set up the ultimate web development environment in VS Code.',
    },
    {
      id: 7,
      title: 'Python Development',
      description: 'Configure VS Code for professional Python development.',
    },
    {
      id: 8,
      title: 'React Development',
      description:
        'Optimize VS Code for React and modern JavaScript development.',
    },
    {
      id: 9,
      title: 'Remote Development',
      description:
        'Learn to use VS Code for remote development and cloud environments.',
    },
    {
      id: 10,
      title: 'Testing Tools',
      description: 'Set up and use testing frameworks and tools in VS Code.',
    },
  ])

  const getPlaylistBySlug = (slug: string) =>
    playlists.value.find((playlist) => slugify(playlist.title) === slug)

  return {
    playlists,
    getPlaylistBySlug,
  }
})
