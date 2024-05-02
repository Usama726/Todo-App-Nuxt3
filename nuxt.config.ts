// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt',],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
   
  },
      app: {
        buildAssetsDir: '/something/',
        head: {
            htmlAttrs: { dir: 'ltr', lang: 'fa' },
            link: [{ rel: 'icon', type: 'image/png', href: "/images/TodoIcon.svg" }]
        },
    },
 
})
