<script setup>
import { projects } from "~/data/projects.js";

const route = useRoute();
const slug = route.params.slug;

const project = projects.find((p) => p.slug === slug);

useHead({
  title: `Projeto: ${project.title} | Isaac Reis`,
  meta: [{ name: "description", content: project.description }],
});
</script>

<template>
  <div class="container mx-auto py-10 md:py-12 2xl:py-16 px-4 lg:px-8">
    <div v-if="project">
      <h1 class="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white mb-4">{{ project.title }}</h1>
      <div class="flex flex-wrap gap-2 mb-8">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="bg-sky-900/50 text-sky-300 text-sm font-semibold px-3 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
      <span
        class="bg-yellow-900/50 text-yellow-300 text-sm font-semibold px-3 py-1 rounded-full ml-4"
        v-if="project.status === 'Em Construção'"
      >
        {{ project.status }}
      </span>

      <div class="flex flex-wrap items-center gap-3 md:gap-4 my-8">
        <a
          v-if="project.liveUrl && project.liveUrl !== '#'"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-sky-600 hover:bg-sky-700 text-white text-sm md:text-base font-bold py-2.5 md:py-3 px-5 md:px-6 rounded-md transition-colors duration-300"
        >
          Ver ao Vivo
        </a>
        <a
          v-if="project.repoUrl && project.repoUrl !== '#'"
          :href="project.repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-slate-700 hover:bg-slate-600 text-white text-sm md:text-base font-bold py-2.5 md:py-3 px-5 md:px-6 rounded-md transition-colors duration-300"
        >
          Ver Código
        </a>
      </div>
      <img
        :src="project.image"
        :alt="`Imagem do ${project.title}`"
        class="w-full max-w-4xl mx-auto rounded-lg shadow-lg mb-8"
      />
      <div class="prose prose-invert prose-base md:prose-lg 2xl:prose-xl max-w-4xl mx-auto">
        <p>{{ project.description }}</p>
        <p>
          Aqui vou detalhar os desafios, as tecnologias utilizadas, a
          contribuição e os resultados alcançados. Este texto é apenas um
          exemplo.
        </p>
      </div>
    </div>
    <div v-else>
      <h1 class="text-2xl md:text-4xl text-center text-red-500">Projeto não encontrado!</h1>
    </div>
  </div>
</template>
