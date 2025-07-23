<template>
  <header class="px-4 py-2">
    <div class="container mx-auto flex items-center justify-between">
      <AppLogo size="lg" />
      <nav>
        <ul class="flex items-center gap-4">
          <li v-for="route in mainNavigation" :key="route.to">
            <NuxtLink :to="route.to" class="text-lg">
              {{ route.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-2">
        <NuxtLink :to="routes.login.to">
          <UButton variant="outline" class="cursor-pointer" size="xl">
            {{ routes.login.label }}
          </UButton>
        </NuxtLink>
        <NuxtLink :to="routes.signup.to">
          <UButton class="cursor-pointer" size="xl">
            {{ routes.signup.label }}
          </UButton>
        </NuxtLink>
        <UButton icon="mdi:white-balance-sunny" class="cursor-pointer" size="xl" />
      </div>
    </div>
  </header>
</template>
