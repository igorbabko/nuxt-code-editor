<template>
  <nav class="hidden grow sm:block">
    <ul class="flex items-center gap-x-8">
      <li class="mr-auto">
        <AppHeaderNavLink to="/playlists">Library</AppHeaderNavLink>
      </li>
      <AuthState v-slot="{ loggedIn, clear }">
        <li v-if="loggedIn">
          <AppHeaderNavLink @click="clear" class="cursor-pointer">
            Logout
          </AppHeaderNavLink>
        </li>
        <template v-else>
          <li>
            <AppHeaderNavLink to="/login">Log In</AppHeaderNavLink>
          </li>
          <li>
            <AppButton to="/register">Sign Up</AppButton>
          </li>
        </template>
      </AuthState>
    </ul>
  </nav>
</template>
