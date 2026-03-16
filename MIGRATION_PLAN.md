# Migration Plan: Hardcoded Data to Database

This plan outlines the steps to move the currently hardcoded data in Pinia stores to a persistent SQLite database using Drizzle ORM and Nuxt Hub.

## Phase 1: Database Schema Expansion
1.  **Update `server/database/schema.ts`**:
    *   Define `tags` table (`id`, `name`).
    *   Define `lessons` table (`id`, `title`, `description`, `duration`).
    *   Define `playlists` table (`id`, `title`, `description`).
    *   Define `playlists_to_tags` junction table (Many-to-Many).
    *   Define `playlists_to_lessons` junction table (Many-to-Many).

## Phase 2: Data Seeding
1.  **Create Seeding Script**:
    *   Develop a temporary Nitro API endpoint (e.g., `server/api/seed.post.ts`) or a standalone script to populate the database with the current hardcoded data from the Pinia stores.
    *   This ensures no data is lost during the transition.

## Phase 3: Server API Implementation
1.  **Create GET Endpoints**:
    *   `server/api/tags.get.ts`: Returns all tags.
    *   `server/api/lessons.get.ts`: Returns all lessons.
    *   `server/api/playlists.get.ts`: Returns all playlists with their associated tags and lessons (joined data).

## Phase 4: Frontend Integration (Pinia Update)
1.  **Refactor Pinia Stores**:
    *   Update `app/stores/tags.ts`, `app/stores/lessons.ts`, and `app/stores/playlists.ts` to fetch data from the new API endpoints using Nuxt's `useFetch` or `$fetch`.
    *   Initialize data in a `fetch()` method or within the store's setup function.
    *   Ensure existing helper methods (like `getPlaylistBySlug`) continue to work with the fetched data.

## Phase 5: Cleanup and Validation
1.  **Remove Hardcoded Data**: Delete the hardcoded arrays from the Pinia stores.
2.  **Verify UI**: Ensure all pages (`/playlists`, `/playlists/[slug]`, etc.) correctly display data from the database.
3.  **Run Migrations**: Execute `npm run db:generate` and apply migrations to the Nuxt Hub database.
