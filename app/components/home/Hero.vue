<template>
  <section class="hero py-20 px-4 text-center bg-gradient-to-br from-background to-muted">
    <div class="hero-content container mx-auto flex flex-col gap-6 text-center">
      <h1 class="hero-title text-6xl">
        Welcome to Kogaro's Blog
      </h1>
      <p class="hero-description mx-auto max-w-2xl text-2xl">
        Discover the latest insights, tutorials, and trends in web development, programming, and technology.
      </p>
      <div class="flex justify-center items-center gap-3">
        <NuxtLink :to="routes.posts.to" class="cursor-pointer">
          <UButton size="xl" trailing-icon="mdi:arrow-right">
            Explore Posts
          </UButton>
        </NuxtLink>
        <NuxtLink :to="routes.signup.to" class="ursor-pointer">
          <UButton variant="outline" size="xl">
            Get Started
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
