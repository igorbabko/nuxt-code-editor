import { integer, sqliteTable, text, primaryKey } from 'drizzle-orm/sqlite-core'
import { relations } from 'drizzle-orm'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
})

export const tags = sqliteTable('tags', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
})

export const lessons = sqliteTable('lessons', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description').notNull(),
  duration: integer('duration').notNull(),
  playlistId: integer('playlist_id')
    .notNull()
    .references(() => playlists.id),
  order: integer('order').notNull(),
})

export const playlists = sqliteTable('playlists', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description').notNull(),
})

export const playlistsRelations = relations(playlists, ({ many }) => ({
  playlistsToTags: many(playlistsToTags),
  lessons: many(lessons),
}))

export const playlistsToTags = sqliteTable('playlists_to_tags', {
  playlistId: integer('playlist_id')
    .notNull()
    .references(() => playlists.id),
  tagId: integer('tag_id')
    .notNull()
    .references(() => tags.id),
}, (t) => ({
  pk: primaryKey({ columns: [t.playlistId, t.tagId] }),
}))

export const playlistsToTagsRelations = relations(playlistsToTags, ({ one }) => ({
  tag: one(tags, {
    fields: [playlistsToTags.tagId],
    references: [tags.id],
  }),
}))
