<template>
  <div>
    <div class="container mx-auto py-10 px-4">
      <h1 class="text-3xl font-bold mb-6">TV Series</h1>
      
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
        <h2 class="text-2xl font-bold mb-4">Popular Series</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="series in filteredPopularSeries" :key="series.id" :video="series" />
        </div>
      </section>
      
      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">New Releases</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="series in filteredNewSeries" :key="series.id" :video="series" />
        </div>
      </section>
      
      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">Award-Winning Series</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="series in filteredAwardSeries" :key="series.id" :video="series" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const genres = ref([]);

const popularSeries = ref([]);
const newReleases = ref([]);
const awardWinning = ref([]);

const selectedGenre = ref('');

const filteredPopularSeries = computed(() => {
  let result = popularSeries.value;
  
  if (selectedGenre.value) {
    result = result.filter(serie => serie.genre_ids.includes(selectedGenre.value));
  }
  
  return result;
});

const filteredNewSeries = computed(() => {
  let result = newReleases.value;
  
  if (selectedGenre.value) {
    result = result.filter(serie => serie.genre_ids.includes(selectedGenre.value));
  }
  
  return result;
});

const filteredAwardSeries = computed(() => {
  let result = awardWinning.value;
  
  if (selectedGenre.value) {
    result = result.filter(serie => serie.genre_ids.includes(selectedGenre.value));
  }
  
  return result;
});

onMounted(async () => {
  // We get the page data by sending a request via API
  const seriesData = await getSeries('popular', 1);
  const seriesGenresData = await getGenres('tv');
  
  const allSeries = seriesData.results;
  const genresList = seriesGenresData.genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});

  // We are making species listable (taken from inside the videos).
  genres.value = [...new Set(allSeries.flatMap(video => video.genre_ids))].map(genre => {
    return {
      id: genre,
      name: genresList[genre]
    };
  })
  
  // Imitate popular, new releases and award winners.
  popularSeries.value = (allSeries || []).slice(0, 5);
  newReleases.value = [...allSeries].sort(() => 0.5 - Math.random());
  awardWinning.value = [...allSeries].sort(() => 0.5 - Math.random());
});
</script>
