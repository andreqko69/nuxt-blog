<script setup lang="ts">
const input = ref('')

const handleUpdate = debounce((e: InputEvent) => {
  input.value = (e.target as HTMLInputElement).value
}, 100)
</script>

<template>
  <PostEditorCard title="Content" root-class-name="flex-1" body-class-name="h-full">
    <template #content>
      <div class="flex-1">
        <UTextarea :value="input" size="xl" :rows="1" :ui="{ root: 'h-full flex items-start', base: 'h-full' }" placeholder="Write your post content here... You can use Markdown formatting." @input="handleUpdate" />
      </div>
    </template>
  </PostEditorCard>
</template>
