<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-bold">
        Admin Dashboard
      </h1>
      <p class="hero-description mx-auto max-w-2xl text-2xl">
        Manage your blog content and settings
      </p>
    </div>
    <NuxtLink :to="APP_ROUTES.adminCreatePost.to">
      <UButton class="cursor-pointer" size="xl" icon="mdi:plus" leading>
        {{ APP_ROUTES.adminCreatePost.label }}
      </UButton>
    </NuxtLink>
  </div>
</template>
