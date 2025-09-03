<script setup>
import { posts } from "~/data/posts.js";
</script>

<template>
  <div class="container mx-auto py-12 px-4">
    <h1 class="text-5xl font-bold text-white mb-10 text-center">Meu Blog</h1>
    <div class="max-w-4xl mx-auto space-y-8">
      <div v-for="post in posts" :key="post.id">
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="block p-8 bg-slate-800 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
        >
          <h2 class="text-3xl font-bold text-sky-400 mb-2">{{ post.title }}</h2>
          <p class="text-slate-400 mb-4">
            {{
              new Date(post.date).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </p>
          <p class="text-slate-300">{{ post.excerpt }}</p>
          <span
            class="inline-block mt-4 text-white font-semibold group-hover:text-sky-400"
          >
            Ler mais &rarr;
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
