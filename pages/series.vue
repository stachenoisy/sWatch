<template>
  <div>
    <div class="container mx-auto py-10 px-4">
      <h1 class="text-3xl font-bold mb-6">TV Series</h1>
      
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
        <h2 class="text-2xl font-bold mb-4">Popular Series</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="series in popularSeries" :key="series.id" :video="series" />
        </div>
      </section>
      
      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">New Releases</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="series in newReleases" :key="series.id" :video="series" />
        </div>
      </section>
      
      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-4">Award-Winning Series</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="series in awardWinning" :key="series.id" :video="series" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { getSeries, getGenres } from '~/composables/bridge';

const genres = ref([]);

const popularSeries = ref([]);
const newReleases = ref([]);
const awardWinning = ref([]);

onMounted(async () => {
  const seriesData = await getSeries();
  genres.value = await getGenres();
  
  popularSeries.value = seriesData || [];
  newReleases.value = [...popularSeries.value].sort(() => 0.5 - Math.random());
  awardWinning.value = [...popularSeries.value].sort(() => 0.5 - Math.random());
});
</script>
