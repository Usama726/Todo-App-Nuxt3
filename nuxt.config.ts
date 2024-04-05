// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt',],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
   
  },
 
})
