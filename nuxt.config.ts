export default defineNuxtConfig({
  ssr: true,
  typescript: { strict: true },
  // Nitro compatibility date — keeps behavior stable across Nitro releases
  nitro: {
    compatibilityDate: '2025-12-05',
  },
});
