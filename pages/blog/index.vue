<script setup>
import { posts } from "~/data/posts.js";
</script>

<template>
  <div class="container mx-auto py-10 md:py-12 2xl:py-16 px-4 lg:px-8">
    <h1 class="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white mb-8 md:mb-10 text-center">Meu Blog</h1>
    <div class="max-w-4xl mx-auto space-y-8">
      <div v-for="post in posts" :key="post.id">
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="block p-5 sm:p-6 md:p-8 bg-slate-800 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
        >
          <h2 class="text-2xl md:text-3xl 2xl:text-4xl font-bold text-sky-400 mb-2">{{ post.title }}</h2>
          <p class="text-slate-400 text-sm md:text-base mb-4">
            {{
              new Date(post.date).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </p>
          <p class="text-slate-300 text-base md:text-lg">{{ post.excerpt }}</p>
          <span
            class="inline-block mt-4 text-white text-sm md:text-base font-semibold group-hover:text-sky-400"
          >
            Ler mais &rarr;
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
