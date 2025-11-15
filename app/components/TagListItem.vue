<script lang="ts" setup>
defineProps<{ selected: boolean }>()

defineEmits(['click'])
</script>

<template>
  <li>
    <button
      @click="$emit('click')"
      :class="[
        'w-full cursor-pointer rounded-md px-3 py-2 text-left text-sm transition-colors sm:rounded-lg',
        selected
          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
          : 'text-gray-300 hover:bg-gray-700',
      ]"
    >
      <slot />
    </button>
  </li>
</template>
