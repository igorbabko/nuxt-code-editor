import { eq } from 'drizzle-orm'
import { emailVerificationTokens, users } from '../../database/schema'

export default defineEventHandler(async (event) => {
  const { token } = await readBody(event)

  if (!token) {
    throw createError({
      statusCode: 400,
      message: 'Token is required',
    })
  }

  const db = useDrizzle()

  const verificationToken = await db
    .select()
    .from(emailVerificationTokens)
    .where(eq(emailVerificationTokens.token, token))
    .get()

  if (!verificationToken) {
    throw createError({
      statusCode: 400,
      message: 'Invalid or expired verification link',
    })
  }

  if (new Date() > verificationToken.expiresAt) {
    throw createError({
      statusCode: 400,
      message: 'Verification link has expired',
    })
  }

  // Mark user as verified
  await db
    .update(users)
    .set({ emailVerified: true })
    .where(eq(users.id, verificationToken.userId))

  // Delete the token
  await db
    .delete(emailVerificationTokens)
    .where(eq(emailVerificationTokens.id, verificationToken.id))

  // Get updated user
  const user = await db
    .select()
    .from(users)
    .where(eq(users.id, verificationToken.userId))
    .get()

  if (!user) {
    throw createError({
      statusCode: 400,
      message: 'User not found',
    })
  }

  // Update session with verified status
  await setUserSession(event, {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      emailVerified: true,
    },
    loggedInAt: Date.now(),
  })

  return {
    message: 'Email verified successfully',
  }
})
