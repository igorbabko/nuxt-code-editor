<template>
  <div class="flex flex-col gap-y-4 md:col-span-1 lg:gap-y-6">
    <input
      type="search"
      placeholder="Playlist Title"
      class="rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-600 focus:ring-1 dark:border-0 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-indigo-400"
    />
    <div class="flex flex-col gap-y-2">
      <h3 class="font-semibold sm:text-lg dark:text-white">Tags</h3>
      <TagList />
    </div>
  </div>
</template>
