<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";

const isDark = ref(true);
const isMenuOpen = ref(false);
const headerRef = ref(null);

function updateHeaderHeight() {
  if (typeof document === "undefined" || !headerRef.value) return;
  const height = `${headerRef.value.offsetHeight}px`;
  document.documentElement.style.setProperty("--app-header-height", height);
}

function applyTheme(theme) {
  if (typeof document === "undefined") return;

  const isLight = theme === "light";
  document.documentElement.classList.toggle("light-theme", isLight);
  document.documentElement.style.colorScheme = isLight ? "light" : "dark";
  isDark.value = !isLight;
}

function toggleTheme() {
  const nextTheme = isDark.value ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem("portfolio-theme", nextTheme);
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

watch(isMenuOpen, async () => {
  await nextTick();
  updateHeaderHeight();
});

onMounted(() => {
  const storedTheme = localStorage.getItem("portfolio-theme");
  applyTheme(storedTheme === "light" ? "light" : "dark");
  updateHeaderHeight();
  window.addEventListener("resize", updateHeaderHeight);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateHeaderHeight);
});
</script>

<template>
  <header
    ref="headerRef"
    class="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-700 shadow-lg"
  >
    <nav class="container mx-auto p-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/#inicio" class="text-xl font-bold" @click="closeMenu"
          >Isaac Reis</NuxtLink
        >

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="ml-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-600 text-sm hover:border-sky-400 hover:text-sky-400 transition-colors"
            @click="toggleTheme"
            :aria-label="isDark ? 'Ativar tema claro' : 'Ativar tema escuro'"
          >
            <svg
              v-if="isDark"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3c.5 0 .68.63.35 1A7 7 0 0 0 20 13.44c.37-.33 1 .15 1 .35z"></path>
            </svg>
            {{ isDark ? "Tema Claro" : "Tema Escuro" }}
          </button>

          <button
            type="button"
            class="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-600 hover:border-sky-400 hover:text-sky-400 transition-colors"
            :aria-label="isMenuOpen ? 'Fechar menu' : 'Abrir menu'"
            @click="toggleMenu"
          >
            <svg
              v-if="!isMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <div class="hidden md:flex items-center gap-2 mt-3">
        <NuxtLink
          to="/#projetos"
          class="px-4 hover:text-sky-400 transition-colors"
          @click="closeMenu"
          >Projetos</NuxtLink
        >
        <NuxtLink to="/blog" class="px-4 hover:text-sky-400 transition-colors"
          @click="closeMenu"
          >Blog</NuxtLink
        >
        <NuxtLink
          to="/#sobre"
          class="px-4 hover:text-sky-400 transition-colors"
          @click="closeMenu"
          >Sobre</NuxtLink
        >
        <NuxtLink
          to="/#contato"
          class="px-4 hover:text-sky-400 transition-colors"
          @click="closeMenu"
          >Contato</NuxtLink
        >
      </div>

      <Transition name="mobile-menu">
        <div v-if="isMenuOpen" class="md:hidden mt-3 flex flex-col gap-2 pb-2">
          <NuxtLink
            to="/#projetos"
            class="px-2 py-2 rounded-md hover:text-sky-400 hover:bg-slate-800 transition-colors"
            @click="closeMenu"
            >Projetos</NuxtLink
          >
          <NuxtLink
            to="/blog"
            class="px-2 py-2 rounded-md hover:text-sky-400 hover:bg-slate-800 transition-colors"
            @click="closeMenu"
            >Blog</NuxtLink
          >
          <NuxtLink
            to="/#sobre"
            class="px-2 py-2 rounded-md hover:text-sky-400 hover:bg-slate-800 transition-colors"
            @click="closeMenu"
            >Sobre</NuxtLink
          >
          <NuxtLink
            to="/#contato"
            class="px-2 py-2 rounded-md hover:text-sky-400 hover:bg-slate-800 transition-colors"
            @click="closeMenu"
            >Contato</NuxtLink
          >
        </div>
      </Transition>
    </nav>
  </header>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
  transform-origin: top;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
