<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-bold">
        {{ title }}
      </h1>
      <p class="hero-description mx-auto max-w-2xl text-2xl">
        {{ description }}
      </p>
    </div>

    <slot name="actions" />
  </div>
</template>
