<script setup lang="ts">
const items = [
  {
    to: APP_ROUTES.adminCreatePost.to,
    label: 'Write New Post',
    iconName: 'mdi:plus',
  },
  {
    to: APP_ROUTES.adminManagePosts.to,
    label: 'Manage Posts',
    iconName: 'mdi:file-document-edit',
  },
  {
    to: APP_ROUTES.adminManageCategories.to,
    label: 'Manage Categories',
    iconName: 'mdi:folder-multiple',
  },
  {
    to: APP_ROUTES.adminAnalytics.to,
    label: 'View Analytics',
    iconName: 'mdi:chart-bar',
  },
]
</script>

<template>
  <ul class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
    <li v-for="item in items" :key="item.label">
      <NuxtLink :to="item.to">
        <UCard :ui="{ body: 'flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-muted' }">
          <UIcon :name="item.iconName" class="size-6" />
          <span class="font-semibold">{{ item.label }}</span>
        </UCard>
      </NuxtLink>
    </li>
  </ul>
</template>
