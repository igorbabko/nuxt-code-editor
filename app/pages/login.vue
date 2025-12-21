<script setup lang="ts">
definePageMeta({ layout: 'auth' })

const email = ref('')
const password = ref('')
const error = ref('')

const { loggedIn, fetch: fetchUserSession } = useUserSession()

if (loggedIn.value) {
  navigateTo('/playlists')
}

async function handleLogin() {
  try {
    await $fetch('/api/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      },
    })

    await fetchUserSession()

    await navigateTo('/playlists')
  } catch (e: any) {
    error.value = e.data?.message || 'Login failed. Please try again.'
  }
}
</script>

<template>
  <form @submit.prevent="handleLogin" class="flex flex-col gap-y-4 sm:gap-y-6">
    <div
      v-if="error"
      class="rounded-lg bg-red-100 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"
    >
      {{ error }}
    </div>
    <AppFormField v-model="email" type="email" id="email" required>
      Email
    </AppFormField>
    <AppFormField v-model="password" type="password" id="password" required>
      Password
    </AppFormField>
    <AppButton class="mt-2 sm:mt-1">Log In</AppButton>
  </form>
  <p class="mt-6 text-center text-sm text-gray-600 sm:mt-8 dark:text-gray-300">
    Don't have an account?
    <NuxtLink
      to="/register"
      class="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
    >
      Sign Up
    </NuxtLink>
  </p>
</template>
