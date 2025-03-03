<script setup lang="ts">
const features = [
  {
    icon: 'cog',
    title: 'Settings',
    description:
      'Personalize your workspace to match your unique coding style and preferences effortlessly.',
  },
  {
    icon: 'fire',
    title: 'Keyboard Shortcuts',
    description:
      'Streamline your workflow with essential shortcuts that save you time and boost efficiency.',
  },
  {
    icon: 'puzzle',
    title: 'Extensions',
    description:
      'Expand your capabilities with powerful extensions tailored to enhance your coding experience.',
  },
]
</script>

<template>
  <div class="container grid gap-4 lg:grid-cols-3 lg:gap-8">
    <AppFeaturesCard
      v-for="feature in features"
      :key="feature.title"
      :feature="feature"
    />
  </div>
</template>
