# Portfólio Pessoal — Isaac Reis

Aplicação web de portfólio construída com **Nuxt 4**, focada em apresentar projetos, artigos de blog e canais de contato em uma interface moderna, responsiva e animada.

## Visão Geral

Este projeto funciona como vitrine profissional com:

- Página inicial com seções de apresentação, projetos, sobre e contato.
- Blog com listagem de posts e página dinâmica por `slug`.
- Página dinâmica de projetos por `slug`, com tags, links externos e status.
- Layout reutilizável com header fixo, footer e background interativo em `canvas`.
- Animações de entrada usando `@vueuse/motion`.

## Stack Tecnológica

- **Framework:** Nuxt
- **UI:** Vue
- **Roteamento:** Vue Router
- **Estilo:** Tailwind CSS (`@nuxtjs/tailwindcss`)
- **Animações:** `@vueuse/motion`

## Estrutura do Projeto

```bash
.
├── assets/
│   └── css/main.css
├── components/
│   ├── AppFooter.vue
│   ├── AppHeader.vue
│   ├── CompetencyCard.vue
│   ├── ContactForm.vue
│   ├── InteractiveBackground.vue
│   ├── ProjectCard.vue
│   └── SocialLinks.vue
├── data/
│   ├── posts.js
│   └── projects.js
├── layouts/
│   └── default.vue
├── pages/
│   ├── index.vue
│   ├── blog/
│   │   ├── index.vue
│   │   └── [slug].vue
│   └── projetos/
│       └── [slug].vue
├── app.vue
├── nuxt.config.ts
└── package.json
```

## Rotas

- `/` — página principal com:
	- Hero (apresentação)
	- Seção de projetos
	- Seção “Sobre Mim”
	- Seção de contato
- `/blog` — listagem de artigos
- `/blog/:slug` — detalhe de artigo
- `/projetos/:slug` — detalhe de projeto

## Fonte de Dados

O conteúdo do site é orientado por dados estáticos:

- `data/projects.js`: lista de projetos (título, slug, descrição, tags, links etc.)
- `data/posts.js`: lista de artigos (título, slug, data, resumo e conteúdo HTML)

Isso facilita a manutenção e atualização de conteúdo sem alterar a estrutura das páginas.

## Como Rodar Localmente

### 1) Pré-requisitos

- Node.js 20+
- npm 10+

### 2) Instalação

```bash
npm install
```

### 3) Ambiente de desenvolvimento

```bash
npm run dev
```

Aplicação disponível em `http://localhost:3000`.

## Scripts Disponíveis

- `npm run dev` — inicia servidor de desenvolvimento
- `npm run build` — gera build de produção
- `npm run preview` — sobe preview da build de produção
- `npm run generate` — gera versão estática (SSG)

## Build e Deploy

### Build de produção

```bash
npm run build
```

### Preview local da build

```bash
npm run preview
```

### Geração estática (opcional)

```bash
npm run generate
```

## SEO e Metadados

O projeto já define metadados em páginas-chave com `useHead`, incluindo título e descrição, por exemplo:

- página inicial (`pages/index.vue`)
- página dinâmica de projeto (`pages/projetos/[slug].vue`)

## Acessibilidade e UX

- Navegação clara com links de âncora na home.
- Contraste escuro com destaque em azul para elementos interativos.
- Feedback visual com hover e transições.
- Fundo interativo em `canvas` para identidade visual sem bloquear o conteúdo.

## Autor

**Isaac do Nascimento Reis**

- GitHub: https://github.com/isaacnasreis
- LinkedIn: https://www.linkedin.com/in/isaacnreis/
- E-mail: isaacreisn@gmail.com
