import { lessons } from '../database/schema'

export default defineEventHandler(async () => {
  const db = useDrizzle()
  return await db.select().from(lessons).all()
})
