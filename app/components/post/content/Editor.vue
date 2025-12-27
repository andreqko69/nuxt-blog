<script setup lang="ts">
import type { EditorToolbarItem } from '@nuxt/ui'

const value = ref(null)

const toolbarItems: EditorToolbarItem[][] = [
  [
    {
      kind: 'mark',
      mark: 'bold',
      icon: 'mdi:format-bold',
      tooltip: { text: 'Bold' },
    },
    {
      kind: 'mark',
      mark: 'italic',
      icon: 'mdi:format-italic',
      tooltip: { text: 'Italic' },
    },
    {
      kind: 'heading',
      level: 1,
      icon: 'mdi:format-heading-1',
      tooltip: { text: 'Heading 1' },
    },
    {
      kind: 'heading',
      level: 2,
      icon: 'mdi:format-heading-2',
      tooltip: { text: 'Heading 2' },
    },
    {
      kind: 'link',
      icon: 'mdi:link',
      tooltip: { text: 'Link' },
    },
    {
      kind: 'mark',
      mark: 'code',
      icon: 'mdi:code',
      tooltip: { text: 'Code' },
    },
    {
      kind: 'blockquote',
      icon: 'mdi:format-quote-close',
      tooltip: { text: 'Blockquote' },
    },
    {
      kind: 'bulletList',
      icon: 'mdi:format-list-bulleted',
      tooltip: { text: 'Bullet List' },
    },
  ],
]
</script>

<template>
  <PostEditorCard title="Content" root-class-name="flex-1" body-class-name="h-full">
    <template #content>
      <div class="flex flex-1">
        <UEditor v-slot="{ editor }" v-model="value" :lazy="false" placeholder="Write your post content here..." enable-input-rules content-type="markdown" class="flex-1" :ui="{ root: 'flex flex-col gap-2', content: 'flex', base: 'sm:p-3 appearance-none bg-default border-0 disabled:cursor-not-allowed disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary focus:outline-none gap-2 placeholder:text-dimmed px-3 py-2 ring ring-accented ring-inset rounded-md text-base text-highlighted transition-colors w-full' }">
          <UEditorToolbar :editor="editor" :items="toolbarItems" layout="fixed" :ui="{ group: '[&_.iconify]:size-6' }" />
        </UEditor>
      </div>
    </template>
  </PostEditorCard>
</template>
