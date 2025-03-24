// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens

export default defineNuxtConfig({
  compatibilityDate: '2025-03-20',
  devtools: { enabled: true },
  runtimeConfig: {
    baseurl: 'http://localhost:3000',
    apiUrl: 'http://localhost:8080',
    apiToken: '2285004068', // Dummy token
    public: {
      privacyUpdateDate: new Date('2025-03-19').toISOString(),
      termsUpdateDate: new Date('2025-03-20').toISOString()
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'sWatch - Streaming Platform',
      meta: [
        { name: 'description', content: 'A video streaming platform built with Nuxt.js' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-mdi',
    '@formkit/auto-animate',
    '@nuxt/fonts',
    '@nuxt/scripts',
  ],
  css: ['~/assets/css/main.css'],
})