export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn, user } = useUserSession()

  // If user is not logged in, redirect to login page
  if (!loggedIn.value) {
    return navigateTo({
      path: '/login',
      query: {
        redirect: to.fullPath,
      },
    })
  }

  // If user is not verified, redirect to verify-email page
  if (!user.value?.emailVerified) {
    return navigateTo('/verify-email')
  }
})
