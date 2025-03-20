<template>
  <div>
    <div class="container mx-auto py-10 px-4">
      <h1 class="text-3xl font-bold mb-6">Movies</h1>
      
      <div class="mb-6">
        <div class="flex overflow-x-auto space-x-4 pb-2">
          <button 
            v-for="genre in genres" 
            :key="genre"
            class="px-4 py-2 bg-gray-700 rounded whitespace-nowrap hover:bg-gray-600"
          >
            {{ genre }}
          </button>
        </div>
      </div>
      
      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">Top Rated Movies</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="movie in topRatedMovies" :key="movie.id" :video="movie" />
        </div>
      </section>
      
      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">New Releases</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="movie in newReleases" :key="movie.id" :video="movie" />
        </div>
      </section>
      
      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">Classic Movies</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="movie in classicMovies" :key="movie.id" :video="movie" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { getMovies, getGenres } from '~/composables/bridge';

const genres = ref([]);

const topRatedMovies = ref([]);
const newReleases = ref([]);
const classicMovies = ref([]);

onMounted(async () => {
  const moviesData = await getMovies();
  genres.value = await getGenres();
  
  topRatedMovies.value = moviesData || [];
  newReleases.value = [...topRatedMovies.value].sort(() => 0.5 - Math.random());
  classicMovies.value = [...topRatedMovies.value].sort(() => 0.5 - Math.random());
});
</script>
