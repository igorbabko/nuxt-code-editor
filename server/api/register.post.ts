import { users } from '../database/schema'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)

  const db = useDrizzle()

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

  const hashedPassword = await hashPassword(password)

  const newUser = await db
    .insert(users)
    .values({
      email,
      password: hashedPassword,
    })
    .returning({
      id: users.id,
      email: users.email,
    })
    .get()

  await setUserSession(event, {
    user: {
      id: newUser.id,
      email: newUser.email,
    },
    loggedInAt: Date.now(),
  })

  return newUser
})
