<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
  <PostEditorCard title="Excerpt">
    <template #content>
      <UTextarea v-model="model" class="w-full" size="xl" placeholder="Write a brief description of your post" />
    </template>
  </PostEditorCard>
</template>
