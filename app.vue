<template>
  <div class="dark flex min-h-screen flex-col dark:bg-gray-800">
    <header
      class="fixed inset-x-0 top-0 z-10 border-b border-gray-200 bg-white py-1.5 sm:static sm:border-0 sm:py-4 dark:border-0 dark:bg-gray-900"
    >
      <div class="container flex items-center justify-between gap-x-10">
        <a href="#" class="flex items-center gap-x-1 sm:gap-x-2">
          <Icon
            name="code"
            class="size-8 -rotate-6 text-indigo-600 sm:size-12 dark:text-white"
          />
          <span class="text-xl font-black sm:text-2xl dark:text-white">
            Code Editor
          </span>
        </a>
        <nav class="hidden grow sm:block">
          <ul class="flex items-center gap-x-8">
            <li class="mr-auto">
              <a
                href="#"
                class="font-semibold hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-200"
              >
                Library
              </a>
            </li>
            <li>
              <a
                href="#"
                class="font-semibold hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-200"
              >
                Log In
              </a>
            </li>
            <li>
              <a
                href="#"
                class="rounded-md bg-indigo-600 px-3 py-2 font-semibold text-indigo-50 hover:bg-indigo-700"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
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
      </div>
    </header>
    <main>
      <section class="pt-24 pb-12 sm:pt-16 sm:pb-20 lg:pt-28 lg:pb-48">
        <div
          class="container flex flex-col items-center gap-8 sm:gap-12 lg:flex-row"
        >
          <div
            class="flex flex-col items-center justify-center text-center lg:items-start lg:text-left dark:text-white"
          >
            <h1 class="text-3xl font-black tracking-tight sm:text-5xl">
              Your
              <span
                class="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-purple-300 dark:to-indigo-300"
              >
                VS Code
              </span>
              Boost
            </h1>
            <p class="mt-2 text-gray-600 sm:mt-4 sm:text-lg dark:text-gray-200">
              Unlock your coding potential with tailored settings, shortcuts,
              and expert tutorials.
            </p>
            <div class="mt-6 flex gap-x-2 sm:mt-8">
              <a
                href="#"
                class="rounded-md bg-indigo-600 px-6 py-2 font-semibold text-indigo-50 hover:bg-indigo-700 sm:rounded-lg sm:px-8 sm:py-3 sm:text-lg"
              >
                Explore
              </a>
              <a
                href="#features"
                class="rounded-md bg-gray-100 px-6 py-2 font-semibold text-gray-900 hover:bg-gray-200 sm:rounded-lg sm:px-8 sm:py-3 sm:text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
          <div
            class="relative scale-90 lg:w-2/3 lg:scale-110 lg:perspective-distant"
          >
            <div class="hero-reflection"></div>
            <img src="/editor.png" alt="Editor UI" class="hero-image" />
          </div>
        </div>
      </section>
      <section
        class="flex flex-col gap-y-8 bg-gray-50 py-8 sm:gap-y-12 sm:py-16 dark:bg-gray-700"
        id="features"
      >
        <div class="container max-w-screen-sm">
          <h2
            class="text-center text-2xl font-bold sm:text-4xl dark:text-white"
          >
            Unlock the Full Potential
          </h2>
          <p
            class="mt-1 text-center text-gray-600 sm:mt-2 sm:text-lg dark:text-gray-300"
          >
            With tailored settings, keyboard shortcuts, and powerful extensions,
            you can work smarter and faster.
          </p>
        </div>
        <div class="container grid gap-4 lg:grid-cols-3 lg:gap-8">
          <a href="#">
            <article
              class="h-full rounded-md border border-gray-200 bg-white p-4 hover:border-indigo-600 sm:rounded-xl sm:p-6 dark:border-black dark:bg-gray-800 dark:hover:border-indigo-400"
            >
              <header class="flex flex-col gap-y-3">
                <Icon
                  name="cog"
                  class="size-10 text-indigo-600 sm:size-12 dark:text-indigo-400"
                />
                <h3 class="font-semibold sm:text-lg dark:text-white">
                  Settings
                </h3>
              </header>
              <p
                class="mt-1 text-sm text-gray-600 sm:text-base dark:text-gray-400"
              >
                Personalize your workspace to match your unique coding style and
                preferences effortlessly.
              </p>
            </article>
          </a>
          <a href="#">
            <article
              class="h-full rounded-md border border-gray-200 bg-white p-4 hover:border-indigo-600 sm:rounded-xl sm:p-6 dark:border-black dark:bg-gray-800 dark:hover:border-indigo-400"
            >
              <header class="flex flex-col gap-y-3">
                <Icon
                  name="fire"
                  class="size-10 text-indigo-600 sm:size-12 dark:text-indigo-400"
                />
                <h3 class="font-semibold sm:text-lg dark:text-white">
                  Keyboard Shortcuts
                </h3>
              </header>
              <p
                class="mt-1 text-sm text-gray-600 sm:text-base dark:text-gray-400"
              >
                Streamline your workflow with essential shortcuts that save you
                time and boost efficiency.
              </p>
            </article>
          </a>
          <a href="#">
            <article
              class="h-full rounded-md border border-gray-200 bg-white p-4 hover:border-indigo-600 sm:rounded-xl sm:p-6 dark:border-black dark:bg-gray-800 dark:hover:border-indigo-400"
            >
              <header class="flex flex-col gap-y-3">
                <Icon
                  name="puzzle"
                  class="size-10 text-indigo-600 sm:size-12 dark:text-indigo-400"
                />
                <h3 class="font-semibold sm:text-lg dark:text-white">
                  Extensions
                </h3>
              </header>
              <p
                class="mt-1 text-sm text-gray-600 sm:text-base dark:text-gray-400"
              >
                Expand your capabilities with powerful extensions tailored to
                enhance your coding experience.
              </p>
            </article>
          </a>
        </div>
      </section>
      <section class="flex flex-col gap-y-6 py-8 sm:gap-y-8 sm:py-16">
        <div class="container max-w-screen-sm">
          <h2
            class="text-center text-2xl font-bold sm:text-4xl dark:text-white"
          >
            Stay Updated
          </h2>
          <p
            class="mt-1 text-center text-gray-600 sm:mt-2 sm:text-lg dark:text-gray-300"
          >
            Subscribe to our newsletter for the latest updates and tips.
          </p>
        </div>
        <div class="container">
          <form class="flex justify-center gap-x-2">
            <input
              type="email"
              placeholder="Your Email"
              class="w-96 rounded-md border border-gray-300 px-4 py-2 text-sm shadow-xs ring-transparent outline-hidden focus:border-indigo-600 focus:ring-1 sm:rounded-lg sm:text-base dark:border-0 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-indigo-400"
            />
            <button
              class="cursor-pointer rounded-md bg-indigo-600 px-4 py-1 font-semibold text-indigo-50 hover:bg-indigo-700 sm:rounded-lg sm:px-6 sm:py-2"
            >
              <span class="hidden sm:inline">Subscribe</span>
              <Icon name="plane" class="size-5 sm:hidden" />
            </button>
          </form>
        </div>
      </section>
    </main>
    <footer
      class="mt-auto bg-indigo-900 py-6 sm:pt-10 sm:pb-8 dark:bg-gray-900"
    >
      <div class="container flex flex-col gap-y-6 sm:gap-y-8">
        <div class="flex flex-col gap-10 lg:flex-row lg:gap-8">
          <div class="mr-auto flex flex-col items-start lg:max-w-80">
            <a href="#" class="flex items-center gap-x-2">
              <Icon name="code" class="size-12 -rotate-6 text-white" />
              <span class="text-2xl font-black text-white">Code Editor</span>
            </a>
            <p
              class="mt-2 text-sm text-indigo-200 sm:mt-4 sm:text-base dark:text-gray-400"
            >
              Unlock your coding potential with tailored settings, shortcuts,
              and expert tutorials.
            </p>
          </div>
          <div class="flex flex-col gap-y-8 sm:flex-row sm:gap-x-16">
            <div class="flex flex-col gap-y-3 sm:gap-y-4">
              <h3
                class="text-sm font-semibold tracking-wider text-white uppercase"
              >
                Popular Playlists
              </h3>
              <ul class="flex flex-col gap-y-1 sm:gap-y-2">
                <li>
                  <a
                    href="#"
                    class="text-sm text-indigo-200 hover:text-white sm:text-base dark:text-gray-400"
                  >
                    Prettier
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm text-indigo-200 hover:text-white sm:text-base dark:text-gray-400"
                  >
                    GitLens
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm text-indigo-200 hover:text-white sm:text-base dark:text-gray-400"
                  >
                    Live Share
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex flex-col gap-y-3 sm:gap-y-4">
              <h3
                class="text-sm font-semibold tracking-wider text-white uppercase"
              >
                Configurations
              </h3>
              <ul class="flex flex-col gap-y-1 sm:gap-y-2">
                <li>
                  <a
                    href="#"
                    class="text-sm text-indigo-200 hover:text-white sm:text-base dark:text-gray-400"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm text-indigo-200 hover:text-white sm:text-base dark:text-gray-400"
                  >
                    Keyboard Shortcuts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm text-indigo-200 hover:text-white sm:text-base dark:text-gray-400"
                  >
                    Code Snippets
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex flex-col gap-y-3 sm:gap-y-4">
              <h3
                class="text-sm font-semibold tracking-wider text-white uppercase"
              >
                Social
              </h3>
              <ul class="flex flex-col gap-y-1 sm:gap-y-2">
                <li>
                  <a
                    href="#"
                    class="text-sm text-indigo-200 hover:text-white sm:text-base dark:text-gray-400"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm text-indigo-200 hover:text-white sm:text-base dark:text-gray-400"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm text-indigo-200 hover:text-white sm:text-base dark:text-gray-400"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="border-t border-indigo-800 pt-6 text-center text-sm text-indigo-200 sm:pt-8 dark:border-gray-800 dark:text-gray-400"
        >
          &copy; 2025 Code Editor. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>
