<template>
  <ul class="flex flex-col gap-y-1">
    <TagListItem v-for="tag in useTagsStore().tags" :key="tag.id">
      {{ tag.name }}
    </TagListItem>
  </ul>
</template>
