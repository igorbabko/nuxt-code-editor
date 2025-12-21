import { eq } from 'drizzle-orm'
import { passwordResetTokens, users } from '../../database/schema'
import { validatePassword } from '~/utils/validation'

export default defineEventHandler(async (event) => {
  const { token, password } = await readBody(event)

  if (!token) {
    throw createError({
      statusCode: 400,
      message: 'Token is required',
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

  const hashedPassword = await hashPassword(password)

  await db
    .update(users)
    .set({ password: hashedPassword })
    .where(eq(users.id, resetToken.userId))

  await db
    .update(passwordResetTokens)
    .set({ usedAt: new Date() })
    .where(eq(passwordResetTokens.id, resetToken.id))

  return {
    message: 'Password has been reset successfully',
  }
})
