<template>
  <div class="relative h-[70vh] overflow-hidden">
    <img :src="featured.backdropImage" :alt="featured.title" class="w-full h-full object-cover" />
    
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center px-10 md:px-20">
      <h1 class="text-3xl md:text-5xl font-bold mb-4">{{ featured.title }}</h1>
      <div class="flex items-center text-sm mb-4">
        <span>{{ featured.year }}</span>
        <span class="mx-2">•</span>
        <span>{{ featured.duration }}</span>
        <span class="mx-2">•</span>
        <span>{{ featured.rating }}</span>
      </div>
      
      <p class="max-w-md mb-6">{{ featured.description }}</p>
      
      <div class="flex space-x-4">
        <NuxtLink :to="`/video/${featured.id}`" class="btn btn-primary flex items-center">
          <MdiIcon class="mr-2" icon="mdiPlay"/> Play
        </NuxtLink>
        <button class="btn bg-gray-700 hover:bg-gray-600 flex items-center">
          <MdiIcon class="mr-2" icon="mdiPlus"/> My List
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  featured: {
    type: Object,
    required: true
  }
});
</script>
