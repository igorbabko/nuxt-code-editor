<script setup lang="ts">
defineProps<{ link: string }>()
</script>

<template>
  <li>
    <NuxtLink
      :to="link"
      :target="link.startsWith('http') ? '_blank' : undefined"
      class="text-sm text-indigo-200 hover:text-white sm:text-base dark:text-gray-400"
    >
      <slot />
    </NuxtLink>
  </li>
</template>
