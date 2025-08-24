<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})
</script>

<template>
  <div class="p-4 w-full">
    <div class="container w-full mx-auto grid grid-cols-[2fr_1fr] gap-4">
      <div class="space-y-6">
        <PostTitleEditor />
        <PostExcerptEditor />
        <client-only>
          <PostContentEditor />
        </client-only>
      </div>

      <div class="space-y-4">
        <PostPublishSettingsEditor />
        <PostCategoryEditor />
      </div>
    </div>
  </div>
</template>
