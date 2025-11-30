import { validateEmail, validatePassword } from '~/utils/validation'
import { users } from '../database/schema'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)

  const emailError = validateEmail(email)

  if (emailError) {
    throw createError({
      statusCode: 400,
      message: emailError,
    })
  }

  const passwordError = validatePassword(password)

  if (passwordError) {
    throw createError({
      statusCode: 400,
      message: passwordError,
    })
  }

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
