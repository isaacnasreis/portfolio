<template>
  <header
    class="sticky top-0 bg-slate-900/80 backdrop-blur-sm z-10 border-b border-slate-700 shadow-lg"
  >
    <nav class="container mx-auto flex justify-between items-center p-4">
      <NuxtLink to="/#inicio" class="text-xl font-bold">Isaac Reis</NuxtLink>
      <div>
        <NuxtLink
          to="/#projetos"
          class="px-4 hover:text-sky-400 transition-colors"
          >Projetos</NuxtLink
        >
        <a href="/blog" class="px-4 hover:text-sky-400 transition-colors"
          >Blog</a
        >
        <NuxtLink to="/#sobre" class="px-4 hover:text-sky-400 transition-colors"
          >Sobre</NuxtLink
        >
        <NuxtLink
          to="/#contato"
          class="px-4 hover:text-sky-400 transition-colors"
          >Contato</NuxtLink
        >
      </div>
    </nav>
  </header>
</template>
