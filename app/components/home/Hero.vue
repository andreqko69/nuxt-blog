<script setup lang="ts">
import authClient from '~~/app/lib/auth-client'

const { data: session } = await authClient.useSession(useFetch)
const isLoggedIn = computed(() => Boolean(session.value))
</script>

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
        <NuxtLink :to="APP_ROUTES.posts.to" class="cursor-pointer">
          <UButton size="xl" trailing-icon="mdi:arrow-right">
            Explore Posts
          </UButton>
        </NuxtLink>
        <NuxtLink v-if="!isLoggedIn" :to="APP_ROUTES.signUp.to" class="cursor-pointer">
          <UButton variant="outline" size="xl">
            Get Started
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
