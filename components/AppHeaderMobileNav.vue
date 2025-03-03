<template>
  <div class="flex sm:hidden">
    <nav
      id="nav"
      class="peer absolute inset-x-0 top-full hidden border-b border-gray-200 bg-white target:block dark:border-0 dark:bg-gray-900"
    >
      <ul class="flex flex-col items-center gap-y-2 px-3 pb-3">
        <li class="w-full">
          <a
            href="#"
            class="inline-block w-full rounded-md p-2 text-center text-sm font-semibold hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Library
          </a>
        </li>
        <li class="w-full">
          <a
            href="#"
            class="inline-block w-full rounded-md p-2 text-center text-sm font-semibold hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Log In
          </a>
        </li>
        <li class="w-full">
          <a
            href="#"
            class="inline-block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-indigo-50 hover:bg-indigo-700"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
    <a
      href="#nav"
      class="-mr-1.5 rounded-md p-2 peer-target:hidden hover:bg-gray-100 dark:hover:bg-gray-700 peer-target:[&+a]:block"
    >
      <Icon name="bars" class="size-6 dark:text-white" />
    </a>
    <a
      href="#"
      class="-mr-1.5 hidden rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <Icon name="xMark" class="size-6 dark:text-white" />
    </a>
  </div>
</template>
