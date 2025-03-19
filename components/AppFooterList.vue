<script setup lang="ts">
defineProps<{ list: { heading: string; items: string[] } }>()
</script>

<template>
  <div class="flex flex-col gap-y-3 sm:gap-y-4">
    <AppFooterListHeading>{{ list.heading }}</AppFooterListHeading>
    <ul class="flex flex-col gap-y-1 sm:gap-y-2">
      <AppFooterListItem v-for="item in list.items" :key="item">
        {{ item }}
      </AppFooterListItem>
    </ul>
  </div>
</template>
