<script setup lang="ts">
const {
  link = '/',
  linkClasses = 'inline-block w-full rounded-md p-2 text-center text-sm font-semibold hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700',
} = defineProps<{ link?: string; linkClasses?: string }>()
</script>

<template>
  <li class="w-full">
    <NuxtLink :to="link" :class="linkClasses">
      <slot />
    </NuxtLink>
  </li>
</template>
