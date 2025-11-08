<template>
  <header
    class="fixed inset-x-0 top-0 z-10 border-b border-gray-200 bg-white py-1.5 sm:static sm:border-0 sm:py-4 dark:border-0 dark:bg-gray-900"
  >
    <div class="container flex items-center justify-between gap-x-10">
      <AppLogo
        class="text-xl sm:text-2xl dark:text-white"
        icon-classes="size-8 text-indigo-600 sm:size-12 dark:text-white"
      >
        Code Editor
      </AppLogo>
      <AppHeaderNav />
      <AppHeaderMobileNav />
    </div>
  </header>
</template>
