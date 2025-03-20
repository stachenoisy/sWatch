<template>
  <div class="group relative overflow-hidden rounded-lg transition-transform hover:scale-105">
    <img :src="video.thumbnail" :alt="video.title" class="w-full h-auto object-cover" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
      <h3 class="text-lg font-bold">{{ video.title }}</h3>
      <div class="flex items-center text-sm mt-1">
        <span>{{ video.year }}</span>
        <span class="mx-2">•</span>
        <span>{{ video.duration }}</span>
      </div>
      <NuxtLink :to="`/video/${video.id}`" class="btn btn-primary mt-3 text-center">
        Watch Now
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  video: {
    type: Object,
    required: true
  }
});
</script>
