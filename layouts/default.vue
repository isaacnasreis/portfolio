<template>
  <div class="bg-slate-900 text-white min-h-screen flex flex-col">
    <AppHeader />

    <main class="flex-grow">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
