import crypto from 'crypto'
import { eq } from 'drizzle-orm'
import { users, passwordResetTokens } from '../../database/schema'
import { validateEmail } from '~/utils/validation'

export default defineEventHandler(async (event) => {
  const { email } = await readBody(event)

  const emailError = validateEmail(email)
  if (emailError) {
    throw createError({
      statusCode: 400,
      message: emailError,
    })
  }

  const db = useDrizzle()

  const user = await db.select().from(users).where(eq(users.email, email)).get()

  // Always return success message to prevent email enumeration
  if (!user) {
    return {
      message: 'If an account exists with this email, you will receive a password reset link.',
    }
  }

  // Delete any existing tokens for this user
  await db.delete(passwordResetTokens).where(eq(passwordResetTokens.userId, user.id))

  // Generate secure token
  const token = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

  await db.insert(passwordResetTokens).values({
    userId: user.id,
    token,
    expiresAt,
  })

  const resetUrl = `${getRequestURL(event).origin}/reset-password?token=${token}`

  // Log to console (in production, this would send an email)
  console.log('='.repeat(60))
  console.log('PASSWORD RESET LINK')
  console.log('='.repeat(60))
  console.log(`Email: ${email}`)
  console.log(`Reset URL: ${resetUrl}`)
  console.log(`Expires: ${expiresAt.toISOString()}`)
  console.log('='.repeat(60))

  return {
    message: 'If an account exists with this email, you will receive a password reset link.',
  }
})
