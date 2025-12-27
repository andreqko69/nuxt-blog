<script setup lang="ts">
import authClient from '~~/app/lib/auth-client'

const { data: session } = await authClient.useSession(useFetch)
const isLoggedIn = computed(() => Boolean(session.value))
</script>

<template>
  <HeroSection
    title="Welcome to Sloppy Blog"
    description="Discover the latest insights, tutorials, and trends in web development, programming, and technology."
  >
    <template #buttons>
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
    </template>
  </HeroSection>
</template>
