<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const { classes } = defineProps<{ classes?: string }>()
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  },
})
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :icon="isDark ? 'mdi:white-balance-sunny' : 'mdi:moon-and-stars'"
      :class="`${twMerge('cursor-pointer', classes)}`"
      size="xl"
      variant="outline"
      @click="isDark = !isDark"
    />
  </ClientOnly>
</template>
