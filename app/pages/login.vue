<script setup lang="ts">
definePageMeta({ layout: 'auth' })

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const route = useRoute()
const { loggedIn, user, fetch: refreshSession } = useUserSession()

// Redirect if already logged in
if (loggedIn.value) {
  navigateTo(user.value?.emailVerified ? '/playlists' : '/verify-email')
}

async function handleLogin() {
  error.value = ''

  // Client-side validation
  if (!email.value.trim() || !password.value) {
    error.value = 'Email and password are required'
    return
  }

  loading.value = true

  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        email: email.value.trim(),
        password: password.value,
      },
    })

    // Refresh the session on client-side (Nuxt 4 best practice)
    await refreshSession()

    // Redirect based on verification status
    const { user: freshUser } = useUserSession()
    if (!freshUser.value?.emailVerified) {
      await navigateTo('/verify-email')
    } else {
      const redirectTo = (route.query.redirect as string) || '/playlists'
      await navigateTo(redirectTo)
    }
  } catch (e: any) {
    error.value = e.data?.message || 'Login failed. Please try again.'
  } finally {
    loading.value = false
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

    <AppFormField v-model="email" type="email" id="email" required autofocus>
      Email
    </AppFormField>
    <AppFormField v-model="password" type="password" id="password" required>
      Password
    </AppFormField>
    <AppButton type="submit" :disabled="loading" class="mt-2 sm:mt-1">
      {{ loading ? 'Signing in...' : 'Log In' }}
    </AppButton>
  </form>
  <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
    <NuxtLink
      to="/forgot-password"
      class="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
    >
      Forgot your password?
    </NuxtLink>
  </p>
  <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
    Don't have an account?
    <NuxtLink
      to="/register"
      class="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
    >
      Sign Up
    </NuxtLink>
  </p>
</template>
