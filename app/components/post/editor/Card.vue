<script setup lang="ts">
defineProps<{ title: string, rootClassName?: string, bodyClassName?: string }>()
</script>

<template>
  <UCard :ui="{ body: `flex flex-col gap-6${bodyClassName ? ` ${bodyClassName}` : ''}`, root: `overflow-visible${rootClassName ? ` ${rootClassName}` : ''}` }">
    <h3 class="text-3xl font-semibold">
      {{ title }}
    </h3>
    <slot name="content" />
  </UCard>
</template>
