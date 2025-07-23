<template>
  <section class="px-4">
    <div class="container mx-auto flex flex-col gap-12">
      <div class="flex flex-col items-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Latest Posts
        </h2>
        <p class="text-muted-foreground text-lg">
          Stay up to date with our latest articles and tutorials
        </p>
      </div>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div class="flex justify-center">
        <NuxtLink to="/posts">
          <UButton size="xl" trailing-icon="mdi:arrow-right">
            View All Posts
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
