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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 dark:text-white"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            class="-mr-1.5 hidden rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 dark:text-white"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-10 text-indigo-600 sm:size-12 dark:text-indigo-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-10 text-indigo-600 sm:size-12 dark:text-indigo-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
                    clip-rule="evenodd"
                  />
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-10 text-indigo-600 sm:size-12 dark:text-indigo-400"
                >
                  <path
                    d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z"
                  />
                </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-5 sm:hidden"
              >
                <path
                  d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-12 -rotate-6 text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z"
                  clip-rule="evenodd"
                />
              </svg>
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
