<template>
  <div
    class="flex flex-col items-center justify-center text-center lg:items-start lg:text-left dark:text-white"
  >
    <h1 class="text-3xl font-black tracking-tight sm:text-5xl">
      Your
      <span
        class="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-purple-300 dark:to-indigo-300"
      >
        VS Code
      </span>
      Boost
    </h1>
    <p class="mt-2 text-gray-600 sm:mt-4 sm:text-lg dark:text-gray-200">
      Unlock your coding potential with tailored settings, shortcuts, and expert
      tutorials.
    </p>
    <div class="mt-6 flex gap-x-2 sm:mt-8">
      <NuxtLink
        to="/playlists"
        class="rounded-md bg-indigo-600 px-6 py-2 font-semibold text-indigo-50 hover:bg-indigo-700 sm:rounded-lg sm:px-8 sm:py-3 sm:text-lg"
      >
        Explore
      </NuxtLink>
      <NuxtLink
        to="#features"
        class="rounded-md bg-gray-100 px-6 py-2 font-semibold text-gray-900 hover:bg-gray-200 sm:rounded-lg sm:px-8 sm:py-3 sm:text-lg"
      >
        Learn More
      </NuxtLink>
    </div>
  </div>
</template>
