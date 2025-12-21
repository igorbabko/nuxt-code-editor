<script setup lang="ts">
definePageMeta({ layout: 'auth' })

const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const error = ref('')
const loading = ref(false)

const nameError = ref('')
const emailError = ref('')
const passwordError = ref('')
const passwordConfirmationError = ref('')

watch(name, (value) => {
  nameError.value = validateName(value) ?? ''
})

watch(email, (value) => {
  emailError.value = validateEmail(value) ?? ''
})

watch(password, (value) => {
  passwordError.value = validatePassword(value) ?? ''
  if (passwordConfirmation.value) {
    passwordConfirmationError.value = validatePasswordConfirmation(value, passwordConfirmation.value) ?? ''
  }
})

watch(passwordConfirmation, (value) => {
  passwordConfirmationError.value = validatePasswordConfirmation(password.value, value) ?? ''
})

const hasErrors = computed(() =>
  Boolean(nameError.value || emailError.value || passwordError.value || passwordConfirmationError.value)
)

const { loggedIn, fetch: refreshSession } = useUserSession()

// Redirect if already logged in
if (loggedIn.value) {
  navigateTo('/playlists')
}

async function handleRegister() {
  error.value = ''

  // Trigger validation for all fields
  nameError.value = validateName(name.value) ?? ''
  emailError.value = validateEmail(email.value) ?? ''
  passwordError.value = validatePassword(password.value) ?? ''
  passwordConfirmationError.value = validatePasswordConfirmation(password.value, passwordConfirmation.value) ?? ''

  // Check if any field has an error
  if (nameError.value || emailError.value || passwordError.value || passwordConfirmationError.value) {
    return
  }

  loading.value = true

  try {
    await $fetch('/api/auth/register', {
      method: 'POST',
      body: {
        name: name.value.trim(),
        email: email.value.trim(),
        password: password.value,
      },
    })

    // Refresh the session on client-side (Nuxt 4 best practice)
    await refreshSession()

    // Redirect to playlists after successful registration
    await navigateTo('/playlists')
  } catch (e: any) {
    error.value = e.data?.message || 'Registration failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="handleRegister" class="flex flex-col gap-y-4 sm:gap-y-6">
    <div
      v-if="error"
      class="rounded-lg bg-red-100 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"
    >
      {{ error }}
    </div>

    <AppFormField v-model="name" type="text" id="name" :error="nameError" required>
      Name
    </AppFormField>
    <AppFormField v-model="email" type="email" id="email" :error="emailError" required>
      Email
    </AppFormField>
    <AppFormField v-model="password" type="password" id="password" :error="passwordError" required minlength="8">
      Password
    </AppFormField>
    <AppFormField
      v-model="passwordConfirmation"
      type="password"
      id="passwordConfirmation"
      :error="passwordConfirmationError"
      required
      minlength="8"
    >
      Password Confirmation
    </AppFormField>
    <AppButton type="submit" :disabled="loading || hasErrors" class="mt-2 sm:mt-1">
      {{ loading ? 'Creating account...' : 'Sign Up' }}
    </AppButton>
  </form>
  <p class="mt-6 text-center text-sm text-gray-600 sm:mt-8 dark:text-gray-300">
    Already have an account?
    <NuxtLink
      to="/login"
      class="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
    >
      Log In
    </NuxtLink>
  </p>
</template>
