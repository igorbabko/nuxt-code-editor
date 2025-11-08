<script setup lang="ts">
defineOptions({ inheritAttrs: false })
defineProps<{ id: string }>()
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <AppLabel v-if="$slots.default" :for="id">
      <slot />
    </AppLabel>
    <AppInput :id="id" v-bind="$attrs" />
  </div>
</template>
