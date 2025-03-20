<template>
  <footer class="bg-black py-8 mt-16 bottom-0 relative w-full">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 class="text-xl font-bold text-blue-500 mb-4">sWatch</h2>
          <p class="text-gray-400 max-w-md">A video streaming platform project built with Nuxt.js for learning purposes.</p>
        </div>
          
        <div>
          <h3 class="text-lg font-bold mb-4">Navigation</h3>
          <ul class="space-y-2 text-gray-400">
            <li><NuxtLink to="/" class="hover:text-white transition">Home</NuxtLink></li>
            <li><NuxtLink to="/browse" class="hover:text-white transition">Browse</NuxtLink></li>
            <li><NuxtLink to="/movies" class="hover:text-white transition">Movies</NuxtLink></li>
            <li><NuxtLink to="/series" class="hover:text-white transition">TV Series</NuxtLink></li>
          </ul>
        </div>
          
        <div>
          <h3 class="text-lg font-bold mb-4">Account</h3>
          <ul class="space-y-2 text-gray-400">
            <li><NuxtLink to="/profile" class="hover:text-white transition disabled-button">Profile</NuxtLink></li>
            <li><NuxtLink to="/watchlist" class="hover:text-white transition disabled-button">Watchlist</NuxtLink></li>
            <li><NuxtLink to="/settings" class="hover:text-white transition disabled-button">Settings</NuxtLink></li>
            <li><NuxtLink to="/help" class="hover:text-white transition">Help Center</NuxtLink></li>
          </ul>
        </div>
      </div>
        
      <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>© {{ new Date().getFullYear() }} sWatch. All rights reserved.</p>
        <div class="mt-4 text-sm">
          <NuxtLink to="/privacy" class="text-gray-400 hover:text-white mx-2 transition">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="text-gray-400 hover:text-white mx-2 transition">Terms of Service</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
