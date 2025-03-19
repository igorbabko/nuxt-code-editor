<script setup lang="ts">
type Type = 'primary' | 'secondary'

const { type = 'primary' } = defineProps<{ type?: Type }>()

const classes = {
  primary: 'bg-indigo-600 text-indigo-50 hover:bg-indigo-700',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
}
</script>

<template>
  <a
    href="#"
    :class="`rounded-md px-6 py-2 font-semibold sm:rounded-lg sm:px-8 sm:py-3 sm:text-lg ${classes[type]}`"
  >
    <slot />
  </a>
</template>
