export const posts = [
  {
    id: 1,
    slug: "introducao-a-ux-engineering",
    title: "Introdução à UX Engineering: A Ponte Entre Design e Código",
    excerpt:
      "Neste artigo, exploro o que é um UX Engineer e como essa disciplina está moldando a forma como construímos produtos digitais mais coesos e centrados no usuário.",
    date: "2025-09-03",
    content: `
      <p>No desenvolvimento de produtos digitais, tradicionalmente existe um vale entre a equipe de design e a de desenvolvimento. Designers criam experiências visualmente ricas e intuitivas, mas a tradução dessas visões para um produto funcional, performático e acessível pode ser cheia de desafios. É exatamente nesta fronteira que surge uma das funções mais importantes da tecnologia moderna: o <strong>UX Engineer (UXE)</strong>.</p>

      <h2>O que é, afinal, um UX Engineer?</h2>
      <p>Um UX Engineer é um profissional híbrido, um engenheiro de front-end com uma profunda especialização em Experiência do Usuário (UX). Ele não apenas entende de código, mas também de princípios de design, usabilidade e interação. A principal missão de um UXE é atuar como uma <strong>ponte</strong>, garantindo que a visão do design seja implementada com a mais alta fidelidade, sem sacrificar a performance, a acessibilidade ou a manutenibilidade do código.</p>
      <p>Eles são os guardiões da interface, garantindo que cada animação, cada transição e cada micro-interação não apenas funcione, mas também encante o usuário, exatamente como foi planejado.</p>

      <h2>Principais Responsabilidades</h2>
      <p>As tarefas diárias de um UX Engineer podem variar, mas geralmente se concentram em quatro áreas principais:</p>
      
      <h3>1. Prototipagem de Alta Fidelidade</h3>
      <p>Enquanto designers criam protótipos em ferramentas como o Figma, o UXE leva isso um passo adiante. Ele constrói protótipos interativos usando código real (HTML, CSS, JavaScript/TypeScript), muitas vezes integrados a dados reais. Isso permite testar fluxos complexos, validar animações e obter um feedback muito mais preciso dos usuários antes que o produto final seja desenvolvido.</p>

      <h3>2. Desenvolvimento e Manutenção de Design Systems</h3>
      <p>Design Systems são a espinha dorsal de produtos escaláveis. O UX Engineer é frequentemente o principal responsável por construir e manter a biblioteca de componentes de um Design System. Ele trabalha com os designers para definir os "design tokens" (cores, espaçamentos, tipografia) e os transforma em componentes de UI reutilizáveis, documentados e fáceis de usar para toda a equipe de desenvolvimento.</p>

      <h3>3. Garantia de Qualidade da Interface</h3>
      <p>O UXE é obcecado por detalhes. Ele garante que o produto final seja "pixel-perfect", que as animações sejam fluidas (60fps), que o site seja totalmente acessível via teclado e leitores de tela (seguindo as diretrizes da WCAG) e que a performance de carregamento seja otimizada. Ele é a última linha de defesa contra uma experiência de usuário medíocre.</p>

      <h3>4. Exploração de Novas Tecnologias de UI</h3>
      <p>Este profissional está sempre pesquisando novas bibliotecas de animação, novas funcionalidades de CSS e novas abordagens de interação para trazer inovação e aprimoramento contínuo para a interface do produto.</p>

      <h2>Conclusão</h2>
      <p>A ascensão da engenharia de UX não é uma tendência passageira, mas uma evolução natural na forma como criamos software. Ao unir a sensibilidade do design com o rigor técnico da engenharia, o UX Engineer garante que os produtos não sejam apenas funcionais, mas também intuitivos, agradáveis e memoráveis. É uma disciplina que coloca, de fato, o usuário no centro de cada linha de código.</p>
    `,
  },
  {
    id: 2,
    slug: "5-dicas-de-performance-em-vue-3",
    title: "5 Dicas de Performance em Vue 3 que Você Deveria Conhecer",
    excerpt:
      "O Vue 3 é incrivelmente rápido, mas algumas práticas podem levar suas aplicações para o próximo nível. Vamos ver cinco técnicas essenciais.",
    date: "2025-08-28",
    content: `
      <p>A performance é uma feature. Em um mercado competitivo, a velocidade de carregamento e a fluidez da interface podem ser o diferencial entre reter ou perder um usuário. O Vue 3, com seu sistema de reatividade aprimorado e a Composition API, já nos dá uma base extremamente performática. No entanto, como desenvolvedores, podemos adotar certas práticas para extrair o máximo de desempenho.</p>
      <p>Neste artigo, vamos explorar cinco dicas práticas que podem ter um impacto significativo na performance da sua aplicação Vue 3.</p>

      <h2>Dica 1: Use <code>v-once</code> para Conteúdo Estático</h2>
      <p><strong>O Problema:</strong> Componentes que contêm uma grande quantidade de conteúdo que nunca muda (como um texto de "Termos de Serviço" ou um rodapé complexo) são re-renderizados desnecessariamente sempre que o estado do componente pai é atualizado.</p>
      <p><strong>A Solução:</strong> A diretiva <code>v-once</code> instrui o Vue a renderizar um elemento e seus filhos apenas uma vez. Após a renderização inicial, todas as atualizações futuras para este bloco de conteúdo serão ignoradas.</p>
      <pre><code class="language-html">&lt;template&gt;
  &lt;div v-once&gt;
    &lt;h1&gt;Título Estático&lt;/h1&gt;
    &lt;p&gt;Este parágrafo contém muito texto que não precisa ser reativo...&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      <p><strong>Quando usar:</strong> Ideal para qualquer parte da sua interface que você sabe que não mudará após ser carregada.</p>

      <h2>Dica 2: Carregamento Preguiçoso (Lazy Loading) com <code>defineAsyncComponent</code></h2>
      <p><strong>O Problema:</strong> Em aplicações grandes (Single Page Applications), o arquivo JavaScript inicial pode se tornar gigante, incluindo o código de todos os componentes, mesmo aqueles que o usuário talvez nunca veja (como modais, painéis de administração, etc.). Isso aumenta o tempo de carregamento inicial.</p>
      <p><strong>A Solução:</strong> <code>defineAsyncComponent</code> permite carregar um componente apenas quando ele for realmente necessário. Isso divide seu código em "chunks" menores, que são baixados sob demanda.</p>
      <pre><code class="language-javascript">&lt;script setup&gt;
import { defineAsyncComponent } from 'vue';

const HeavyModal = defineAsyncComponent(() => 
  import('./components/HeavyModal.vue')
);
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="showModal = true"&gt;Abrir Modal&lt;/button&gt;
  &lt;HeavyModal v-if="showModal" /&gt;
&lt;/template&gt;</code></pre>
      <p><strong>Quando usar:</strong> Perfeito para componentes que não são visíveis no carregamento inicial da página, como modais, abas não ativas, ou componentes que só aparecem em rotas específicas (o Nuxt já faz isso automaticamente para as páginas!).</p>

      <h2>Dica 3: Virtual Scrolling para Listas Longas</h2>
      <p><strong>O Problema:</strong> Renderizar uma lista com milhares de itens (um feed de notícias, uma tabela de dados, etc.) pode travar o navegador, pois ele precisa criar milhares de elementos no DOM.</p>
      <p><strong>A Solução:</strong> Virtual Scrolling é uma técnica que renderiza apenas os itens da lista que estão atualmente visíveis na tela do usuário. Conforme o usuário rola, os itens que saem de vista são removidos e os novos que entram são adicionados.</p>
      <p>Implementar isso do zero é complexo, por isso a melhor abordagem é usar bibliotecas prontas e otimizadas. Uma excelente opção para Vue é a <strong>Vue Virtual Scroller</strong>.</p>
      <p><strong>Quando usar:</strong> Sempre que você precisar exibir listas que podem crescer para centenas ou milhares de itens.</p>

      <h2>Dica 4: Otimize Dependências Reativas</h2>
      <p><strong>O Problema:</strong> Uma propriedade computada ou um watcher que depende de um objeto reativo inteiro será re-executado sempre que *qualquer* propriedade daquele objeto mudar, mesmo que a mudança não seja relevante para o cálculo.</p>
      <p><strong>A Solução:</strong> Seja explícito sobre as dependências. Em vez de depender do objeto inteiro, crie uma computada que dependa apenas da propriedade específica que você precisa.</p>
      <pre><code class="language-javascript">&lt;script setup&gt;
import { ref, computed } from 'vue';

const user = ref({ id: 1, name: 'Isaac', settings: { theme: 'dark' } });

// RUIM: Depende do objeto 'user' inteiro.
// Será re-calculado se user.id mudar.
const theme = computed(() => user.value.settings.theme);

// BOM: Depende apenas da propriedade 'settings'.
// Só será re-calculado se user.value.settings mudar.
const themeOptimized = computed(() => user.value.settings.theme);
&lt;/script&gt;</code></pre>
      <p><strong>Quando usar:</strong> Em computadas e watchers que realizam operações custosas e dependem de objetos grandes e reativos.</p>

      <h2>Dica 5: Entenda a Memoização das Computadas</h2>
      <p><strong>O Problema:</strong> Às vezes, temos uma função no template que realiza um cálculo pesado, e ela é chamada a cada re-renderização, mesmo que seus inputs não tenham mudado.</p>
      <p><strong>A Solução:</strong> Propriedades computadas (<code>computed</code>) são a forma nativa de memoização do Vue. Elas armazenam o resultado de seu cálculo em cache. A computada só será re-executada se uma de suas dependências reativas mudar. Se nada mudou, ela retorna instantaneamente o último resultado calculado.</p>
      <pre><code class="language-javascript">&lt;script setup&gt;
import { ref, computed } from 'vue';

const projects = ref([...]); // Array com muitos projetos

// Esta computada só vai filtrar o array UMA VEZ.
// Ela só será re-executada se o array 'projects' mudar.
const featuredProjects = computed(() => {
  console.log('Calculando projetos em destaque...');
  return projects.value.filter(p => p.isFeatured);
});
&lt;/script&gt;

&lt;template&gt;
  &lt;!-- featuredProjects é usado aqui várias vezes, mas o cálculo só acontece uma vez --&gt;
  &lt;h2&gt;{{ featuredProjects.length }} projetos em destaque&lt;/h2&gt;
  &lt;ul&gt;
    &lt;li v-for="p in featuredProjects"&gt;{{ p.name }}&lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;</code></pre>
      <p><strong>Quando usar:</strong> Sempre que você precisar exibir um dado que é derivado de outro dado reativo. Evite usar métodos para isso no template, prefira sempre as propriedades computadas.</p>
      
      <h2>Conclusão</h2>
      <p>Otimizar a performance é um processo contínuo de análise e refinamento. Ao aplicar estas cinco técnicas, você estará um passo à frente na criação de aplicações Vue 3 que não são apenas ricas em funcionalidades, mas também incrivelmente rápidas e agradáveis de usar.</p>
    `,
  },
];
