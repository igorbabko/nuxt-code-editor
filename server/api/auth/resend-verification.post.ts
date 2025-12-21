import crypto from 'crypto'
import { eq } from 'drizzle-orm'
import { emailVerificationTokens, users } from '../../database/schema'

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)

  const db = useDrizzle()

  // Check if user is already verified
  const dbUser = await db.select().from(users).where(eq(users.id, user.id)).get()

  if (!dbUser) {
    throw createError({
      statusCode: 400,
      message: 'User not found',
    })
  }

  if (dbUser.emailVerified) {
    throw createError({
      statusCode: 400,
      message: 'Email is already verified',
    })
  }

  // Delete any existing tokens for this user
  await db.delete(emailVerificationTokens).where(eq(emailVerificationTokens.userId, user.id))

  // Generate new token
  const token = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

  await db.insert(emailVerificationTokens).values({
    userId: user.id,
    token,
    expiresAt,
  })

  const verifyUrl = `${getRequestURL(event).origin}/verify-email?token=${token}`

  // Log to console (in production, this would send an email)
  console.log('='.repeat(60))
  console.log('EMAIL VERIFICATION LINK')
  console.log('='.repeat(60))
  console.log(`Email: ${user.email}`)
  console.log(`Verify URL: ${verifyUrl}`)
  console.log(`Expires: ${expiresAt.toISOString()}`)
  console.log('='.repeat(60))

  return {
    message: 'Verification email sent',
  }
})
