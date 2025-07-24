<script setup lang="ts">
interface Props { size?: 'md' | 'lg' }

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
})

const sizes: Record<NonNullable<Props['size']>, { iconClass: string, textClass: string }> = {
  md: { iconClass: 'size-10 md:size-8', textClass: 'text-md md:text-lg' },
  lg: { iconClass: 'size-10 md:size-14', textClass: 'text-md md:text-2xl' },
}

const currentSize = computed(() => sizes[props.size])
</script>

<template>
  <NuxtLink to="/" class="flex items-center gap-2 cursor-pointer">
    <UIcon name="mdi:book-open-blank-variant-outline" :class="currentSize.iconClass" />
    <p :class="`${currentSize.textClass} font-bold flex flex-col md:flex-row md:flex-line md:items-center md:gap-2`">
      <span class="leading-none">Kogaro's</span><span class="leading-none">Blog</span>
    </p>
  </NuxtLink>
</template>
>
