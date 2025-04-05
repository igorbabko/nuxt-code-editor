<script setup lang="ts">
definePageMeta({ layout: 'auth' })
</script>

<template>
  <section class="flex flex-col items-center w-full p-3 gap-y-4 sm:gap-y-6">
    <a href="/" class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        class="text-indigo-600 size-14 sm:size-16 -rotate-6 dark:text-white">
        <path fill-rule="evenodd"
          d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z"
          clip-rule="evenodd" />
      </svg>
    </a>
    <div
      class="w-full h-full p-4 bg-white border border-gray-200 rounded-md shadow-sm sm:p-6 sm:rounded-lg sm:w-96 dark:bg-gray-900 dark:border-black dark:shadow-none">
      <form class="flex flex-col gap-y-4 sm:gap-y-6">
        <div class="flex flex-col gap-y-1">
          <label class="text-sm font-medium text-gray-600 sm:text-base dark:text-gray-300" for="email">Email</label>
          <input
            class="px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm sm:text-base sm:rounded-lg focus:border-indigo-600 focus:ring-1 dark:focus:ring-indigo-400 dark:bg-gray-700 dark:border-0 dark:text-white dark:placeholder:text-gray-400"
            type="email" id="email">
        </div>
        <div class="flex flex-col gap-y-1">
          <label class="text-sm font-medium text-gray-600 sm:text-base dark:text-gray-300" for="password">
            Password
          </label>
          <input
            class="px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm sm:text-base sm:rounded-lg focus:border-indigo-600 focus:ring-1 dark:focus:ring-indigo-400 dark:bg-gray-700 dark:border-0 dark:text-white dark:placeholder:text-gray-400"
            type="password" id="password">
        </div>
        <button
          class="px-6 py-2 mt-2 text-sm font-semibold bg-indigo-600 rounded-md sm:mt-1 sm:rounded-lg text-indigo-50 hover:bg-indigo-700 sm:text-base">
          Log In
        </button>
      </form>
      <p class="mt-6 text-sm text-center text-gray-600 sm:mt-8 dark:text-gray-300">
        Don't have an account?
        <a href="/register.html"
          class="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
          Sign Up
        </a>
      </p>
    </div>
  </section>
</template>
