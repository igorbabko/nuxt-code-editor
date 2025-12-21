import { users } from '../database/schema'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: 'Email and password are required',
    })
  }

  const db = useDrizzle()

  const user = await db.select().from(users).where(eq(users.email, email)).get()

  if (!user) {
    throw createError({
      statusCode: 401,
      message: 'Invalid credentials',
    })
  }

  const isPasswordValid = await verifyPassword(user.password, password)

  if (!isPasswordValid) {
    throw createError({
      statusCode: 401,
      message: 'Invalid credentials',
    })
  }

  await setUserSession(event, {
    user: {
      id: user.id,
      email: user.email,
    },
    loggedInAt: Date.now(),
  })

  return {
    id: user.id,
    email: user.email,
  }
})
