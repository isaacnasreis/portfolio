<script setup>
import { posts } from "~/data/posts.js";

const route = useRoute();
const slug = route.params.slug;

const post = posts.find((p) => p.slug === slug);
</script>

<template>
  <div class="container mx-auto py-10 md:py-12 2xl:py-16 px-4 lg:px-8">
    <article v-if="post" class="max-w-4xl mx-auto">
      <h1 class="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-white leading-tight mb-4">
        {{ post.title }}
      </h1>
      <p class="text-slate-400 text-sm md:text-base mb-8">
        {{
          new Date(post.date).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        }}
      </p>

      <div
        class="prose prose-invert prose-base md:prose-lg 2xl:prose-xl max-w-none"
        v-html="post.content"
      ></div>
    </article>
    <div v-else class="text-center">
      <h1 class="text-2xl md:text-4xl text-red-500">Artigo não encontrado!</h1>
    </div>
  </div>
</template>
