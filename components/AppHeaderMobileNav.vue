<template>
  <div class="flex sm:hidden">
    <nav
      id="nav"
      class="peer absolute inset-x-0 top-full hidden border-b border-gray-200 bg-white target:block dark:border-0 dark:bg-gray-900"
    >
      <ul class="flex flex-col items-center gap-y-2 px-3 pb-3">
        <AppHeaderMobileNavItem link="/playlists">
          Library
        </AppHeaderMobileNavItem>
        <AppHeaderMobileNavItem>Log In</AppHeaderMobileNavItem>
        <AppHeaderMobileNavItem
          link-classes="inline-block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-indigo-50 hover:bg-indigo-700"
        >
          Sign Up
        </AppHeaderMobileNavItem>
      </ul>
    </nav>
    <AppHeaderMobileNavButton
      to="#nav"
      icon="bars"
      class="peer-target:hidden peer-target:[&+a]:block"
    />
    <AppHeaderMobileNavButton to="#" icon="xMark" class="hidden" />
  </div>
</template>
