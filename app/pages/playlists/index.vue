<template>
  <section class="flex flex-col gap-y-8 pb-12 pt-24 sm:py-16 md:gap-y-12">
    <AppSectionHeader
      type="page"
      heading="Playlists"
      subheading="Learn how to make VSCode work for you with our comprehensive guides and tutorials."
    />
    <div
      class="container grid grid-cols-1 items-start gap-y-4 sm:gap-8 md:grid-cols-3 md:gap-x-6 xl:grid-cols-4 xl:gap-x-8"
    >
      <PlaylistFilters />
      <PlaylistGrid />
    </div>
  </section>
</template>
