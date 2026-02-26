<template>
  <div class="text-white min-h-screen flex flex-col relative overflow-hidden">
    <InteractiveBackground />

    <AppHeader />

    <main class="flex-grow z-10" style="padding-top: var(--app-header-height)">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
