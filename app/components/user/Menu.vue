<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import authClient from '~~/app/lib/auth-client'

const [sessionRef, isAdminRef] = await Promise.all([
  useCurrentUserSession(),
  useIsAdmin(),
])

const isLoggedIn = computed(() => Boolean(sessionRef.value))

const items = computed<DropdownMenuItem[]>(() => [
  ...(isAdminRef.value
    ? [
        {
          label: 'Admin Dashboard',
          icon: 'mdi:view-dashboard',
          onSelect: async () => {
            await navigateTo(APP_ROUTES.adminDashboard.to)
          },
        },
      ]
    : []),
  {
    label: 'Log out',
    icon: 'mdi:exit-to-app',
    onSelect: async () => {
      await authClient.signOut()
      window.location.href = APP_ROUTES.home.to
    },
  },
])
</script>

<template>
  <div v-if="isLoggedIn">
    <UDropdownMenu
      :items="items"
      :content="{
        align: 'start',
        side: 'bottom',
        sideOffset: 8,
      }"
      :ui="{
        content: 'w-48',
      }"
    >
      <UButton
        icon="mdi:account"
        size="xl"
        variant="outline"
      />
    </UDropdownMenu>
  </div>
</template>
