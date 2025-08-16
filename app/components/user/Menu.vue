<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import authClient from '~~/app/lib/auth-client'

const { data: session } = await authClient.useSession(useFetch)
const isLoggedIn = computed(() => Boolean(session.value))

const items = ref<DropdownMenuItem[]>([
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
