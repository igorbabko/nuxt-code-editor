<script setup lang="ts">
withDefaults(defineProps<{ linkClasses?: string }>(), {
  linkClasses:
    'font-semibold hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-200',
})
</script>

<template>
  <li>
    <a href="#" :class="linkClasses">
      <slot />
    </a>
  </li>
</template>
