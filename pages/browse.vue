<template>
  <div class="container mx-auto py-10 px-4">
    <h1 class="text-3xl font-bold mb-6">Browse</h1>
    
    <!-- Filters -->
    <div class="flex flex-wrap gap-4 mb-8">
      <select v-model="selectedType" class="bg-gray-800 border border-gray-700 rounded px-4 py-2">
        <option value="">Both</option>
        <option value="movies">Movies</option>
        <option value="series">Series</option>
      </select>

      <select v-model="selectedGenre" class="bg-gray-800 border border-gray-700 rounded px-4 py-2">
        <option value="">All Genres</option>
        <option v-for="genre in genres" :key="genre" :value="genre.id">{{ genre.name }}</option>
      </select>
      
      <select v-model="selectedYear" class="bg-gray-800 border border-gray-700 rounded px-4 py-2">
        <option value="">All Years</option>
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
      
      <select v-model="sortBy" class="bg-gray-800 border border-gray-700 rounded px-4 py-2">
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
    </div>
    
    <!-- Results -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      <VideoCard v-for="video in filteredVideos" :key="video.id" :video="video" />
    </div>
    
    <!-- No Results -->
    <div v-if="filteredVideos.length === 0" class="text-center py-12">
      <p class="text-2xl text-gray-400">No videos found matching your filters</p>
      <button @click="resetFilters" class="btn btn-primary mt-4">Reset Filters</button>
    </div>
  </div>
</template>

<script setup>
const selectedType = ref('');
const selectedGenre = ref('');
const selectedYear = ref('');
const sortBy = ref('newest');

const videos = ref([]);

// Extract unique genres and years for filters
let genres = [];
let years = [];

// Filter and sort videos based on user selection
const filteredVideos = computed(() => {
  let result = videos.value;
  
  if (selectedGenre.value) {
    result = result.filter(video => video.genre_ids.includes(selectedGenre.value));
  }
  
  if (selectedYear.value) {
    result = result.filter(video => video.release_date === selectedYear.value);
  }

  if (selectedType.value) {
    result = result.filter(video => video.type === selectedType.value);
  }
  
  // Sort results
  switch(sortBy.value) {
    case 'newest':
      return result.sort((a, b) => b.release_date - a.release_date);
    case 'oldest':
      return result.sort((a, b) => a.release_date - b.release_date);
    case 'az':
      return result.sort((a, b) => a.title.localeCompare(b.title));
    case 'za':
      return result.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return result;
  }
});

function resetFilters() {
  selectedType.value = '';
  selectedGenre.value = '';
  selectedYear.value = '';
  sortBy.value = 'newest';
}

onMounted(async () => {
  const moviesData = await getMovies('popular', 1);
  const seriesData = await getSeries('popular', 1);
  const moviesGenresData = await getGenres('movie');
  const seriesGenresData = await getGenres('tv');

  const allMovies = moviesData.results;
  const allSeries = seriesData.results;
  const genresList = [...moviesGenresData.genres, ...seriesGenresData.genres].reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});

  
  allMovies.forEach(video => video.type = 'movies');
  allSeries.forEach(video => video.type = 'series');
  
  videos.value = [...allMovies, ...allSeries];
  
  genres = [...new Set(videos.value.flatMap(video => video.genre_ids))].map(genre => {
    return {
      id: genre,
      name: genresList[genre]
    };
  })

  years = [...new Set(videos.value.map(video => video.release_date))].sort((a, b) => b - a);
});
</script>
