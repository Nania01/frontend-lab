export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Open Sans': [400, 700],
        Montserrat: true,
      }
    }],
    'vue-yandex-maps/nuxt',
  ],
  yandexMaps: {
    apikey: process.env.YANDEX_MAPS_API_KEY,
  },
  compatibilityDate: '2025-10-31',
  devtools: { enabled: true }
})
