<template>
  <nav class="hidden grow sm:block">
    <ul class="flex items-center gap-x-8">
      <AppHeaderNavItem class="mr-auto" link="/playlists">
        Library
      </AppHeaderNavItem>
      <AppHeaderNavItem>Log In</AppHeaderNavItem>
      <AppHeaderNavItem
        link-classes="rounded-md bg-indigo-600 px-3 py-2 font-semibold text-indigo-50 hover:bg-indigo-700"
      >
        Sign Up
      </AppHeaderNavItem>
    </ul>
  </nav>
</template>
