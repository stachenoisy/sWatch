<template>
  <div>
    <div v-if="loading" class="flex justify-center items-center h-screen">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    
    <div v-else class="container mx-auto py-10 px-4">
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Profile Sidebar -->
        <div class="md:w-1/3">
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="flex flex-col items-center">
              <div class="w-32 h-32 bg-gray-600 rounded-full mb-4 overflow-hidden">
                <img src="https://placehold.co/200x200" alt="Profile Picture" class="w-full h-full object-cover">
              </div>
              <h1 class="text-2xl font-bold">{{ profile.name }}</h1>
              <p class="text-gray-400 mb-4">Member since {{ calculatePastYears }}</p>
              <button class="w-full bg-blue-600 py-2 rounded" @click="navigateTo('/settings')">Edit Profile</button>
            </div>
            
            <div class="mt-6">
              <h3 class="text-lg font-semibold mb-2">Stats</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span>Movies Watched:</span>
                  <span>{{ profile.stats.watched.movies }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Series Completed:</span>
                  <span>{{ profile.stats.watched.series }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Total Watch Time:</span>
                  <span>{{ beautifulWatchTime }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Profile Content -->
        <div class="md:w-2/3">
          <section class="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 class="text-2xl font-bold mb-4">Recently Watched</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <VideoCard v-for="video in recentlyWatched" :key="video.id" :video="video" />
            </div>
          </section>
          
          <section class="bg-gray-800 p-6 rounded-lg">
            <h2 class="text-2xl font-bold mb-4">Favorite Genres</h2>
            <div class="flex flex-wrap gap-2">
              <span v-for="genre in profile.stats.favorites.genres" :key="genre" class="bg-gray-700 px-3 py-1 rounded-full">
                {{ genre }}
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const profile = ref({});
const loading = ref(true);

const calculatePastYears = computed(() => {
  if (!profile.value || !profile.value.joined) {
    return 0;
  }
  const joinedDate = new Date(profile.value.joined);
  const currentDate = new Date();
  return currentDate.getFullYear() - joinedDate.getFullYear();
});

const beautifulWatchTime = computed(() => {
  if (!profile.value?.stats?.watched?.total) {
    return '0 hours 0 minutes';
  }
  const baseValue = profile.value.stats.watched.total;
  const hours = Math.floor(baseValue / 60);
  const minutes = baseValue % 60;
  return `${hours} hours ${minutes} minutes`;
});

const recentlyWatched = ref([]);

onMounted(async () => {
  try {
    profile.value = await getProfile(1);
  } catch (error) {
    console.error('Failed to load profile:', error);
  } finally {
    loading.value = false;
  }
});
</script>
