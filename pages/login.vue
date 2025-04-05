<script setup lang="ts">
definePageMeta({ layout: 'auth' })
</script>

<template>
  <section class="flex w-full flex-col items-center gap-y-4 p-3 sm:gap-y-6">
    <NuxtLink to="/" class="flex items-center">
      <Icon
        name="code"
        class="size-14 -rotate-6 text-indigo-600 sm:size-16 dark:text-white"
      />
    </NuxtLink>
    <div
      class="h-full w-full rounded-md border border-gray-200 bg-white p-4 shadow-sm sm:w-96 sm:rounded-lg sm:p-6 dark:border-black dark:bg-gray-900 dark:shadow-none"
    >
      <form class="flex flex-col gap-y-4 sm:gap-y-6">
        <div class="flex flex-col gap-y-1">
          <label
            class="text-sm font-medium text-gray-600 sm:text-base dark:text-gray-300"
            for="email"
            >Email</label
          >
          <input
            class="rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-indigo-600 focus:ring-1 sm:rounded-lg sm:text-base dark:border-0 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-indigo-400"
            type="email"
            id="email"
          />
        </div>
        <div class="flex flex-col gap-y-1">
          <label
            class="text-sm font-medium text-gray-600 sm:text-base dark:text-gray-300"
            for="password"
          >
            Password
          </label>
          <input
            class="rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-indigo-600 focus:ring-1 sm:rounded-lg sm:text-base dark:border-0 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-indigo-400"
            type="password"
            id="password"
          />
        </div>
        <button
          class="mt-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-indigo-50 hover:bg-indigo-700 sm:mt-1 sm:rounded-lg sm:text-base"
        >
          Log In
        </button>
      </form>
      <p
        class="mt-6 text-center text-sm text-gray-600 sm:mt-8 dark:text-gray-300"
      >
        Don't have an account?
        <NuxtLink
          to="/register"
          class="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          Sign Up
        </NuxtLink>
      </p>
    </div>
  </section>
</template>
