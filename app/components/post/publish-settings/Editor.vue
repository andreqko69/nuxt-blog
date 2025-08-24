<script setup lang="ts">
const published = ref(true)
const allowComments = ref(false)
</script>

<template>
  <PostEditorCard title="Publish Settings">
    <template #content>
      <div class="space-y-4">
        <div class="flex justify-between gap-2 items-center">
          <span class="font-bold">Published</span>
          <USwitch v-model="published" />
        </div>
        <div class="flex justify-between gap-2 items-center">
          <span class="font-bold">Allow Comments</span>
          <USwitch v-model="allowComments" />
        </div>
      </div>
    </template>
  </PostEditorCard>
</template>
