<script setup lang="ts">
defineOptions({ inheritAttrs: false })
defineProps<{ id: string; error?: string }>()
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <AppLabel v-if="$slots.default" :for="id">
      <slot />
    </AppLabel>
    <AppInput :id="id" v-bind="$attrs" />
    <p v-if="error" class="text-sm text-red-600 dark:text-red-400">
      {{ error }}
    </p>
  </div>
</template>
