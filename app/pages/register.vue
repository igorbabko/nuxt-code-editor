<script setup lang="ts">
definePageMeta({ layout: 'auth' })

const emailError = ref('')
const passwordError = ref('')
const passwordConfirmationError = ref('')

const email = ref('')
const password = ref('')
const passwordConfirmation = ref('')

watch(email, (value) => {
  emailError.value = validateEmail(value) ?? ''
})

watch(password, (value) => {
  passwordError.value = validatePassword(value) ?? ''
})

watch(passwordConfirmation, (value) => {
  passwordConfirmationError.value =
    validatePasswordConfirmation(password.value, value) ?? ''
})

const isFormValid = computed(() => {
  const hasErrors = Boolean(
    emailError.value || passwordError.value || passwordConfirmationError.value,
  )

  const allFieldsFilled =
    email.value && password.value && passwordConfirmation.value

  return !hasErrors && allFieldsFilled
})

const { loggedIn, fetch: fetchUserSession } = useUserSession()

if (loggedIn.value) {
  navigateTo('/playlists')
}

async function handleRegister() {
  await $fetch('/api/register', {
    method: 'POST',
    body: {
      email: email.value,
      password: password.value,
    },
  })

  await fetchUserSession()

  await navigateTo('/playlists')
}
</script>

<template>
  <form
    @submit.prevent="handleRegister"
    class="flex flex-col gap-y-4 sm:gap-y-6"
  >
    <AppFormField
      v-model.trim="email"
      type="email"
      id="email"
      :error="emailError"
    >
      Email
    </AppFormField>
    <AppFormField
      v-model="password"
      type="password"
      id="password"
      :error="passwordError"
    >
      Password
    </AppFormField>
    <AppFormField
      v-model="passwordConfirmation"
      type="password"
      id="passwordConfirmation"
      :error="passwordConfirmationError"
    >
      Password Confirmation
    </AppFormField>
    <AppButton class="mt-2 sm:mt-1" :disabled="!isFormValid">Sign Up</AppButton>
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
