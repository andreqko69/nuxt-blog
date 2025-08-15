<template>
  <div class="h-screen flex flex-col">
    <AuthHeader />

    <main class="flex-1 flex flex-col items-center justify-center">
      <slot />
    </main>
  </div>
</template>
