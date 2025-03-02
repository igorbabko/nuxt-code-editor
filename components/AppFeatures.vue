<template>
  <section
    class="flex flex-col gap-y-8 bg-gray-50 py-8 sm:gap-y-12 sm:py-16 dark:bg-gray-700"
    id="features"
  >
    <div class="container max-w-screen-sm">
      <h2 class="text-center text-2xl font-bold sm:text-4xl dark:text-white">
        Unlock the Full Potential
      </h2>
      <p
        class="mt-1 text-center text-gray-600 sm:mt-2 sm:text-lg dark:text-gray-300"
      >
        With tailored settings, keyboard shortcuts, and powerful extensions, you
        can work smarter and faster.
      </p>
    </div>
    <div class="container grid gap-4 lg:grid-cols-3 lg:gap-8">
      <a href="#">
        <article
          class="h-full rounded-md border border-gray-200 bg-white p-4 hover:border-indigo-600 sm:rounded-xl sm:p-6 dark:border-black dark:bg-gray-800 dark:hover:border-indigo-400"
        >
          <header class="flex flex-col gap-y-3">
            <Icon
              name="cog"
              class="size-10 text-indigo-600 sm:size-12 dark:text-indigo-400"
            />
            <h3 class="font-semibold sm:text-lg dark:text-white">Settings</h3>
          </header>
          <p class="mt-1 text-sm text-gray-600 sm:text-base dark:text-gray-400">
            Personalize your workspace to match your unique coding style and
            preferences effortlessly.
          </p>
        </article>
      </a>
      <a href="#">
        <article
          class="h-full rounded-md border border-gray-200 bg-white p-4 hover:border-indigo-600 sm:rounded-xl sm:p-6 dark:border-black dark:bg-gray-800 dark:hover:border-indigo-400"
        >
          <header class="flex flex-col gap-y-3">
            <Icon
              name="fire"
              class="size-10 text-indigo-600 sm:size-12 dark:text-indigo-400"
            />
            <h3 class="font-semibold sm:text-lg dark:text-white">
              Keyboard Shortcuts
            </h3>
          </header>
          <p class="mt-1 text-sm text-gray-600 sm:text-base dark:text-gray-400">
            Streamline your workflow with essential shortcuts that save you time
            and boost efficiency.
          </p>
        </article>
      </a>
      <a href="#">
        <article
          class="h-full rounded-md border border-gray-200 bg-white p-4 hover:border-indigo-600 sm:rounded-xl sm:p-6 dark:border-black dark:bg-gray-800 dark:hover:border-indigo-400"
        >
          <header class="flex flex-col gap-y-3">
            <Icon
              name="puzzle"
              class="size-10 text-indigo-600 sm:size-12 dark:text-indigo-400"
            />
            <h3 class="font-semibold sm:text-lg dark:text-white">Extensions</h3>
          </header>
          <p class="mt-1 text-sm text-gray-600 sm:text-base dark:text-gray-400">
            Expand your capabilities with powerful extensions tailored to
            enhance your coding experience.
          </p>
        </article>
      </a>
    </div>
  </section>
</template>
