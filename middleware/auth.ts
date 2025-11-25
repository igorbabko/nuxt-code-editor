export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useUserSession()

  // If user is not logged in, redirect to login page
  if (!loggedIn.value) {
    return navigateTo({
      path: '/login',
      query: {
        redirect: to.fullPath,
      },
    })
  }
})
