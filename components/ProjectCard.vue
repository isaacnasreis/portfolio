<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="`/projetos/${project.slug}`"
    class="block bg-slate-800 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-sky-400/20"
  >
    <div class="overflow-hidden">
      <img
        :src="project.image"
        :alt="`Imagem do projeto ${project.title}`"
        class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div class="p-6">
      <h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
      <p class="text-slate-400 mb-4">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="bg-sky-900/50 text-sky-300 text-sm font-semibold px-3 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
