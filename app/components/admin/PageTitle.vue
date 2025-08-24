<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
    <div>
      <h1 class="text-4xl font-bold">
        {{ title }}
      </h1>
      <p class="hero-description mx-auto text-2xl">
        {{ description }}
      </p>
    </div>

    <slot name="actions" />
  </div>
</template>
