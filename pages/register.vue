<script setup lang="ts">
definePageMeta({ layout: 'auth' })
</script>

<template>
  <form class="flex flex-col gap-y-4 sm:gap-y-6">
    <div class="flex flex-col gap-y-1">
      <label
        for="email"
        class="text-sm font-medium text-gray-600 sm:text-base dark:text-gray-300"
        >Email</label
      >
      <input
        type="email"
        id="email"
        class="rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-indigo-600 focus:ring-1 sm:rounded-lg sm:text-base dark:border-0 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-indigo-400"
      />
    </div>
    <div class="flex flex-col gap-y-1">
      <label
        for="password"
        class="text-sm font-medium text-gray-600 sm:text-base dark:text-gray-300"
        >Password</label
      >
      <input
        type="password"
        id="password"
        class="rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-indigo-600 focus:ring-1 sm:rounded-lg sm:text-base dark:border-0 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-indigo-400"
      />
    </div>
    <div class="flex flex-col gap-y-1">
      <label
        for="passwordConfirmation"
        class="text-sm font-medium text-gray-600 sm:text-base dark:text-gray-300"
      >
        Password Confirmation
      </label>
      <input
        type="password"
        id="passwordConfirmation"
        class="rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-indigo-600 focus:ring-1 sm:rounded-lg sm:text-base dark:border-0 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-indigo-400"
      />
    </div>
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
