<script setup>
defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div
    class="bg-slate-900 p-6 rounded-lg border border-slate-700 text-left transform hover:scale-105 hover:border-sky-400 transition-all duration-300"
  >
    <h4 class="text-xl font-bold text-white mb-2">{{ title }}</h4>
    <p class="text-slate-400">
      {{ description }}
    </p>
  </div>
</template>
