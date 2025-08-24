<script setup lang="ts">
const { value: isAdmin } = await useIsAdmin()

if (!isAdmin) {
  await navigateTo(APP_ROUTES.home.to)
}
</script>

<template>
  <div class="h-screen flex flex-col">
    <AdminHeader />

    <main class="flex-1 flex">
      <NuxtPage />
    </main>
  </div>
</template>
