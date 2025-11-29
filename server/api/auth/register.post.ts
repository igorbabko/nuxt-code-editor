import { eq } from 'drizzle-orm'
import { users } from '../../database/schema'

export default defineEventHandler(async (event) => {
  const { email, password, name } = await readBody(event)

  const db = useDrizzle()

  // Check if user already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .get()

  if (existingUser) {
    throw createError({
      statusCode: 409,
      message: 'Email already registered',
    })
  }

  // Hash password
  const hashedPassword = await hashPassword(password)

  // Insert new user
  const newUser = await db
    .insert(users)
    .values({
      email,
      password: hashedPassword,
      name: name || null,
    })
    .returning({
      id: users.id,
      email: users.email,
      name: users.name,
    })
    .get()

  // Set user session
  await setUserSession(event, {
    user: {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
    },
    loggedInAt: Date.now(),
  })

  return {
    user: newUser,
  }
})
