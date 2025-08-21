<template>
  <div class="p-4">
    <div class="container mx-auto">
      <div class="space-y-6">
        <PostTitleEditor />
        <PostExcerptEditor />
        <client-only>
          <PostContentEditor />
        </client-only>
      </div>
    </div>
  </div>
</template>
