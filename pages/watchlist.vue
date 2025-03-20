<template>
  <div>
    <div class="container mx-auto py-10 px-4">
      <h1 class="text-3xl font-bold mb-6">My Watchlist</h1>
      
      <div class="mb-6">
        <div class="flex space-x-4">
          <button 
            @click="activeTab = 'all'" 
            :class="['px-4 py-2 rounded', activeTab === 'all' ? 'bg-blue-600' : 'bg-gray-700']"
            class="btn-base"
          >
            All
          </button>
          <button 
            @click="activeTab = 'movies'" 
            :class="['px-4 py-2 rounded', activeTab === 'movies' ? 'bg-blue-600' : 'bg-gray-700']"
            class="btn-base"
          >
            Movies
          </button>
          <button 
            @click="activeTab = 'series'" 
            :class="['px-4 py-2 rounded', activeTab === 'series' ? 'bg-blue-600' : 'bg-gray-700']"
            class="btn-base"
          >
            Series
          </button>
        </div>
      </div>
      
      <div v-if="filteredWatchlist.length === 0" class="text-center py-10">
        <p class="text-gray-400">Your watchlist is empty</p>
        <div class="mt-4 bg-blue-600 px-6 py-2 rounded inline-block btn-base" @click="navigateTo('/browse')">
          <!-- <NuxtLink to='/browse' >Browse Content</NuxtLink> -->
          <span class="select-none">Browse Content</span>
        </div>
      </div>
      
      <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <VideoCard v-for="item in filteredWatchlist" :key="item.id" :video="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { getVideo, getWatchlist } from '~/composables/bridge';

const activeTab = ref('all');
const watchlist = ref([]);

// Filter watchlist based on active tab
const filteredWatchlist = computed(() => {
  if (activeTab.value === 'all') return watchlist.value;
  return watchlist.value.filter(item => item.type === activeTab.value.slice(0, -1));
});

onMounted(async () => {
  const watchlistData = await getWatchlist(1);

  if (watchlistData.length > 0) {
    const watchlistItems = await Promise.all(watchlistData.map(item => getVideo(item)));
    watchlist.value = watchlistItems;
  }
});
</script>
