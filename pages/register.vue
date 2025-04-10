<script setup lang="ts">
definePageMeta({ layout: 'auth' })
</script>

<template>
  <section class="flex w-full flex-col items-center gap-y-4 p-3 sm:gap-y-6">
    <a href="#" class="flex items-center gap-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-14 -rotate-6 text-indigo-600 sm:size-16 dark:text-white"
      >
        <path
          fill-rule="evenodd"
          d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
    <div
      class="w-full rounded-md border border-gray-200 bg-white p-4 shadow-sm sm:w-96 sm:rounded-lg sm:p-6 dark:border-black dark:bg-gray-900 dark:shadow-none"
    >
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
      <p
        class="mt-6 text-center text-sm text-gray-600 sm:mt-8 dark:text-gray-300"
      >
        Already have an account?
        <a
          href="#"
          class="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          Log In
        </a>
      </p>
    </div>
  </section>
</template>
