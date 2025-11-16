export interface Lesson {
  id: number
  title: string
  description: string
  duration: number
}

export interface NumberedLesson extends Lesson {
  number: number
}

export const useLessonsStore = defineStore('lessons', () => {
  const lessons = ref<Lesson[]>([
    {
      id: 1,
      title: 'Color Theme and UI',
      description:
        'Set up the initial color theme and customize the user interface.',
      duration: 8,
    },
    {
      id: 2,
      title: 'Font Family',
      description: 'Choose and configure the perfect programming font.',
      duration: 6,
    },
    {
      id: 3,
      title: 'Product Icons',
      description: 'Install and set up minimalistic product icons.',
      duration: 7,
    },
    {
      id: 4,
      title: 'Custom UI Style',
      description: 'Style VS Code interface using Custom UI Style extension.',
      duration: 10,
    },
    {
      id: 5,
      title: 'Editor Customization',
      description: 'Customize the editor appearance and behavior.',
      duration: 12,
    },
    {
      id: 6,
      title: 'Workbench Settings',
      description: 'Configure workbench layout and functionality.',
      duration: 9,
    },
    {
      id: 7,
      title: 'Terminal Setup',
      description: 'Set up and customize the integrated terminal.',
      duration: 11,
    },
    {
      id: 8,
      title: 'Explorer Settings',
      description: 'Configure file explorer for a cleaner look.',
      duration: 8,
    },
    {
      id: 9,
      title: 'Minimap and Scrollbar',
      description: 'Customize minimap and scrollbar settings.',
      duration: 7,
    },
    {
      id: 10,
      title: 'Breadcrumbs Configuration',
      description: 'Set up and style navigation breadcrumbs.',
      duration: 6,
    },
    {
      id: 11,
      title: 'Final Touches',
      description: 'Apply final adjustments to perfect your setup.',
      duration: 8,
    },
    {
      id: 12,
      title: 'Essential Shortcuts',
      description: 'Learn the most important keyboard shortcuts for daily use.',
      duration: 15,
    },
    {
      id: 13,
      title: 'Navigation Shortcuts',
      description: 'Master file and code navigation shortcuts.',
      duration: 12,
    },
    {
      id: 14,
      title: 'Editing Shortcuts',
      description: 'Speed up code editing with powerful shortcuts.',
      duration: 18,
    },
    {
      id: 15,
      title: 'Refactoring Shortcuts',
      description: 'Learn shortcuts for common refactoring operations.',
      duration: 20,
    },
    {
      id: 16,
      title: 'Custom Keybindings',
      description: 'Create your own keyboard shortcuts.',
      duration: 15,
    },
    {
      id: 17,
      title: 'Extension Basics',
      description: 'Understanding VS Code extensions and marketplace.',
      duration: 10,
    },
    {
      id: 18,
      title: 'Essential Extensions',
      description: 'Must-have extensions for every developer.',
      duration: 15,
    },
    {
      id: 19,
      title: 'Language Extensions',
      description: 'Best extensions for different programming languages.',
      duration: 20,
    },
    {
      id: 20,
      title: 'Productivity Extensions',
      description: 'Extensions to boost your coding productivity.',
      duration: 18,
    },
    {
      id: 21,
      title: 'Debugging Extensions',
      description: 'Extensions for better debugging experience.',
      duration: 25,
    },
    {
      id: 22,
      title: 'Git Extensions',
      description: 'Enhance your Git workflow with powerful extensions.',
      duration: 22,
    },
    {
      id: 23,
      title: 'Extension Settings',
      description: 'Configuring and managing extension settings.',
      duration: 15,
    },
    {
      id: 24,
      title: 'Git Basics in VS Code',
      description: 'Learn basic Git operations in VS Code.',
      duration: 20,
    },
    {
      id: 25,
      title: 'Working with Git History',
      description: 'Explore and manage Git history in VS Code.',
      duration: 25,
    },
    {
      id: 26,
      title: 'Branch Management',
      description: 'Master Git branching strategies in VS Code.',
      duration: 30,
    },
    {
      id: 27,
      title: 'Merging and Resolving Conflicts',
      description: 'Handle merges and resolve conflicts effectively.',
      duration: 35,
    },
    {
      id: 28,
      title: 'Working with Remotes',
      description: 'Manage remote repositories in VS Code.',
      duration: 28,
    },
    {
      id: 29,
      title: 'Professional Git Workflow',
      description: 'Implement professional Git workflows in VS Code.',
      duration: 40,
    },
    {
      id: 30,
      title: 'Debugging Basics',
      description: 'Learn the fundamentals of debugging in VS Code.',
      duration: 25,
    },
    {
      id: 31,
      title: 'Debug Configurations',
      description: 'Set up and customize debug configurations.',
      duration: 30,
    },
    {
      id: 32,
      title: 'Advanced Debugging',
      description: 'Master advanced debugging techniques.',
      duration: 35,
    },
    {
      id: 33,
      title: 'Remote Debugging',
      description: 'Debug applications running on remote machines.',
      duration: 40,
    },
    {
      id: 34,
      title: 'Web Development Setup',
      description: 'Set up VS Code for web development.',
      duration: 15,
    },
    {
      id: 35,
      title: 'HTML and CSS Tools',
      description: 'Essential tools for HTML and CSS development.',
      duration: 20,
    },
    {
      id: 36,
      title: 'JavaScript Tools',
      description: 'Tools for JavaScript development.',
      duration: 25,
    },
    {
      id: 37,
      title: 'Web Debugging',
      description: 'Debug web applications effectively.',
      duration: 30,
    },
    {
      id: 38,
      title: 'Web Development Extensions',
      description: 'Must-have extensions for web development.',
      duration: 22,
    },
    {
      id: 39,
      title: 'Browser Integration',
      description: 'Integrate VS Code with browsers for development.',
      duration: 28,
    },
    {
      id: 40,
      title: 'Framework Tools',
      description: 'Tools for popular web frameworks.',
      duration: 35,
    },
    {
      id: 41,
      title: 'Web Performance Tools',
      description: 'Tools for optimizing web applications.',
      duration: 32,
    },
    {
      id: 42,
      title: 'Essential Keyboard Shortcuts',
      description:
        'Learn the most important keyboard shortcuts to boost your productivity.',
      duration: 20,
    },
    {
      id: 43,
      title: 'Custom Keybindings',
      description:
        'Create your own keyboard shortcuts and modify existing ones.',
      duration: 25,
    },
    {
      id: 44,
      title: 'Vim Keybindings',
      description: 'Master Vim keybindings in VS Code for advanced editing.',
      duration: 30,
    },
    {
      id: 45,
      title: 'Extension Basics',
      description: 'Learn how to find, install, and manage VS Code extensions.',
      duration: 15,
    },
    {
      id: 46,
      title: 'Must-Have Extensions',
      description: 'Discover the most popular and useful VS Code extensions.',
      duration: 20,
    },
    {
      id: 47,
      title: 'Extension Development',
      description: 'Create your own VS Code extension from scratch.',
      duration: 45,
    },
    {
      id: 61,
      title: 'Setting Up Prettier',
      description:
        'Install and configure Prettier in your VS Code environment.',

      duration: 15,
    },
    {
      id: 62,
      title: 'Prettier Configuration',
      description: 'Customize Prettier rules to match your coding style.',

      duration: 25,
    },
    {
      id: 63,
      title: 'Prettier Plugins',
      description: 'Extend Prettier with plugins for additional file types.',

      duration: 30,
    },
    {
      id: 48,
      title: 'GitLens Basics',
      description: 'Get started with GitLens and its core features.',
      duration: 20,
    },
    {
      id: 49,
      title: 'Blame Annotations',
      description: 'Master GitLens blame annotations and history.',
      duration: 25,
    },
    {
      id: 50,
      title: 'Advanced GitLens Features',
      description: 'Explore advanced GitLens features for Git mastery.',
      duration: 35,
    },
    {
      id: 51,
      title: 'Setting Up Live Share',
      description: 'Install and configure Live Share for collaborative coding.',
      duration: 15,
    },
    {
      id: 52,
      title: 'Collaboration Basics',
      description:
        'Learn the fundamentals of collaborative coding with Live Share.',
      duration: 25,
    },
    {
      id: 53,
      title: 'Advanced Collaboration',
      description: 'Master advanced Live Share features for team productivity.',
      duration: 30,
    },
    {
      id: 54,
      title: 'Introduction to Git Mastery',
      description:
        'Learn the basics of Git and version control within VS Code.',
      duration: 10,
    },
    {
      id: 55,
      title: 'Introduction to Debugging',
      description: 'Understand the fundamentals of debugging in VS Code.',
      duration: 12,
    },
    {
      id: 56,
      title: 'Setting Up Your Web Dev Environment',
      description: 'Configure VS Code for optimal web development.',
      duration: 15,
    },
    {
      id: 57,
      title: 'Setting Up Your Python Environment',
      description: 'Configure VS Code for professional Python development.',
      duration: 15,
    },
    {
      id: 58,
      title: 'Setting Up Your React Environment',
      description:
        'Optimize VS Code for React and modern JavaScript development.',
      duration: 18,
    },
    {
      id: 59,
      title: 'Introduction to Remote Development',
      description: 'Learn how to use VS Code for remote development workflows.',
      duration: 14,
    },
    {
      id: 60,
      title: 'Introduction to Testing Tools',
      description:
        'Discover how to set up and use testing frameworks in VS Code.',
      duration: 16,
    },
  ])

  function getLessonById(id: number) {
    return lessons.value.find((lesson) => lesson.id === id)
  }

  function getLessonsByIds(ids: number[]) {
    return lessons.value.filter((lesson) => ids.includes(lesson.id))
  }

  return { lessons, getLessonById, getLessonsByIds }
})
