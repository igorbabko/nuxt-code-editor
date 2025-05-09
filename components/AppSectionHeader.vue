<script setup lang="ts">
const { type = 'section' } = defineProps<{
  heading: string
  subheading: string
  type?: 'page' | 'section'
}>()

const headingClasses = [
  'text-center dark:text-white',
  type === 'page'
    ? 'text-4xl font-black sm:text-5xl'
    : 'text-2xl font-bold sm:text-4xl',
]

const subheadingClasses = [
  'text-center sm:text-lg dark:text-gray-300',
  type === 'page' ? 'mt-2 text-gray-600 sm:mt-3' : 'mt-1 text-gray-600 sm:mt-2',
]
</script>

<template>
  <div class="container max-w-screen-sm">
    <h1 v-if="type === 'page'" :class="headingClasses">
      {{ heading }}
    </h1>
    <h2 v-else :class="headingClasses">
      {{ heading }}
    </h2>
    <p :class="subheadingClasses">{{ subheading }}</p>
  </div>
</template>
