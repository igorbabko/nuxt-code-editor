export function throw404(message: string): never {
  throw createError({ statusCode: 404, message })
}
