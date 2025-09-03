<script setup>
import { projects } from "~/data/projects.js";

const competencies = [
  {
    title: "Desenvolvedor Full-Stack",
    description:
      "Crio aplicações web completas, do front-end ao back-end, focando em performance e escalabilidade.",
  },
  {
    title: "UX Engineer",
    description:
      "Atuo como ponte entre o design e o desenvolvimento, garantindo que a experiência do usuário seja fiel à visão inicial.",
  },
  {
    title: "Programador Criativo",
    description:
      "Utilizo a lógica da programação para resolver problemas de forma inovadora e eficiente, sempre buscando a melhor solução.",
  },
  {
    title: "Artista Digital",
    description:
      "Minha paixão por desenho e artes visuais me dá um olhar apurado para a estética, a composição e os detalhes da interface.",
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

    <section
      id="projetos"
      class="py-20"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: { duration: 500, type: 'spring', stiffness: '100' },
      }"
    >
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-12">Meus Projetos</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { duration: 400, delay: index * 100 },
            }"
          />
        </div>
      </div>
    </section>

    <section
      id="sobre"
      class="py-20 bg-slate-800"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: { duration: 500, type: 'spring', stiffness: '100' },
      }"
    >
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
              v-for="(card, index) in competencies"
              :key="card.title"
              :title="card.title"
              :description="card.description"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visibleOnce="{
                opacity: 1,
                y: 0,
                transition: { duration: 400, delay: index * 100 },
              }"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      id="contato"
      class="py-20"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: { duration: 500, type: 'spring', stiffness: '100' },
      }"
    >
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div class="md:col-span-5">
            <h2 class="text-4xl font-bold mb-4">Vamos conversar.</h2>
            <p class="text-slate-400 mb-8 max-w-md">
              Se você tem um projeto em mente, uma oportunidade de trabalho ou
              simplesmente quer trocar uma ideia, não hesite em me contatar.
            </p>
            <div class="space-y-4">
              <a
                href="mailto:isaacreisn@gmail.com"
                class="flex items-center gap-4 group"
              >
                <span
                  class="border border-slate-700 rounded-full p-2 group-hover:border-sky-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-slate-400 group-hover:text-sky-400 transition-colors"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    ></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
                <span
                  class="text-lg text-white group-hover:text-sky-400 transition-colors"
                  >isaacreisn@gmail.com</span
                >
              </a>
              <div class="flex items-center gap-4 group">
                <span class="border border-slate-700 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-slate-400"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>
                </span>
                <span class="text-lg text-white">+55 (31) 97152-4933</span>
              </div>
              <div class="flex items-center gap-4 group">
                <span class="border border-slate-700 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-slate-400"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>
                </span>
                <span class="text-lg text-white">+55 (31) 99225-7835</span>
              </div>
            </div>
          </div>

          <div class="md:col-span-7 bg-slate-800 p-8 rounded-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
