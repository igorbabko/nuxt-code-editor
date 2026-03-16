# Nuxt Code Editor - GEMINI Context

This project is a modern, full-stack educational platform for coding tutorials, lessons, and playlists, built with **Nuxt 4** and **Vue 3**.

## Project Overview

*   **Purpose:** An educational platform ("Code Editor") for managing and displaying coding playlists and lessons.
*   **Main Technologies:**
    *   **Framework:** [Nuxt 4](https://nuxt.com/) (Vue.js 3)
    *   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (using `@tailwindcss/vite` plugin)
    *   **State Management:** [Pinia](https://pinia.vuejs.org/)
    *   **Database:** [Drizzle ORM](https://orm.drizzle.team/) with [Nuxt Hub](https://hub.nuxt.com/) (Cloudflare D1 / SQLite)
    *   **Authentication:** [Nuxt Auth Utils](https://github.com/Atinux/nuxt-auth-utils)
    *   **Icons:** [Nuxt Icon](https://nuxt.com/modules/icon) (Heroicons)
    *   **Fonts:** Google Fonts (Open Sans)

## Architecture

The project follows the Nuxt 4 directory structure:

*   `app/`: Frontend source code.
    *   `assets/`: Global styles (e.g., `main.css`).
    *   `components/`: Reusable Vue components (e.g., `AppHeader`, `AppHero`, `PlaylistGrid`).
    *   `layouts/`: Page layouts (`default`, `auth`).
    *   `pages/`: File-based routing (e.g., `index.vue`, `playlists/`, `login.vue`).
    *   `stores/`: Pinia stores for state management (e.g., `playlists.ts`, `lessons.ts`, `tags.ts`).
    *   `utils/`: Client-side utility functions.
*   `server/`: Nitro server-side logic.
    *   `api/`: API endpoints (e.g., `login.post.ts`, `register.post.ts`).
    *   `database/`: Drizzle schema and migrations.
    *   `utils/`: Server-side utilities (e.g., `drizzle.ts`).
*   `public/`: Static assets (images, icons).

## Building and Running

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server at `http://localhost:3000`. |
| `npm run build` | Builds the application for production. |
| `npm run preview` | Locally previews the production build. |
| `npm run generate` | Generates a static version of the site. |
| `npm run db:generate` | Generates Drizzle migrations based on the schema. |
| `npm install` | Installs project dependencies. |

## Development Conventions

*   **Component Structure:** Prefer modern Vue 3 `<script setup>` syntax with TypeScript.
*   **Styling:** Use Tailwind CSS 4 utility classes for styling.
*   **State Management:** Utilize Pinia stores in `app/stores/` for managing global state.
*   **Database:** Use Drizzle ORM for all database interactions. Schema is defined in `server/database/schema.ts`.
*   **Auto-imports:** Leverage Nuxt's auto-import feature for components, composables, and utilities.
*   **Naming:** Use `App*` prefix for base/global components (e.g., `AppButton`, `AppInput`).
