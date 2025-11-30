<script setup lang="ts">
definePageMeta({ layout: 'auth' })

const email = ref('')
const password = ref('')
const passwordConfirmation = ref('')

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
    <AppFormField v-model.trim="email" type="email" id="email">
      Email
    </AppFormField>
    <AppFormField v-model="password" type="password" id="password">
      Password
    </AppFormField>
    <AppFormField
      v-model="passwordConfirmation"
      type="password"
      id="passwordConfirmation"
    >
      Password Confirmation
    </AppFormField>
    <AppButton class="mt-2 sm:mt-1">Sign Up</AppButton>
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
