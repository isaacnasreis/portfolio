<script setup>
const projects = [
  {
    id: 1,
    title: "Teste de Projeto",
    description: "Descriçã de teste.",
    image: "https://placehold.co/600x400/png",
    tags: ["Vue.js", "PHP", "MySQL", "UX Design"],
  },
  {
    id: 2,
    title: "Teste de Projeto 2",
    description: "Descriçã de teste.",
    image: "https://placehold.co/600x400/png",
    tags: ["Vue.js", "Cordova", "TypeScript"],
  },
  {
    id: 3,
    title: "Teste de Projeto 3",
    description: "Descriçã de teste.",
    image: "https://placehold.co/600x400/png",
    tags: ["HTML", "Sass", "JavaScript"],
  },
];
</script>

<template>
  <div>
    <section
      id="inicio"
      class="container mx-auto min-h-[80vh] flex items-center"
    >
      <div class="text-left">
        <h1 class="text-6xl font-extrabold leading-tight">
          <span class="block text-slate-300">Olá, eu sou</span>
          <span class="block text-white">Isaac Reis.</span>
          <span class="block text-sky-400">Desenvolvedor Full-Stack</span>
        </h1>
        <p class="mt-6 max-w-2xl text-xl text-slate-400">
          Apaixonado por criar soluções digitais que unem funcionalidade, design
          e uma ótima experiência para o usuário.
        </p>
      </div>
    </section>

    <section id="projetos" class="py-20">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-12">Meus Projetos</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </section>

    <section id="sobre" class="py-20 bg-slate-800">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold">Sobre Mim</h2>
        <div class="mt-8 p-16 bg-slate-900 rounded-lg">
          [Placeholder para a seção Sobre Mim]
        </div>
      </div>
    </section>

    <section id="contato" class="py-20">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold">Contato</h2>
        <div class="mt-8 p-16 bg-slate-800 rounded-lg">
          [Placeholder para o formulário de contato]
        </div>
      </div>
    </section>
  </div>
</template>
