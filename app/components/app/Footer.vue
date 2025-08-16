<script setup lang="ts">
const categories = [
  { to: '/', label: 'Vue' },
  { to: '/', label: 'Nuxt' },
  { to: '/', label: 'Vite' },
]
</script>

<template>
  <footer>
    <section class="container mx-auto space-y-5 px-4 py-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="space-y-4 flex flex-col items-center md:items-start">
          <AppLogo size="md" />
          <p class="text-muted-foreground">
            Your go-to source for web development insights, tutorials, and industry trends.
          </p>
        </div>

        <div class="space-y-4 text-center">
          <h3 class="text-lg font-semibold">
            Quick Links
          </h3>
          <ul class="space-y-2">
            <li v-for="route in MAIN_NAVIGATION" :key="route.to">
              <NuxtLink :to="route.to">
                {{ route.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="space-y-4 text-center">
          <h3 class="text-lg font-semibold">
            Categories
          </h3>
          <ul class="space-y-2">
            <li v-for="route in categories" :key="route.to">
              <NuxtLink :to="route.to">
                {{ route.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <USeparator />
      <div class="text-center text-sm text-muted-foreground mt-6 font-bold">
        &copy; {{ new Date().getFullYear() }} Andrii Stepanov. All rights reserved.
      </div>
    </section>
  </footer>
</template>
