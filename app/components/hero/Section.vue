<script setup lang="ts">
defineProps({
  title: String,
  description: String,
})
</script>

<template>
  <section class="hero py-20 px-4 text-center bg-gradient-to-br from-background to-muted">
    <div class="hero-content container mx-auto flex flex-col gap-6 text-center">
      <h1 class="hero-title text-6xl">
        {{ title }}
      </h1>
      <p class="hero-description mx-auto max-w-2xl text-2xl">
        {{ description }}
      </p>
      <slot name="buttons" />
    </div>
  </section>
</template>
