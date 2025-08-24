<script setup lang="ts">
</script>

<template>
  <PostEditorCard title="Featured Image">
    <template #content>
      <UFileUpload
        label="Drop your image here"
        description="SVG, PNG, JPG or GIF (max. 2MB)"
        class="w-full min-h-48"
      />
    </template>
  </PostEditorCard>
</template>
