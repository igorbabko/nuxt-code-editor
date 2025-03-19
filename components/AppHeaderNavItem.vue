<script setup lang="ts">
const {
  link = '/',
  linkClasses = 'font-semibold hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-200',
} = defineProps<{ link?: string; linkClasses?: string }>()
</script>

<template>
  <li>
    <NuxtLink :to="link" :class="linkClasses">
      <slot />
    </NuxtLink>
  </li>
</template>
