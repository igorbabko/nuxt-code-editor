import crypto from 'crypto'
import { eq } from 'drizzle-orm'
import { users, emailVerificationTokens } from '../../database/schema'
import { validateEmail, validatePassword } from '~/utils/validation'

export default defineEventHandler(async (event) => {
  const { email, password, name } = await readBody(event)

  // Validate inputs
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

  // Generate email verification token
  const token = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

  await db.insert(emailVerificationTokens).values({
    userId: newUser.id,
    token,
    expiresAt,
  })

  const verifyUrl = `${getRequestURL(event).origin}/verify-email?token=${token}`

  // Log to console (in production, this would send an email)
  console.log('='.repeat(60))
  console.log('EMAIL VERIFICATION LINK')
  console.log('='.repeat(60))
  console.log(`Email: ${email}`)
  console.log(`Verify URL: ${verifyUrl}`)
  console.log(`Expires: ${expiresAt.toISOString()}`)
  console.log('='.repeat(60))

  // Set user session
  await setUserSession(event, {
    user: {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      emailVerified: false,
    },
    loggedInAt: Date.now(),
  })

  return {
    user: newUser,
  }
})
