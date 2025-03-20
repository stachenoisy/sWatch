<template>
  <div>
    <div v-if="loading" class="flex justify-center items-center h-screen">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>

    <div v-else class="container mx-auto py-10 px-4">
      <h1 class="text-3xl font-bold mb-6">Settings</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="md:col-span-1">
          <div class="bg-gray-800 p-4 rounded-lg">
            <nav class="space-y-2">
              <a href="#account" class="block p-2 rounded hover:bg-gray-700">Account</a>
              <a href="#preferences" class="block p-2 rounded hover:bg-gray-700">Preferences</a>
              <a href="#playback" class="block p-2 rounded hover:bg-gray-700">Playback</a>
              <a href="#notifications" class="block p-2 rounded hover:bg-gray-700">Notifications</a>
              <a href="#privacy" class="block p-2 rounded hover:bg-gray-700">Privacy</a>
            </nav>
          </div>
        </div>
        
        <div class="md:col-span-2">
          <section id="account" class="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 class="text-2xl font-bold mb-4">Account Settings</h2>
            <div class="space-y-4">
              <div>
                <label class="block mb-1">Email</label>
                <input type="email" class="w-full p-2 bg-gray-700 rounded" :value="profile.email">
              </div>
              <div>
                <label class="block mb-1">Password</label>
                <button class="bg-blue-600 px-4 py-2 rounded">Change Password</button>
              </div>
            </div>
          </section>
          
          <section id="preferences" class="bg-gray-800 p-6 rounded-lg">
            <h2 class="text-2xl font-bold mb-4">Preferences</h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <input type="checkbox" id="darkMode" class="mr-2">
                <label for="darkMode">Dark Mode</label>
              </div>
              <div>
                <label class="block mb-1">Language</label>
                <select class="w-full p-2 bg-gray-700 rounded">
                  <option v-for="lang in languageSelector" :selected="lang.selected" :value="lang.value">{{ lang.label }}</option>
                </select>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getProfile } from '~/composables/bridge';

const profile = ref({});
const loading = ref(true);

const languageSelector = computed(() => {
  const languages = [ 
    { value : 'en', label: 'English' },
    { value : 'tr', label: 'Turkish' },
    { value : 'es', label: 'Spanish' }
  ];

  languages.forEach(lang => {
    lang.selected = profile.value.settings.language === lang.value;
  });

  return languages
})

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
