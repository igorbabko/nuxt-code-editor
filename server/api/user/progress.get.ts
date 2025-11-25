import { eq } from 'drizzle-orm'
import { userProgress } from '../../database/schema'

export default defineEventHandler(async (event) => {
  // Ensure the user is authenticated (server-side protection)
  // This will throw a 401 error if the request doesn't come from a valid user session
  const { user } = await requireUserSession(event)

  const db = useDrizzle()

  // Fetch the user's completed lessons
  const completedLessons = await db
    .select()
    .from(userProgress)
    .where(eq(userProgress.userId, user.id))
    .all()

  return {
    completedLessons: completedLessons.map((progress) => ({
      lessonId: progress.lessonId,
      completedAt: progress.completedAt,
    })),
  }
})
