<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex-1 min-h-0">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
