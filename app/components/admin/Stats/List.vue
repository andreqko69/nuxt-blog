<script setup lang="ts">
const items = [
  {
    title: 'Total Posts',
    iconName: 'mdi:file-document',
    content: '24',
    description: '+3 this week',
  },
  {
    title: 'Categories',
    iconName: 'mdi:folder',
    content: '8',
    description: '+1 this month',
  },
  {
    title: 'Total Views',
    iconName: 'mdi:eye',
    content: '12,345',
    description: '+15% this month',
  },
  {
    title: 'Active Users',
    iconName: 'mdi:people',
    content: '500',
    description: '+50% this month',
  },
]
</script>

<template>
  <ul class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
    <li v-for="item in items" :key="item.title">
      <AdminStatsCard :title="item.title" :icon-name="item.iconName" :content="item.content" :description="item.description" />
    </li>
  </ul>
</template>
