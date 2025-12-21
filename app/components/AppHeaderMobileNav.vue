<template>
  <div class="flex sm:hidden">
    <nav
      id="nav"
      class="peer absolute inset-x-0 top-full hidden border-b border-gray-200 bg-white target:block dark:border-0 dark:bg-gray-900"
    >
      <ul class="flex flex-col gap-y-2 px-3 pb-3">
        <li>
          <AppHeaderMobileNavLink to="/playlists">
            Library
          </AppHeaderMobileNavLink>
        </li>
        <AuthState v-slot="{ loggedIn, clear }">
          <li v-if="loggedIn">
            <AppHeaderMobileNavLink @click="clear" class="cursor-pointer">
              Logout
            </AppHeaderMobileNavLink>
          </li>
          <template v-else>
            <li>
              <AppHeaderMobileNavLink to="/login">
                Log In
              </AppHeaderMobileNavLink>
            </li>
            <li>
              <AppButton
                lg
                to="/register"
                class="inline-block w-full text-center"
              >
                Sign Up
              </AppButton>
            </li>
          </template>
        </AuthState>
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
