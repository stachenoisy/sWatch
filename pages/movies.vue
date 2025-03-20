<template>
  <div>
    <div class="container mx-auto py-10 px-4">
      <h1 class="text-3xl font-bold mb-6">Movies</h1>
      
      <div class="mb-6">
        <div class="flex overflow-x-auto space-x-4 pb-2 hide-scrollbar">
          <button 
            v-for="genre in genres" 
            :key="genre"
            class="px-4 py-2 bg-gray-700 rounded whitespace-nowrap hover:bg-gray-600"
            @click="selectedGenre == genre.id ? selectedGenre = '' : selectedGenre = genre.id"
            :class="{ '!bg-gray-400': selectedGenre == genre.id && selectedGenre != '' }"
          >
            {{ genre.name }}
          </button>
        </div>
      </div>
      
      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">Top Rated Movies</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="movie in filteredTopMovies" :key="movie.id" :video="movie" />
        </div>
      </section>
      
      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">New Releases</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="movie in filteredNewMovies" :key="movie.id" :video="movie" />
        </div>
      </section>
      
      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">Classic Movies</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="movie in filteredClassicMovies" :key="movie.id" :video="movie" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const genres = ref([]);

const topRatedMovies = ref([]);
const newReleases = ref([]);
const classicMovies = ref([]);

const selectedGenre = ref('');

const filteredTopMovies = computed(() => {
  let result = topRatedMovies.value;
  
  if (selectedGenre.value) {
    result = result.filter(movie => movie.genre_ids.includes(selectedGenre.value));
  }
  
  return result;
});

const filteredNewMovies = computed(() => {
  let result = newReleases.value;
  
  if (selectedGenre.value) {
    result = result.filter(movie => movie.genre_ids.includes(selectedGenre.value));
  }
  
  return result;
});

const filteredClassicMovies = computed(() => {
  let result = classicMovies.value;
  
  if (selectedGenre.value) {
    result = result.filter(movie => movie.genre_ids.includes(selectedGenre.value));
  }
  
  return result;
});

onMounted(async () => {
  const moviesData = await getMovies('popular', 1);
  const moviesGenresData = await getGenres('movie');

  const allMovies = moviesData.results;
  const genresList = moviesGenresData.genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});

  genres.value = [...new Set(allMovies.flatMap(video => video.genre_ids))].map(genre => {
    return {
      id: genre,
      name: genresList[genre]
    };
  })
  
  topRatedMovies.value = allMovies || [];
  newReleases.value = [...topRatedMovies.value].sort(() => 0.5 - Math.random());
  classicMovies.value = [...topRatedMovies.value].sort(() => 0.5 - Math.random());
});
</script>
