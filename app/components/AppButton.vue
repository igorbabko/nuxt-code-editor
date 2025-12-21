<script setup lang="ts">
const { secondary = false, lg = false } = defineProps<{
  secondary?: boolean
  lg?: boolean
}>()

const classes = [
  'cursor-pointer rounded-md font-semibold sm:rounded-lg disabled:opacity-50 disabled:cursor-not-allowed',
  {
    'bg-indigo-600 text-indigo-50 hover:bg-indigo-700': !secondary,
    'bg-gray-100 text-gray-900 hover:bg-gray-200': secondary,
  },
  {
    'px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-base': !lg,
    'px-6 py-2 sm:px-8 sm:py-3 sm:text-lg': lg,
  },
]
</script>

<template>
  <NuxtLink v-if="$attrs.to" :to="$attrs.to" :class="classes">
    <slot />
  </NuxtLink>
  <button v-else :class="classes">
    <slot />
  </button>
</template>
