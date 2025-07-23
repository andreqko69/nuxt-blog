<script setup lang="ts">
interface Props { size?: 'md' | 'lg' }

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
})

const sizes: Record<NonNullable<Props['size']>, { iconClass: string, textClass: string }> = {
  md: { iconClass: 'size-8', textClass: 'text-lg' },
  lg: { iconClass: 'size-14', textClass: 'text-2xl' },
}

const currentSize = computed(() => sizes[props.size])
</script>

<template>
  <NuxtLink to="/" class="flex items-center gap-2 cursor-pointer">
    <UIcon name="mdi:book-open-blank-variant-outline" :class="currentSize.iconClass" />
    <span :class="`${currentSize.textClass} font-bold`">Kogaro's Blog</span>
  </NuxtLink>
</template>
>
