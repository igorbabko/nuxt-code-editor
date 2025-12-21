import { eq } from 'drizzle-orm'
import { passwordResetTokens } from '../../database/schema'

export default defineEventHandler(async (event) => {
  const { token } = await readBody(event)

  if (!token) {
    throw createError({
      statusCode: 400,
      message: 'Token is required',
    })
  }

  const db = useDrizzle()

  const resetToken = await db
    .select()
    .from(passwordResetTokens)
    .where(eq(passwordResetTokens.token, token))
    .get()

  if (!resetToken) {
    throw createError({
      statusCode: 400,
      message: 'Invalid or expired reset link',
    })
  }

  if (new Date() > resetToken.expiresAt) {
    throw createError({
      statusCode: 400,
      message: 'Reset link has expired',
    })
  }

  if (resetToken.usedAt) {
    throw createError({
      statusCode: 400,
      message: 'Reset link has already been used',
    })
  }

  return { valid: true }
})
