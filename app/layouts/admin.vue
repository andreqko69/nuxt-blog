<script setup lang="ts">
const { value: isAdmin } = await useIsAdmin()

console.log('isAdmin', isAdmin)
</script>

<template>
  <div class="h-screen flex flex-col">
    <AdminHeader />

    <main class="flex-1 flex">
      <NuxtPage />
    </main>
  </div>
</template>
