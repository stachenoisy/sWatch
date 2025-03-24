<template>
  <nav class="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-blue-500 font-bold text-xl mr-8">sWatch</NuxtLink>
          <div class="hidden md:flex space-x-6">
            <NuxtLink to="/browse" :class="{ 'text-white drop-shadow-[5px_5px_rgba(255,255,255,0.03)]': useRoute().name == 'browse' }" class="text-gray-300 hover:text-white transition">Browse</NuxtLink>
            <NuxtLink to="/movies" :class="{ 'text-white drop-shadow-[5px_5px_rgba(255,255,255,0.03)]': useRoute().name == 'movies' }" class="text-gray-300 hover:text-white transition">Movies</NuxtLink>
            <NuxtLink to="/series" :class="{ 'text-white drop-shadow-[5px_5px_rgba(255,255,255,0.03)]': useRoute().name == 'series' }" class="text-gray-300 hover:text-white transition">TV Series</NuxtLink>
          </div>
        </div>
        
        <div class="flex items-center space-x-4">
          <div class="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              class="bg-gray-800 text-white px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
          </div>
          <NuxtLink to="/profile" class="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
            <span class="sr-only">Profile</span>
            <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <span class="font-bold">U</span>
            </div>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Mobile menu (hidden by default) -->
      <div class="md:hidden mt-2 pb-2">
        <div class="flex flex-col space-y-2">
          <NuxtLink to="/browse" class="text-gray-300 hover:text-white py-2">Browse</NuxtLink>
          <NuxtLink to="/movies" class="text-gray-300 hover:text-white py-2">Movies</NuxtLink>
          <NuxtLink to="/series" class="text-gray-300 hover:text-white py-2">TV Series</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
