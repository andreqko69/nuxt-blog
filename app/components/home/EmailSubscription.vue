<script setup lang="ts">
const value = ref('')
</script>

<template>
  <section class="py-16 px-4 bg-muted">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">
        Stay Updated
      </h2>
      <p class="text-muted-foreground mb-8">
        Subscribe to our newsletter and never miss our latest articles and updates.
      </p>
      <div class="flex items-center justify-center gap-2">
        <UInput v-model="value" size="xl" placeholder="Enter your email" />
        <UButton size="xl">
          Subscribe
        </UButton>
      </div>
    </div>
  </section>
</template>
