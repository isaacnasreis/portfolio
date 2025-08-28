<script setup>
import { projects } from "~/data/projects.js";

const route = useRoute();
const slug = route.params.slug;

const project = projects.find((p) => p.slug === slug);
</script>

<template>
  <div class="container mx-auto py-12">
    <div v-if="project">
      <h1 class="text-5xl font-bold text-white mb-4">{{ project.title }}</h1>
      <div class="flex flex-wrap gap-2 mb-8">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="bg-sky-900/50 text-sky-300 text-sm font-semibold px-3 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
      <img
        :src="project.image"
        :alt="`Imagem do ${project.title}`"
        class="w-full max-w-4xl mx-auto rounded-lg shadow-lg mb-8"
      />
      <div class="prose prose-invert prose-lg max-w-4xl mx-auto">
        <p>{{ project.description }}</p>
        <p>
          Aqui vou detalhar os desafios, as tecnologias utilizadas, a
          contribuição e os resultados alcançados. Este texto é apenas um
          exemplo.
        </p>
      </div>
    </div>
    <div v-else>
      <h1 class="text-4xl text-center text-red-500">Projeto não encontrado!</h1>
    </div>
  </div>
</template>
