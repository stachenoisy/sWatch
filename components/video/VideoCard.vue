<template>
  <div class="group relative overflow-hidden rounded-lg transition-transform hover:scale-105">
    <img :src="(video.poster_path == null ? 'https://placehold.co/600x900' : 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + video.poster_path)" :alt="video.title ?? video.name" class="w-full h-auto object-cover" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
      <h3 class="text-lg font-bold">{{ video.title ?? video.name }}</h3>
      <div class="flex items-center text-sm mt-1">
        <span>{{ video.release_date ?? video.first_air_date }}</span>
        <span class="mx-2">•</span>
        <span>{{ video.vote_average.toFixed(1) }}</span>
      </div>
      <NuxtLink :to="`/video/${video.release_date != null ? 'movie' : 'tv'}/${video.id}`" class="btn btn-primary mt-3 text-center">
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
