// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      BASE_URL: process.env.API_URL,
      API_BASE_URL: process.env.API_URL + '/api',
      
    },
  },

  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
