<template>
  <section class="pt-24 pb-12 sm:pt-16 sm:pb-20 lg:pt-28 lg:pb-48">
    <div
      class="container flex flex-col items-center gap-8 sm:gap-12 lg:flex-row"
    >
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
          Unlock your coding potential with tailored settings, shortcuts, and
          expert tutorials.
        </p>
        <div class="mt-6 flex gap-x-2 sm:mt-8">
          <a
            href="#"
            class="rounded-md bg-indigo-600 px-6 py-2 font-semibold text-indigo-50 hover:bg-indigo-700 sm:rounded-lg sm:px-8 sm:py-3 sm:text-lg"
          >
            Explore
          </a>
          <a
            href="#features"
            class="rounded-md bg-gray-100 px-6 py-2 font-semibold text-gray-900 hover:bg-gray-200 sm:rounded-lg sm:px-8 sm:py-3 sm:text-lg"
          >
            Learn More
          </a>
        </div>
      </div>
      <div
        class="relative scale-90 lg:w-2/3 lg:scale-110 lg:perspective-distant"
      >
        <div class="hero-reflection"></div>
        <img src="/editor.png" alt="Editor UI" class="hero-image" />
      </div>
    </div>
  </section>
</template>
