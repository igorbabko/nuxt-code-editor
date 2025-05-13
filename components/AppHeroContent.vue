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
      <AppButton to="/playlists" lg>Explore</AppButton>
      <AppButton to="#features" secondary lg>Learn More</AppButton>
    </div>
  </div>
</template>
