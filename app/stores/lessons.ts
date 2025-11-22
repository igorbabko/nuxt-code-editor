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
      duration: 287,
    },
    {
      id: 2,
      title: 'Font Family',
      description: 'Choose and configure the perfect programming font.',
      duration: 423,
    },
    {
      id: 3,
      title: 'Product Icons',
      description: 'Install and set up minimalistic product icons.',
      duration: 195,
    },
    {
      id: 4,
      title: 'Custom UI Style',
      description: 'Style VS Code interface using Custom UI Style extension.',
      duration: 512,
    },
    {
      id: 5,
      title: 'Editor Customization',
      description: 'Customize the editor appearance and behavior.',
      duration: 368,
    },
    {
      id: 6,
      title: 'Workbench Settings',
      description: 'Configure workbench layout and functionality.',
      duration: 441,
    },
    {
      id: 7,
      title: 'Terminal Setup',
      description: 'Set up and customize the integrated terminal.',
      duration: 589,
    },
    {
      id: 8,
      title: 'Explorer Settings',
      description: 'Configure file explorer for a cleaner look.',
      duration: 324,
    },
    {
      id: 9,
      title: 'Minimap and Scrollbar',
      description: 'Customize minimap and scrollbar settings.',
      duration: 267,
    },
    {
      id: 10,
      title: 'Breadcrumbs Configuration',
      description: 'Set up and style navigation breadcrumbs.',
      duration: 213,
    },
    {
      id: 11,
      title: 'Final Touches',
      description: 'Apply final adjustments to perfect your setup.',
      duration: 456,
    },
    {
      id: 12,
      title: 'Essential Shortcuts',
      description: 'Learn the most important keyboard shortcuts for daily use.',
      duration: 538,
    },
    {
      id: 13,
      title: 'Navigation Shortcuts',
      description: 'Master file and code navigation shortcuts.',
      duration: 392,
    },
    {
      id: 14,
      title: 'Editing Shortcuts',
      description: 'Speed up code editing with powerful shortcuts.',
      duration: 574,
    },
    {
      id: 15,
      title: 'Refactoring Shortcuts',
      description: 'Learn shortcuts for common refactoring operations.',
      duration: 495,
    },
    {
      id: 16,
      title: 'Custom Keybindings',
      description: 'Create your own keyboard shortcuts.',
      duration: 341,
    },
    {
      id: 17,
      title: 'Extension Basics',
      description: 'Understanding VS Code extensions and marketplace.',
      duration: 418,
    },
    {
      id: 18,
      title: 'Essential Extensions',
      description: 'Must-have extensions for every developer.',
      duration: 556,
    },
    {
      id: 19,
      title: 'Language Extensions',
      description: 'Best extensions for different programming languages.',
      duration: 472,
    },
    {
      id: 20,
      title: 'Productivity Extensions',
      description: 'Extensions to boost your coding productivity.',
      duration: 298,
    },
    {
      id: 21,
      title: 'Debugging Extensions',
      description: 'Extensions for better debugging experience.',
      duration: 521,
    },
    {
      id: 22,
      title: 'Git Extensions',
      description: 'Enhance your Git workflow with powerful extensions.',
      duration: 385,
    },
    {
      id: 23,
      title: 'Extension Settings',
      description: 'Configuring and managing extension settings.',
      duration: 243,
    },
    {
      id: 24,
      title: 'Git Basics in VS Code',
      description: 'Learn basic Git operations in VS Code.',
      duration: 467,
    },
    {
      id: 25,
      title: 'Working with Git History',
      description: 'Explore and manage Git history in VS Code.',
      duration: 591,
    },
    {
      id: 26,
      title: 'Branch Management',
      description: 'Master Git branching strategies in VS Code.',
      duration: 356,
    },
    {
      id: 27,
      title: 'Merging and Resolving Conflicts',
      description: 'Handle merges and resolve conflicts effectively.',
      duration: 507,
    },
    {
      id: 28,
      title: 'Working with Remotes',
      description: 'Manage remote repositories in VS Code.',
      duration: 429,
    },
    {
      id: 29,
      title: 'Professional Git Workflow',
      description: 'Implement professional Git workflows in VS Code.',
      duration: 583,
    },
    {
      id: 30,
      title: 'Debugging Basics',
      description: 'Learn the fundamentals of debugging in VS Code.',
      duration: 314,
    },
    {
      id: 31,
      title: 'Debug Configurations',
      description: 'Set up and customize debug configurations.',
      duration: 488,
    },
    {
      id: 32,
      title: 'Advanced Debugging',
      description: 'Master advanced debugging techniques.',
      duration: 562,
    },
    {
      id: 33,
      title: 'Remote Debugging',
      description: 'Debug applications running on remote machines.',
      duration: 405,
    },
    {
      id: 34,
      title: 'Web Development Setup',
      description: 'Set up VS Code for web development.',
      duration: 276,
    },
    {
      id: 35,
      title: 'HTML and CSS Tools',
      description: 'Essential tools for HTML and CSS development.',
      duration: 531,
    },
    {
      id: 36,
      title: 'JavaScript Tools',
      description: 'Tools for JavaScript development.',
      duration: 447,
    },
    {
      id: 37,
      title: 'Web Debugging',
      description: 'Debug web applications effectively.',
      duration: 378,
    },
    {
      id: 38,
      title: 'Web Development Extensions',
      description: 'Must-have extensions for web development.',
      duration: 229,
    },
    {
      id: 39,
      title: 'Browser Integration',
      description: 'Integrate VS Code with browsers for development.',
      duration: 504,
    },
    {
      id: 40,
      title: 'Framework Tools',
      description: 'Tools for popular web frameworks.',
      duration: 568,
    },
    {
      id: 41,
      title: 'Web Performance Tools',
      description: 'Tools for optimizing web applications.',
      duration: 335,
    },
    {
      id: 42,
      title: 'Essential Keyboard Shortcuts',
      description:
        'Learn the most important keyboard shortcuts to boost your productivity.',
      duration: 492,
    },
    {
      id: 43,
      title: 'Custom Keybindings',
      description:
        'Create your own keyboard shortcuts and modify existing ones.',
      duration: 412,
    },
    {
      id: 44,
      title: 'Vim Keybindings',
      description: 'Master Vim keybindings in VS Code for advanced editing.',
      duration: 545,
    },
    {
      id: 45,
      title: 'Extension Basics',
      description: 'Learn how to find, install, and manage VS Code extensions.',
      duration: 302,
    },
    {
      id: 46,
      title: 'Must-Have Extensions',
      description: 'Discover the most popular and useful VS Code extensions.',
      duration: 463,
    },
    {
      id: 47,
      title: 'Extension Development',
      description: 'Create your own VS Code extension from scratch.',
      duration: 597,
    },
    {
      id: 61,
      title: 'Setting Up Prettier',
      description:
        'Install and configure Prettier in your VS Code environment.',
      duration: 361,
    },
    {
      id: 62,
      title: 'Prettier Configuration',
      description: 'Customize Prettier rules to match your coding style.',

      duration: 518,
    },
    {
      id: 63,
      title: 'Prettier Plugins',
      description: 'Extend Prettier with plugins for additional file types.',

      duration: 437,
    },
    {
      id: 48,
      title: 'GitLens Basics',
      description: 'Get started with GitLens and its core features.',
      duration: 284,
    },
    {
      id: 49,
      title: 'Blame Annotations',
      description: 'Master GitLens blame annotations and history.',
      duration: 551,
    },
    {
      id: 50,
      title: 'Advanced GitLens Features',
      description: 'Explore advanced GitLens features for Git mastery.',
      duration: 476,
    },
    {
      id: 51,
      title: 'Setting Up Live Share',
      description: 'Install and configure Live Share for collaborative coding.',
      duration: 349,
    },
    {
      id: 52,
      title: 'Collaboration Basics',
      description:
        'Learn the fundamentals of collaborative coding with Live Share.',
      duration: 526,
    },
    {
      id: 53,
      title: 'Advanced Collaboration',
      description: 'Master advanced Live Share features for team productivity.',
      duration: 394,
    },
    {
      id: 54,
      title: 'Introduction to Git Mastery',
      description:
        'Learn the basics of Git and version control within VS Code.',
      duration: 452,
    },
    {
      id: 55,
      title: 'Introduction to Debugging',
      description: 'Understand the fundamentals of debugging in VS Code.',
      duration: 319,
    },
    {
      id: 56,
      title: 'Setting Up Your Web Dev Environment',
      description: 'Configure VS Code for optimal web development.',
      duration: 577,
    },
    {
      id: 57,
      title: 'Setting Up Your Python Environment',
      description: 'Configure VS Code for professional Python development.',
      duration: 408,
    },
    {
      id: 58,
      title: 'Setting Up Your React Environment',
      description:
        'Optimize VS Code for React and modern JavaScript development.',
      duration: 485,
    },
    {
      id: 59,
      title: 'Introduction to Remote Development',
      description: 'Learn how to use VS Code for remote development workflows.',
      duration: 252,
    },
    {
      id: 60,
      title: 'Introduction to Testing Tools',
      description:
        'Discover how to set up and use testing frameworks in VS Code.',
      duration: 542,
    },
  ])

  function getLessonById(id: number) {
    return lessons.value.find((lesson) => lesson.id === id)
  }

  function getLessonsByIds(ids: number[]) {
    return lessons.value.filter((lesson) => ids.includes(lesson.id))
  }

  function getLessonBySlug(slug: string) {
    return lessons.value.find((lesson) => slugify(lesson.title) === slug)
  }

  return { lessons, getLessonById, getLessonsByIds, getLessonBySlug }
})
