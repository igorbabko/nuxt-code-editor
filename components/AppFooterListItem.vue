<script setup lang="ts">
defineProps<{ link: string }>()
</script>

<template>
  <li>
    <NuxtLink
      :to="link"
      class="text-sm text-indigo-200 hover:text-white sm:text-base dark:text-gray-400"
    >
      <slot />
    </NuxtLink>
  </li>
</template>
