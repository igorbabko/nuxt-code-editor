<template>
  <section class="flex flex-col gap-y-6 py-8 sm:gap-y-8 sm:py-16">
    <div class="container max-w-screen-sm">
      <h2 class="text-center text-2xl font-bold sm:text-4xl dark:text-white">
        Stay Updated
      </h2>
      <p
        class="mt-1 text-center text-gray-600 sm:mt-2 sm:text-lg dark:text-gray-300"
      >
        Subscribe to our newsletter for the latest updates and tips.
      </p>
    </div>
    <div class="container">
      <form class="flex justify-center gap-x-2">
        <input
          type="email"
          placeholder="Your Email"
          class="w-96 rounded-md border border-gray-300 px-4 py-2 text-sm shadow-xs ring-transparent outline-hidden focus:border-indigo-600 focus:ring-1 sm:rounded-lg sm:text-base dark:border-0 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-indigo-400"
        />
        <button
          class="cursor-pointer rounded-md bg-indigo-600 px-4 py-1 font-semibold text-indigo-50 hover:bg-indigo-700 sm:rounded-lg sm:px-6 sm:py-2"
        >
          <span class="hidden sm:inline">Subscribe</span>
          <Icon name="plane" class="size-5 sm:hidden" />
        </button>
      </form>
    </div>
  </section>
</template>
