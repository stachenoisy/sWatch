<template>
  <div v-if="loading" class="flex justify-center items-center h-screen">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>

  <div v-else>
    <!-- Video Player -->
    <div class="aspect-w-16 aspect-h-9 bg-black">
      <div class="relative">
        <video
          ref="videoPlayer"
          class="w-full h-full"
          controls
          :poster="video.thumbnail"
        >
          <source :src="video.videoUrl" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    
    <!-- Video Information -->
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row md:justify-between md:items-start">
        <div class="md:w-2/3">
          <h1 class="text-3xl font-bold mb-2">{{ video.title }}</h1>
          
          <div class="flex items-center text-sm mb-4">
            <span>{{ video.year }}</span>
            <span class="mx-2">•</span>
            <span>{{ video.duration }}</span>
            <span class="mx-2">•</span>
            <span>{{ video.rating }}</span>
          </div>
          
          <p class="text-gray-300 mb-6">{{ video.description }}</p>
          
          <div class="mb-6">
            <h2 class="text-xl font-bold mb-2">Cast & Crew</h2>
            <div class="flex flex-wrap gap-4">
              <div v-for="person in video.cast" :key="person.id" class="text-sm">
                <p class="font-bold">{{ person.name }}</p>
                <p class="text-gray-400">{{ person.role }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="md:w-1/3 mt-6 md:mt-0 md:pl-8">
          <div class="flex space-x-4 mb-6">
            <button class="btn bg-gray-700 hover:bg-gray-600 flex items-center">
              <MdiIcon class="mr-2" icon="mdiPlus"/> My List
            </button>
            <button class="btn bg-gray-700 hover:bg-gray-600 flex items-center">
              <MdiIcon class="mr-2" icon="mdiThumbUp"/> Rate
            </button>
          </div>
          
          <div>
            <h2 class="text-xl font-bold mb-2">Details</h2>
            <div class="text-sm">
              <p><span class="text-gray-400">Director:</span> {{ video.director }}</p>
              <p><span class="text-gray-400">Genres:</span> {{ video.genres.join(', ') }}</p>
              <p><span class="text-gray-400">Languages:</span> {{ video.languages.join(', ') }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Similar Titles -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold mb-4">Similar Titles</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="item in similarVideos" :key="item.id" :video="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getVideo } from '~/composables/bridge';

const route = useRoute();
const videoId = route.params.id;

const video = ref({});
const loading = ref(true);

const similarVideos = [
  { id: '6', title: 'Edge of Tomorrow', thumbnail: 'https://placehold.co/400x225', year: '2014', duration: '1h 53m' },
  { id: '7', title: 'The Adam Project', thumbnail: 'https://placehold.co/400x225', year: '2022', duration: '1h 46m' },
  { id: '8', title: 'Tenet', thumbnail: 'https://placehold.co/400x225', year: '2020', duration: '2h 30m' },
  { id: '9', title: 'Interstellar', thumbnail: 'https://placehold.co/400x225', year: '2014', duration: '2h 49m' },
  { id: '10', title: 'Inception', thumbnail: 'https://placehold.co/400x225', year: '2010', duration: '2h 28m' }
];

onMounted(async () => {
  try {
    video.value = await getVideo(videoId);
  } catch (error) {
    console.error('Failed to load profile:', error);
  } finally {
    loading.value = false;
  }
});
</script>
