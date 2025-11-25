<script setup lang="ts">
const { loggedIn, user, clear } = useUserSession()

async function handleLogout() {
  try {
    await $fetch('/api/auth/logout', { method: 'POST' })
    await clear()
    navigateTo('/login')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}
</script>

<template>
  <div class="flex sm:hidden">
    <nav
      id="nav"
      class="peer absolute inset-x-0 top-full hidden border-b border-gray-200 bg-white target:block dark:border-0 dark:bg-gray-900"
    >
      <ul class="flex flex-col gap-y-2 px-3 pb-3">
        <li>
          <AppHeaderMobileNavLink to="/playlists">
            Library
          </AppHeaderMobileNavLink>
        </li>
        <template v-if="loggedIn">
          <li class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
            {{ user?.name || user?.email }}
          </li>
          <li>
            <button
              @click="handleLogout"
              class="w-full rounded-md px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Logout
            </button>
          </li>
        </template>
        <template v-else>
          <li>
            <AppHeaderMobileNavLink to="/login">Log In</AppHeaderMobileNavLink>
          </li>
          <li>
            <AppButton lg to="/register" class="inline-block w-full text-center">
              Sign Up
            </AppButton>
          </li>
        </template>
      </ul>
    </nav>
    <AppHeaderMobileNavButton
      to="#nav"
      icon="bars"
      class="peer-target:hidden peer-target:[&+a]:block"
    />
    <AppHeaderMobileNavButton to="#" icon="xMark" class="hidden" />
  </div>
</template>
