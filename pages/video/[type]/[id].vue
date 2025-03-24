<template>
  <div v-if="loading" class="flex justify-center items-center h-screen">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>

  <div v-else>
    <!-- Video Player -->
    <div class="aspect-w-16 aspect-h-9 bg-black">
      <div class="relative">
        <!-- <video
          ref="videoPlayer"
          class="w-full h-full"
          controls
          :poster="(video.backdrop_path == null ? 'https://placehold.co/1920x1080' : 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces' + video.backdrop_path)"
        >
          <source :src="video.video == false ? 'https://www.sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4' : video.video" type="video/mp4" />
          Your browser does not support the video tag.
        </video> -->
        <ScriptYouTubePlayer :video-id="video.videoid ?? 'cHHLHGNpCSA'" :player-options="{ host: 'https://www.youtube.com' }" />
      </div>
    </div>
    
    <!-- Video Information -->
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row md:justify-between md:items-start">
        <div class="md:w-2/3">
          <h1 class="text-3xl font-bold mb-2">{{ videoType == 'tv' ? video.name : video.title }}</h1>
          
          <div class="flex items-center text-sm mb-4">
            <span>{{ videoType == 'tv' ? video.first_air_date : video.release_date }}</span>
            <span class="mx-2">•</span>
            <span>{{ video.vote_average.toFixed(1) }}</span>
            <span class="mx-2">•</span>
            <span>{{ videoType == 'tv' ? 'Total Length ' + video.number_of_seasons + ' Season ' + video.number_of_episodes + ' Episode' : (video.runtime + ' min') }}</span>
          </div>
          
          <p class="text-gray-300 mb-6">{{ video.overview }}</p>
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
              <p><span class="text-gray-400">Productor:</span> {{ video.production_companies.map((company => company.name)).join(', ') }}</p>
              <p><span class="text-gray-400">Genres:</span> {{ video.genres.map((genre => genre.name)).join(', ') }}</p>
              <p><span class="text-gray-400">Languages:</span> {{ video.spoken_languages.map((lang => lang.name)).join(', ') }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Similar Titles -->
      <!-- <div class="mt-12">
        <h2 class="text-2xl font-bold mb-4">Similar Titles</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <VideoCard v-for="item in similarVideos" :key="item.id" :video="item" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const videoId = route.params.id;
const videoType = route.params.type;

const video = ref({});
const loading = ref(true);

onMounted(async () => {
  try {
    // Getting video data
    video.value = await getVideo(videoId, videoType);
  } catch (error) {
    console.error('Failed to load profile:', error);
  } finally {
    loading.value = false;
  }
});
</script>
