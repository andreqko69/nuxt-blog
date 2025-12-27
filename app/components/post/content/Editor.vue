<script setup lang="ts">
const value = ref(null)
</script>

<template>
  <PostEditorCard title="Content" root-class-name="flex-1" body-class-name="h-full">
    <template #content>
      <div class="flex flex-1">
        <UEditor v-model="value" :lazy="false" placeholder="Write your post content here..." enable-input-rules content-type="markdown" class="flex-1" :ui="{ root: 'flex', content: 'flex', base: 'sm:p-3 appearance-none bg-default border-0 disabled:cursor-not-allowed disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary focus:outline-none gap-2 placeholder:text-dimmed px-3 py-2 ring ring-accented ring-inset rounded-md text-base text-highlighted transition-colors w-full' }" />
      </div>
    </template>
  </PostEditorCard>
</template>
