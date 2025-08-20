<script setup lang="ts">
defineProps<{
  title: string
  iconName: string
  content: string
  description: string
}>()
</script>

<template>
  <UCard>
    <div class="flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <span class="font-bold">{{ title }}</span> <UIcon :name="iconName" class="size-5" />
      </div>
      <div class="flex flex-col">
        <span class="text-3xl font-semibold">{{ content }}</span>
        <span class="text-muted">{{ description }}</span>
      </div>
    </div>
  </UCard>
</template>
