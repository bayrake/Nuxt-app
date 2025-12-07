export default defineNuxtConfig({
  ssr: true,
  typescript: { strict: true },
  // Nitro compatibility date — keeps behavior stable across Nitro releases
  nitro: {
    compatibilityDate: '2025-12-05',
  },
  // Enable Pinia module for Nuxt
  modules: ['@pinia/nuxt'],
  // Global CSS (Tailwind will be imported here)
  css: ['~/assets/css/tailwind.css'],
  runtimeConfig: {
    public: {
      // Base URL for posts API: default to local server route (/api)
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
    },
  },
});
