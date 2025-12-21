<script setup lang="ts">
definePageMeta({ layout: 'auth' })

const email = ref('')
const error = ref('')
const success = ref(false)
const loading = ref(false)

const emailError = ref('')

watch(email, (value) => {
  emailError.value = validateEmail(value) ?? ''
})

const { loggedIn } = useUserSession()

// Redirect if already logged in
if (loggedIn.value) {
  navigateTo('/playlists')
}

async function handleSubmit() {
  error.value = ''

  emailError.value = validateEmail(email.value) ?? ''

  if (emailError.value) {
    return
  }

  loading.value = true

  try {
    await $fetch('/api/auth/forgot-password', {
      method: 'POST',
      body: { email: email.value.trim() },
    })

    success.value = true
  } catch (e: any) {
    error.value = e.data?.message || 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div v-if="success" class="flex flex-col gap-y-4">
    <div class="rounded-lg bg-green-100 p-3 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400">
      If an account exists with this email, you will receive a password reset link. Check your console for the reset
      link.
    </div>
    <p class="text-center text-sm text-gray-600 dark:text-gray-300">
      <NuxtLink
        to="/login"
        class="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
      >
        Back to Login
      </NuxtLink>
    </p>
  </div>

  <form v-else @submit.prevent="handleSubmit" class="flex flex-col gap-y-4 sm:gap-y-6">
    <p class="text-sm text-gray-600 dark:text-gray-300">
      Enter your email address and we'll send you a link to reset your password.
    </p>

    <div
      v-if="error"
      class="rounded-lg bg-red-100 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"
    >
      {{ error }}
    </div>

    <AppFormField v-model="email" type="email" id="email" :error="emailError" required autofocus>
      Email
    </AppFormField>

    <AppButton type="submit" :disabled="loading || !!emailError" class="mt-2 sm:mt-1">
      {{ loading ? 'Sending...' : 'Send Reset Link' }}
    </AppButton>
  </form>

  <p v-if="!success" class="mt-6 text-center text-sm text-gray-600 sm:mt-8 dark:text-gray-300">
    Remember your password?
    <NuxtLink
      to="/login"
      class="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
    >
      Log In
    </NuxtLink>
  </p>
</template>
