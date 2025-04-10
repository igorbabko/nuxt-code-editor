<template>
  <main
    class="dark grid min-h-screen place-items-center bg-gray-50 dark:bg-gray-800"
  >
    <section class="flex w-full flex-col items-center gap-y-4 p-3 sm:gap-y-6">
      <NuxtLink to="/">
        <Icon
          name="code"
          class="size-14 -rotate-6 text-indigo-600 sm:size-16 dark:text-white"
        />
      </NuxtLink>
      <div
        class="w-full rounded-md border border-gray-200 bg-white p-4 shadow-sm sm:w-96 sm:rounded-lg sm:p-6 dark:border-black dark:bg-gray-900 dark:shadow-none"
      >
        <slot />
      </div>
    </section>
  </main>
</template>
