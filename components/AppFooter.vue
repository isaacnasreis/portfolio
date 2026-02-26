<template>
  <footer class="p-4 border-t border-slate-700">
    <div
      class="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-slate-400 text-sm md:text-base"
    >
      <span class="text-center sm:text-left"
        >&copy; {{ new Date().getFullYear() }} | Isaac do Nascimento Reis</span
      >

      <SocialLinks />
    </div>
  </footer>
</template>
