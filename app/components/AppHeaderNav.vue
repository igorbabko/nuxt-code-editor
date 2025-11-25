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
  <nav class="hidden grow sm:block">
    <ul class="flex items-center gap-x-8">
      <li class="mr-auto">
        <AppHeaderNavLink to="/playlists">Library</AppHeaderNavLink>
      </li>
      <template v-if="loggedIn">
        <li class="text-sm text-gray-700 dark:text-gray-300">
          {{ user?.name || user?.email }}
        </li>
        <li>
          <button
            @click="handleLogout"
            class="text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
          >
            Logout
          </button>
        </li>
      </template>
      <template v-else>
        <li>
          <AppHeaderNavLink to="/login">Log In</AppHeaderNavLink>
        </li>
        <li>
          <AppButton to="/register">Sign Up</AppButton>
        </li>
      </template>
    </ul>
  </nav>
</template>
