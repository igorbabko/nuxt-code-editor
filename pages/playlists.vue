<template>
  <section class="flex flex-col gap-y-8 pt-24 pb-12 sm:py-16 md:gap-y-12">
    <div class="container max-w-screen-sm">
      <h1 class="text-center text-4xl font-black sm:text-5xl dark:text-white">
        Playlists
      </h1>
      <p
        class="mt-2 text-center text-gray-600 sm:mt-3 sm:text-lg dark:text-gray-300"
      >
        Learn how to make VSCode work for you with our comprehensive guides and
        tutorials.
      </p>
    </div>
    <div
      class="container grid grid-cols-1 gap-y-4 sm:gap-8 md:grid-cols-3 md:gap-x-6 xl:grid-cols-4 xl:gap-x-8"
    >
      <div class="flex flex-col gap-y-4 md:col-span-1 lg:gap-y-6">
        <input
          type="search"
          placeholder="Playlist Title"
          class="rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-600 focus:ring-1 dark:border-0 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-indigo-400"
        />
        <div class="flex flex-col gap-y-2">
          <h3 class="font-semibold sm:text-lg dark:text-white">Tags</h3>
          <ul class="flex flex-col gap-y-1">
            <li>
              <button
                class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Productivity
              </button>
            </li>
            <li>
              <button
                class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Development
              </button>
            </li>
            <li>
              <button
                class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Design
              </button>
            </li>
            <li>
              <button
                class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Utility
              </button>
            </li>
            <li>
              <button
                class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Integration
              </button>
            </li>
            <li>
              <button
                class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Testing
              </button>
            </li>
            <li>
              <button
                class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Debugging
              </button>
            </li>
            <li>
              <button
                class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Formatting
              </button>
            </li>
            <li>
              <button
                class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Collaboration
              </button>
            </li>
            <li>
              <button
                class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Documentation
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="col-span-1 grid gap-2 sm:gap-4 md:col-span-2 lg:grid-cols-2 xl:col-span-3 xl:grid-cols-3"
      >
        <a href="#">
          <article
            class="flex h-full flex-col rounded-md border border-gray-200 p-4 hover:border-indigo-600 sm:rounded-xl sm:p-6 dark:border-black dark:bg-gray-700 dark:hover:border-indigo-400"
          >
            <header>
              <h3 class="font-semibold sm:text-lg dark:text-white">Prettier</h3>
            </header>
            <p
              class="mt-2 mb-6 text-sm text-gray-600 sm:text-base dark:text-gray-400"
            >
              Automatically format your code to ensure consistent style across
              your project.
            </p>
            <footer class="mt-auto">
              <ul class="flex flex-wrap gap-x-2">
                <li
                  class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
                >
                  Utility
                </li>
                <li
                  class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
                >
                  Formatting
                </li>
              </ul>
            </footer>
          </article>
        </a>
        <a href="#">
          <article
            class="flex h-full flex-col rounded-md border border-gray-200 p-4 hover:border-indigo-600 sm:rounded-xl sm:p-6 dark:border-black dark:bg-gray-700 dark:hover:border-indigo-400"
          >
            <header>
              <h3 class="font-semibold sm:text-lg dark:text-white">GitLens</h3>
            </header>
            <p
              class="mt-2 mb-6 text-sm text-gray-600 sm:text-base dark:text-gray-400"
            >
              Supercharge Git within VS Code with commit visualization and blame
              annotations.
            </p>
            <footer class="mt-auto">
              <ul class="flex flex-wrap gap-x-2">
                <li
                  class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
                >
                  Development
                </li>
                <li
                  class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
                >
                  Collaboration
                </li>
              </ul>
            </footer>
          </article>
        </a>
        <a href="#">
          <article
            class="flex h-full flex-col rounded-md border border-gray-200 p-4 hover:border-indigo-600 sm:rounded-xl sm:p-6 dark:border-black dark:bg-gray-700 dark:hover:border-indigo-400"
          >
            <header>
              <h3 class="font-semibold sm:text-lg dark:text-white">
                Live Share
              </h3>
            </header>
            <p
              class="mt-2 mb-6 text-sm text-gray-600 sm:text-base dark:text-gray-400"
            >
              Real-time collaborative development from the comfort of your
              favorite editor.
            </p>
            <footer class="mt-auto">
              <ul class="flex flex-wrap gap-x-2">
                <li
                  class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
                >
                  Development
                </li>
                <li
                  class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
                >
                  Collaboration
                </li>
              </ul>
            </footer>
          </article>
        </a>
        <a href="#">
          <article
            class="flex h-full flex-col rounded-md border border-gray-200 p-4 hover:border-indigo-600 sm:rounded-xl sm:p-6 dark:border-black dark:bg-gray-700 dark:hover:border-indigo-400"
          >
            <header>
              <h3 class="font-semibold sm:text-lg dark:text-white">ESLint</h3>
            </header>
            <p
              class="mt-2 mb-6 text-sm text-gray-600 sm:text-base dark:text-gray-400"
            >
              Find and fix problems in your JavaScript/TypeScript code
              automatically.
            </p>
            <footer class="mt-auto">
              <ul class="flex flex-wrap gap-x-2">
                <li
                  class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
                >
                  Development
                </li>
                <li
                  class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
                >
                  Debugging
                </li>
              </ul>
            </footer>
          </article>
        </a>
        <a href="#">
          <article
            class="flex h-full flex-col rounded-md border border-gray-200 p-4 hover:border-indigo-600 sm:rounded-xl sm:p-6 dark:border-black dark:bg-gray-700 dark:hover:border-indigo-400"
          >
            <header>
              <h3 class="font-semibold sm:text-lg dark:text-white">
                Code Runner
              </h3>
            </header>
            <p
              class="mt-2 mb-6 text-sm text-gray-600 sm:text-base dark:text-gray-400"
            >
              Run code snippets in multiple programming languages with a single
              click.
            </p>
            <footer class="mt-auto">
              <ul class="flex flex-wrap gap-x-2">
                <li
                  class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
                >
                  Development
                </li>
                <li
                  class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
                >
                  Utility
                </li>
              </ul>
            </footer>
          </article>
        </a>
        <a href="#">
          <article
            class="flex h-full flex-col rounded-md border border-gray-200 p-4 hover:border-indigo-600 sm:rounded-xl sm:p-6 dark:border-black dark:bg-gray-700 dark:hover:border-indigo-400"
          >
            <header>
              <h3 class="font-semibold sm:text-lg dark:text-white">
                REST Client
              </h3>
            </header>
            <p
              class="mt-2 mb-6 text-sm text-gray-600 sm:text-base dark:text-gray-400"
            >
              Send HTTP requests and view responses directly in Visual Studio
              Code.
            </p>
            <footer class="mt-auto">
              <ul class="flex flex-wrap gap-x-2">
                <li
                  class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
                >
                  Development
                </li>
                <li
                  class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
                >
                  Utility
                </li>
              </ul>
            </footer>
          </article>
        </a>
        <a href="#">
          <article
            class="flex h-full flex-col rounded-md border border-gray-200 p-4 hover:border-indigo-600 sm:rounded-xl sm:p-6 dark:border-black dark:bg-gray-700 dark:hover:border-indigo-400"
          >
            <header>
              <h3 class="font-semibold sm:text-lg dark:text-white">
                Code Spell Checker
              </h3>
            </header>
            <p
              class="mt-2 mb-6 text-sm text-gray-600 sm:text-base dark:text-gray-400"
            >
              Catch common spelling errors in your source code and
              documentation.
            </p>
            <footer class="mt-auto">
              <ul class="flex flex-wrap gap-x-2">
                <li
                  class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
                >
                  Utility
                </li>
                <li
                  class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
                >
                  Documentation
                </li>
              </ul>
            </footer>
          </article>
        </a>
        <a href="#">
          <article
            class="flex h-full flex-col rounded-md border border-gray-200 p-4 hover:border-indigo-600 sm:rounded-xl sm:p-6 dark:border-black dark:bg-gray-700 dark:hover:border-indigo-400"
          >
            <header>
              <h3 class="font-semibold sm:text-lg dark:text-white">Docker</h3>
            </header>
            <p
              class="mt-2 mb-6 text-sm text-gray-600 sm:text-base dark:text-gray-400"
            >
              Manage Docker containers and images directly from VS Code.
            </p>
            <footer class="mt-auto">
              <ul class="flex flex-wrap gap-x-2">
                <li
                  class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
                >
                  Development
                </li>
                <li
                  class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-600 dark:text-indigo-50"
                >
                  Integration
                </li>
              </ul>
            </footer>
          </article>
        </a>
      </div>
    </div>
  </section>
</template>
