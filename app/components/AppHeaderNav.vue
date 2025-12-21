<script lang="ts" setup>
const { loggedIn } = useUserSession()
</script>

<template>
  <nav class="hidden grow sm:block">
    <ul class="flex items-center gap-x-8">
      <li class="mr-auto">
        <AppHeaderNavLink to="/playlists">Library</AppHeaderNavLink>
      </li>
      <template v-if="loggedIn">
        <li>
          <AppHeaderNavLink to="#">Logout</AppHeaderNavLink>
        </li>
      </template>
      <template v-else>
        <li>
          <AppHeaderNavLink to="/login">Log In</AppHeaderNavLink>
        </li>
        <li>
          <AppButton to="/register">Sign Up</AppButton>
        </li>
      </template>
    </ul>
  </nav>
</template>
