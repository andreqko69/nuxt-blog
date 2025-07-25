<template>
  <UCard :ui="{ body: 'p-0 sm:p-0' }">
    <NuxtImg class="w-full" src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" />
    <div class="flex flex-col gap-6 p-4">
      <h3 className="text-2xl font-semibold leading-none tracking-tight line-clamp-2 hover:text-primary transition-colors">
        <NuxtLink to="/">
          Getting started with Nuxt 4
        </NuxtLink>
      </h3>
      <p class="text-sm text-muted-foreground line-clamp-3">
        Nuxt 4 is the latest version of the Nuxt framework, offering improved performance, better developer experience, and new features. In this article, we will explore how to get started with Nuxt 4 and build your first application.
      </p>
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-1">
          <UIcon name="mdi:user-outline" class="size-5" />
          Andrii Stepanov
        </div>
        <div class="flex items-center justify-between gap-2">
          <UIcon name="mdi:calendar-blank-outline" class="size-5" />
          <NuxtTime :datetime="Date.now()" />
        </div>
      </div>
    </div>
  </UCard>
</template>
