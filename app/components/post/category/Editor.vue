<script setup lang="ts">
const items = [
  { id: 1, label: 'Next' },
  { id: 2, label: 'Vue' },
  { id: 3, label: 'React' },
  { id: 4, label: 'Angular' },
  { id: 5, label: 'Svelte' },
  { id: 6, label: 'Nuxt' },
  { id: 7, label: 'Gatsby' },
  { id: 8, label: 'Flutter' },
  { id: 9, label: 'Ionic' },
]
const value = ref()
</script>

<template>
  <PostEditorCard title="Category">
    <template #content>
      <USelect v-model="value" multiple value-key="id" placeholder="Select a category" :items="items" class="w-full" />
    </template>
  </PostEditorCard>
</template>
