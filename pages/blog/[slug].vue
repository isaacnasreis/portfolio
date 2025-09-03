<script setup>
import { posts } from "~/data/posts.js";

const route = useRoute();
const slug = route.params.slug;

const post = posts.find((p) => p.slug === slug);
</script>

<template>
  <div class="container mx-auto py-12 px-4">
    <article v-if="post" class="max-w-4xl mx-auto">
      <h1 class="text-5xl font-extrabold text-white leading-tight mb-4">
        {{ post.title }}
      </h1>
      <p class="text-slate-400 mb-8">
        {{
          new Date(post.date).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        }}
      </p>

      <div
        class="prose prose-invert prose-lg max-w-none"
        v-html="post.content"
      ></div>
    </article>
    <div v-else class="text-center">
      <h1 class="text-4xl text-red-500">Artigo não encontrado!</h1>
    </div>
  </div>
</template>
