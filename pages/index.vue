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
const movies = ref([]);
const series = ref([]);

const continueWatching = ref([]);

const featuredContent = {
  adult: false,
  backdrop_path: "/2siOHQYDG7gCQB6g69g2pTZiSia.jpg",
  genre_ids: [10751, 14],
  id: 447273,
  original_language: "en",
  original_title: "Snow White",
  overview: "A princess joins forces with seven dwarfs to liberate her kingdom from her cruel stepmother, the Evil Queen.",
  popularity: 30.454,
  poster_path: "/xWWg47tTfparvjK0WJNX4xL8lW2.jpg",
  release_date: "2025-03-19",
  title: "Snow White",
  video: false,
  vote_average: 4.018,
  vote_count: 84,
};

onMounted(async () => {
  // Fetch movies
  const moviesData = await getMovies('popular', 1);
  const allMovies = moviesData.results;
  movies.value = allMovies;
 
  // Fetch series
  const seriesData = await getSeries('popular', 1);
  const allSeries = seriesData.results;
  series.value = allSeries;

  // Set continue watching to movies
  continueWatching.value = movies.value.slice(0, 2);
});
</script>
