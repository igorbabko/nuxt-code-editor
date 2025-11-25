export default defineEventHandler(async (event) => {
  // Ensure the user is authenticated (server-side protection)
  // This will throw a 401 error if the request doesn't come from a valid user session
  const { user } = await requireUserSession(event)

  // Return the authenticated user's information
  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
  }
})
