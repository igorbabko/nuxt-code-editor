<script setup lang="ts">
definePageMeta({ layout: 'auth' })

const route = useRoute()
const token = computed(() => route.query.token as string | undefined)

const error = ref('')
const success = ref(false)
const verifying = ref(false)
const resending = ref(false)
const resendSuccess = ref(false)

const { user, fetch: refreshSession } = useUserSession()

// If user is already verified, redirect
if (user.value?.emailVerified) {
  navigateTo('/playlists')
}

// If token is present, verify automatically
onMounted(async () => {
  if (token.value) {
    verifying.value = true
    try {
      await $fetch('/api/auth/verify-email', {
        method: 'POST',
        body: { token: token.value },
      })
      await refreshSession()
      success.value = true
    } catch (e: any) {
      error.value = e.data?.message || 'Verification failed'
    } finally {
      verifying.value = false
    }
  }
})

async function handleResend() {
  error.value = ''
  resendSuccess.value = false
  resending.value = true

  try {
    await $fetch('/api/auth/resend-verification', {
      method: 'POST',
    })
    resendSuccess.value = true
  } catch (e: any) {
    error.value = e.data?.message || 'Failed to resend verification email'
  } finally {
    resending.value = false
  }
}
</script>

<template>
  <!-- Verifying token -->
  <div v-if="verifying" class="flex flex-col items-center gap-y-4 py-8">
    <p class="text-sm text-gray-600 dark:text-gray-300">Verifying your email...</p>
  </div>

  <!-- Verification success -->
  <div v-else-if="success" class="flex flex-col gap-y-4">
    <div class="rounded-lg bg-green-100 p-3 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400">
      Your email has been verified successfully!
    </div>
    <NuxtLink
      to="/playlists"
      class="mt-2 flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-3 font-medium text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
    >
      Continue to App
    </NuxtLink>
  </div>

  <!-- Waiting for verification -->
  <div v-else class="flex flex-col gap-y-4 sm:gap-y-6">
    <p class="text-sm text-gray-600 dark:text-gray-300">
      We've sent a verification link to <strong>{{ user?.email }}</strong>. Please check your email and click the link
      to verify your account.
    </p>

    <div
      v-if="error"
      class="rounded-lg bg-red-100 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"
    >
      {{ error }}
    </div>

    <div
      v-if="resendSuccess"
      class="rounded-lg bg-green-100 p-3 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400"
    >
      Verification email sent! Check your console for the link.
    </div>

    <AppButton type="button" :disabled="resending" @click="handleResend" class="mt-2">
      {{ resending ? 'Sending...' : 'Resend Verification Email' }}
    </AppButton>

    <p class="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
      Check your console for the verification link (development mode).
    </p>
  </div>
</template>
