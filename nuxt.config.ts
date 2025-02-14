// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Code Editor',
      bodyAttrs: {
        class: 'dark dark:bg-gray-800',
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"',
        },
      ],
      script: [
        {
          src: 'https://cdn.tailwindcss.com?plugins=forms',
        },
        {
          innerHTML: `
            tailwind.config = {
              darkMode: 'selector',
              theme: {
                fontFamily: {
                  sans: 'Open Sans'
                },
                container: {
                  center: true,
                  padding: {
                    DEFAULT: '0.75rem',
                    sm: '2rem'
                  }
                }
              }
            }
          `,
        },
      ],
      style: [
        {
          type: 'text/tailwindcss',
          innerHTML: `
            @layer components {
              .hero-image {
                @apply rounded-2xl shadow-2xl;
                transform: rotateX(5deg) rotateY(-10deg) rotateZ(2deg);
              }

              .hero-reflection {
                @apply absolute inset-0 left-20 top-10 rounded-2xl bg-gradient-to-bl from-indigo-200 to-pink-200 dark:from-gray-700 dark:to-gray-500;
                transform: scale(1.1) rotateX(5deg) rotateY(-10deg) rotateZ(2deg);
              }
            }

            @layer utilities {
              .perspective-1000 {
                perspective: 1000px;
              }
            }
          `,
        },
      ],
    },
  },
})
