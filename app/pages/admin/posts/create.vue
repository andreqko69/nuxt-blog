<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})
</script>

<template>
  <div class="p-4 w-full">
    <div class="container w-full mx-auto space-y-6">
      <AdminPageTitle title="Admin Dashboard" description="Manage your blog content and settings">
        <template #actions>
          <div class="flex items-center gap-2">
            <UButton icon="mdi:eye-outline" variant="outline" class="cursor-pointer" size="xl" leading :ui="{ leadingIcon: 'size-5' }">
              Preview
            </UButton>
            <UButton icon="mdi:content-save-outline" variant="outline" class="cursor-pointer" size="xl" leading :ui="{ leadingIcon: 'size-5' }">
              Save Draft
            </UButton>
            <UButton icon="mdi:send" class="cursor-pointer" size="xl" leading :ui="{ leadingIcon: 'size-5' }">
              Publish
            </UButton>
          </div>
        </template>
      </AdminPageTitle>

      <div class="grid grid-cols-[2fr_1fr] gap-6">
        <div class="space-y-6">
          <PostTitleEditor />
          <PostExcerptEditor />
          <client-only>
            <PostContentEditor />
          </client-only>
        </div>

        <div class="space-y-6">
          <PostPublishSettingsEditor />
          <PostCategoryEditor />
          <PostFeaturedImageEditor />
          <PostStatistics />
        </div>
      </div>
    </div>
  </div>
</template>
