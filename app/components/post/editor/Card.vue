<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <UCard :ui="{ body: 'space-y-6 overflow-y-visible' }">
    <h3 class="text-3xl font-semibold">
      {{ title }}
    </h3>
    <slot name="content" />
  </UCard>
</template>
