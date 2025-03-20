<template>
  <div>
    <videoFeaturedVideo :featured="featuredContent" />
    
    <div class="container mx-auto py-10 px-4">
      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">Continue Watching</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="video in continueWatching" :key="video.id" :video="video" />
        </div>
      </section>
      
      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">Popular Movies</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="video in movies" :key="video.id" :video="video" />
        </div>
      </section>
      
      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">Popular Series</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="video in series" :key="video.id" :video="video" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { getMovies, getSeries } from '~/composables/bridge';

const movies = ref([]);
const series = ref([]);

const continueWatching = ref([]);

const featuredContent = {
  id: '1',
  title: 'The Tomorrow War',
  description: 'A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.',
  backdropImage: 'https://placehold.co/1920x1080',
  year: '2021',
  duration: '2h 18m',
  rating: 'PG-13'
};


onMounted(async () => {
  // Fetch movies
  movies.value = await getMovies();
 
  // Fetch series
  series.value = await getSeries();

  // Set continue watching to movies
  continueWatching.value = movies.value.slice(0, 2);
});
</script>
