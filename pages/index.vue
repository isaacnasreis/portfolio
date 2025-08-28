<script setup>
import { projects } from "~/data/projects.js";
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
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">
          Sobre <span class="text-sky-400">Mim</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div class="md:col-span-5">
            <div class="bg-slate-700 rounded-lg p-6">
              <img
                src="https://via.placeholder.com/400x500.png/1e293b/ffffff?text=Isaac+Reis"
                alt="Foto de Isaac Reis"
                class="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
          </div>

          <div class="md:col-span-7 prose prose-invert prose-lg max-w-none">
            <p>
              Sou um desenvolvedor Full-Stack apaixonado por criar soluções
              digitais que unem funcionalidade e experiência do usuário. Minha
              jornada na tecnologia começou com a graduação em Análise e
              Desenvolvimento de Sistemas, onde me aprofundei em diversas
              tecnologias e metodologias de desenvolvimento.
            </p>
            <p>
              Buscando aprimorar minhas habilidades e oferecer soluções ainda
              mais completas, estou cursando Pós-graduação em UX-Engineering.
              Acredito que a combinação de desenvolvimento Full-Stack com o
              conhecimento em UX me permite criar produtos digitais que não
              apenas funcionam de forma eficiente, mas que também proporcionam
              uma experiência intuitiva e agradável aos usuários.
            </p>
            <p>
              Além da programação, tenho outros hobbies, especialmente desenho,
              associado à produção de animação e fotografia, o que alimenta meu
              lado criativo e minha atenção aos detalhes.
            </p>
          </div>
        </div>

        <div class="mt-20">
          <h3 class="text-3xl font-bold text-center mb-10">
            Minhas Competências
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CompetencyCard
              title="Desenvolvedor Full-Stack"
              description="Crio aplicações web completas, do front-end ao back-end, focando em performance e escalabilidade."
            />
            <CompetencyCard
              title="UX Engineer"
              description="Atuo como ponte entre o design e o desenvolvimento, garantindo que a experiência do usuário seja fiel à visão inicial."
            />
            <CompetencyCard
              title="Programador Criativo"
              description="Utilizo a lógica da programação para resolver problemas de forma inovadora e eficiente, sempre buscando a melhor solução."
            />
            <CompetencyCard
              title="Artista Digital"
              description="Minha paixão por desenho e artes visuais me dá um olhar apurado para a estética, a composição e os detalhes da interface."
            />
          </div>
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
