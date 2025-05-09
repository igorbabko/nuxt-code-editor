<script setup lang="ts">
definePageMeta({ layout: 'auth' })
</script>

<template>
  <form class="flex flex-col gap-y-4 sm:gap-y-6">
    <AppFormField type="email" id="email">Email</AppFormField>
    <AppFormField type="password" id="password">Password</AppFormField>
    <AppFormField type="password" id="passwordConfirmation">
      Password Confirmation
    </AppFormField>
    <button
      class="mt-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-indigo-50 hover:bg-indigo-700 sm:mt-1 sm:rounded-lg sm:text-base"
    >
      Sign Up
    </button>
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
