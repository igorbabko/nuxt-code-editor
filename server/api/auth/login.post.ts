import { eq } from 'drizzle-orm'
import { users } from '../../database/schema'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)

  // Validate inputs
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: 'Email and password are required',
    })
  }

  const db = useDrizzle()

  // Find user by email
  const user = await db.select().from(users).where(eq(users.email, email)).get()

  if (!user) {
    throw createError({
      statusCode: 401,
      message: 'Invalid credentials',
    })
  }

  // Verify password
  const isPasswordValid = await verifyPassword(user.password, password)

  if (!isPasswordValid) {
    throw createError({
      statusCode: 401,
      message: 'Invalid credentials',
    })
  }

  // Set user session
  await setUserSession(event, {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      emailVerified: user.emailVerified,
    },
    loggedInAt: Date.now(),
  })

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      emailVerified: user.emailVerified,
    },
  }
})
