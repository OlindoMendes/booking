
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", '@pinia/nuxt', '@nuxt/test-utils/module',],
  build: {
    hotMiddleware: {
      client: {
        overlay: false
      }
    }
  },
    compatibilityDate: "2024-08-08",

})