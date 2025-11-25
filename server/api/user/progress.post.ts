import { userProgress } from '../../database/schema'

export default defineEventHandler(async (event) => {
  // Ensure the user is authenticated (server-side protection)
  const { user } = await requireUserSession(event)

  const { lessonId } = await readBody(event)

  // Validate lessonId
  if (!lessonId || typeof lessonId !== 'number') {
    throw createError({
      statusCode: 400,
      message: 'Valid lessonId is required',
    })
  }

  const db = useDrizzle()

  // Mark lesson as completed for this user
  const newProgress = await db
    .insert(userProgress)
    .values({
      userId: user.id,
      lessonId,
    })
    .onConflictDoNothing() // Prevent duplicate entries
    .returning()
    .get()

  return {
    success: true,
    progress: newProgress,
  }
})
