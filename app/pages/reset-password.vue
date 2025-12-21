<script setup lang="ts">
definePageMeta({ layout: 'auth' })

const route = useRoute()
const token = computed(() => route.query.token as string)

const password = ref('')
const passwordConfirmation = ref('')
const error = ref('')
const success = ref(false)
const loading = ref(false)
const validatingToken = ref(true)
const tokenValid = ref(false)

const passwordError = ref('')
const passwordConfirmationError = ref('')

watch(password, (value) => {
  passwordError.value = validatePassword(value) ?? ''
  if (passwordConfirmation.value) {
    passwordConfirmationError.value = validatePasswordConfirmation(value, passwordConfirmation.value) ?? ''
  }
})

watch(passwordConfirmation, (value) => {
  passwordConfirmationError.value = validatePasswordConfirmation(password.value, value) ?? ''
})

const hasErrors = computed(() => Boolean(passwordError.value || passwordConfirmationError.value))

const { loggedIn } = useUserSession()

// Redirect if already logged in
if (loggedIn.value) {
  navigateTo('/playlists')
}

// Validate token on mount
onMounted(async () => {
  if (!token.value) {
    error.value = 'No reset token provided'
    validatingToken.value = false
    return
  }

  try {
    await $fetch('/api/auth/verify-reset-token', {
      method: 'POST',
      body: { token: token.value },
    })
    tokenValid.value = true
  } catch (e: any) {
    error.value = e.data?.message || 'Invalid or expired reset link'
  } finally {
    validatingToken.value = false
  }
})

async function handleSubmit() {
  error.value = ''

  passwordError.value = validatePassword(password.value) ?? ''
  passwordConfirmationError.value = validatePasswordConfirmation(password.value, passwordConfirmation.value) ?? ''

  if (passwordError.value || passwordConfirmationError.value) {
    return
  }

  loading.value = true

  try {
    await $fetch('/api/auth/reset-password', {
      method: 'POST',
      body: {
        token: token.value,
        password: password.value,
      },
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
  <!-- Loading state -->
  <div v-if="validatingToken" class="flex flex-col items-center gap-y-4 py-8">
    <p class="text-sm text-gray-600 dark:text-gray-300">Validating reset link...</p>
  </div>

  <!-- Success state -->
  <div v-else-if="success" class="flex flex-col gap-y-4">
    <div class="rounded-lg bg-green-100 p-3 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400">
      Your password has been reset successfully.
    </div>
    <NuxtLink
      to="/login"
      class="mt-2 flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-3 font-medium text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
    >
      Log In
    </NuxtLink>
  </div>

  <!-- Error state (invalid token) -->
  <div v-else-if="!tokenValid" class="flex flex-col gap-y-4">
    <div class="rounded-lg bg-red-100 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
      {{ error }}
    </div>
    <p class="text-center text-sm text-gray-600 dark:text-gray-300">
      <NuxtLink
        to="/forgot-password"
        class="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
      >
        Request a new reset link
      </NuxtLink>
    </p>
  </div>

  <!-- Reset form -->
  <form v-else @submit.prevent="handleSubmit" class="flex flex-col gap-y-4 sm:gap-y-6">
    <p class="text-sm text-gray-600 dark:text-gray-300">Enter your new password below.</p>

    <div
      v-if="error"
      class="rounded-lg bg-red-100 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"
    >
      {{ error }}
    </div>

    <AppFormField
      v-model="password"
      type="password"
      id="password"
      :error="passwordError"
      required
      autofocus
      minlength="8"
    >
      New Password
    </AppFormField>

    <AppFormField
      v-model="passwordConfirmation"
      type="password"
      id="passwordConfirmation"
      :error="passwordConfirmationError"
      required
      minlength="8"
    >
      Confirm New Password
    </AppFormField>

    <AppButton type="submit" :disabled="loading || hasErrors" class="mt-2 sm:mt-1">
      {{ loading ? 'Resetting...' : 'Reset Password' }}
    </AppButton>
  </form>
</template>
