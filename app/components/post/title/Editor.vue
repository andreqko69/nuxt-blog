<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
  <PostEditorCard title="Post Title">
    <template #content>
      <UInput v-model="model" class="w-full" size="xl" placeholder="Enter your post title" />
    </template>
  </PostEditorCard>
</template>
