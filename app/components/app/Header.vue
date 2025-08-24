<script setup lang="ts">
const [{ value: session }, { value: isAdmin }] = await Promise.all([
  useCurrentUserSession(),
  useIsAdmin(),
])
const isLoggedIn = computed(() => Boolean(session))

const isOpen = ref(false)

function toggleIsOpen() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="p-4 sticky top-0 z-50 bg-[var(--ui-bg)] shadow-md">
    <nav class="container mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-3 items-center justify-between">
        <AppLogo size="lg" />
        <div class="hidden md:block">
          <ul class="flex justify-center items-center gap-4">
            <li v-for="route in MAIN_NAVIGATION" :key="route.to">
              <NuxtLink :to="route.to" class="text-lg">
                {{ route.label }}
              </NuxtLink>
            </li>
            <li v-if="isAdmin">
              <NuxtLink :to="APP_ROUTES.adminDashboard.to" class="text-lg">
                Admin
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="hidden md:flex items-center justify-end gap-2">
          <NuxtLink :to="APP_ROUTES.login.to">
            <UButton v-if="!isLoggedIn" variant="ghost" class="cursor-pointer" size="xl">
              {{ APP_ROUTES.login.label }}
            </UButton>
          </NuxtLink>
          <NuxtLink v-if="!isLoggedIn" :to="APP_ROUTES.signUp.to">
            <UButton class="cursor-pointer" size="xl">
              {{ APP_ROUTES.signUp.label }}
            </UButton>
          </NuxtLink>
          <UserMenu />
          <AppThemeToggleIcon />
        </div>

        <div class=" flex justify-end items-center gap-2 md:hidden">
          <AppThemeToggleIcon />
          <UButton :icon="`${isOpen ? 'mdi:close' : 'mdi:menu'}`" class="cursor-pointer" size="xl" @click="toggleIsOpen" />
        </div>
      </div>
      <div v-if="isOpen" class="md:hidden px-4 absolute left-0 bg-[var(--ui-bg)] w-full shadow-md">
        <div class="container mx-auto py-4 space-y-4 ">
          <USeparator />
          <ul class="flex flex-col gap-4">
            <li v-for="route in MAIN_NAVIGATION" :key="route.to">
              <NuxtLink :to="route.to" class="text-lg">
                {{ route.label }}
              </NuxtLink>
            </li>
            <li v-if="isAdmin">
              <NuxtLink :to="APP_ROUTES.adminDashboard.to" class="text-lg">
                Admin
              </NuxtLink>
            </li>
          </ul>
          <USeparator v-if="!isLoggedIn" />
          <div v-if="!isLoggedIn" class="flex items-center gap-2">
            <NuxtLink :to="APP_ROUTES.signUp.to">
              <UButton class="cursor-pointer" size="xl">
                {{ APP_ROUTES.signUp.label }}
              </UButton>
            </NuxtLink>
            <NuxtLink :to="APP_ROUTES.login.to">
              <UButton variant="ghost" class="cursor-pointer" size="xl">
                {{ APP_ROUTES.login.label }}
              </UButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
