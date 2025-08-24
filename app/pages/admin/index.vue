<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'admin',
})
</script>

<template>
  <div class="p-4  w-full">
    <div class="container space-y-4 mx-auto">
      <AdminPageTitle title="Admin Dashboard" description="Manage your blog content and settings">
        <template #actions>
          <NuxtLink :to="APP_ROUTES.adminCreatePost.to">
            <UButton class="cursor-pointer" size="xl" icon="mdi:plus" leading>
              {{ APP_ROUTES.adminCreatePost.label }}
            </UButton>
          </NuxtLink>
        </template>
      </AdminPageTitle>
      <AdminStatsList />
      <AdminNavigation />
    </div>
  </div>
</template>
