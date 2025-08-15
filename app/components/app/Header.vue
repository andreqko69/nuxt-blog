<script setup lang="ts">
const isOpen = ref(false)

function toggleIsOpen() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="p-4 sticky top-0 z-50 bg-[var(--ui-bg)] shadow-md">
    <nav class="container mx-auto">
      <div class="flex items-center justify-between">
        <AppLogo size="lg" />
        <div class="hidden md:block">
          <ul class="flex items-center gap-4">
            <li v-for="route in mainNavigation" :key="route.to">
              <NuxtLink :to="route.to" class="text-lg">
                {{ route.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="hidden md:flex items-center gap-2">
          <NuxtLink :to="routes.login.to">
            <UButton variant="ghost" class="cursor-pointer" size="xl">
              {{ routes.login.label }}
            </UButton>
          </NuxtLink>
          <NuxtLink :to="routes.signUp.to">
            <UButton class="cursor-pointer" size="xl">
              {{ routes.signUp.label }}
            </UButton>
          </NuxtLink>
          <AppThemeToggleIcon />
        </div>

        <div class=" flex items-center gap-2 md:hidden">
          <AppThemeToggleIcon />
          <UButton :icon="`${isOpen ? 'mdi:close' : 'mdi:menu'}`" class="cursor-pointer" size="xl" @click="toggleIsOpen" />
        </div>
      </div>
      <div v-if="isOpen" class="md:hidden px-4 absolute left-0 bg-[var(--ui-bg)] w-full shadow-md">
        <div class="container mx-auto py-4 space-y-4 ">
          <USeparator />
          <ul class="flex flex-col gap-4">
            <li v-for="route in mainNavigation" :key="route.to">
              <NuxtLink :to="route.to" class="text-lg">
                {{ route.label }}
              </NuxtLink>
            </li>
          </ul>
          <USeparator />
          <div class="flex items-center gap-2">
            <NuxtLink :to="routes.signUp.to">
              <UButton class="cursor-pointer" size="xl">
                {{ routes.signUp.label }}
              </UButton>
            </NuxtLink>
            <NuxtLink :to="routes.login.to">
              <UButton variant="ghost" class="cursor-pointer" size="xl">
                {{ routes.login.label }}
              </UButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
