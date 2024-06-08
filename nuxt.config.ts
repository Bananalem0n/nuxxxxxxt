// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxtjs/strapi'],

  // primevue: {
  //   usePrimeVue: true,
  //   options: {
  //     unstyled: true,
  //     ripple: true,
  //     inputStyle: 'filled',
  //   },
  //   cssLayerOrder: 'tailwind-base, tailwind-utilities' ,
  //   components: {
  //     prefix: '', 
  //     include: '*',
  //   },
  //   directives: {},
  //   composables: {},
  // },

  tailwindcss: {
    editorSupport: true,
  },
  
  css:[
    'assets/main.css',
  ],

  image: {
    format: ['jpg', 'png', 'gif', 'jpeg', 'webp', 'avif'],
    domains: ['nuxtjs.org', 'storage.googleapis.com'],
    strapi: {}
  },

  strapi: {
    url: process.env.STRAPI_URL ?? 'https://strapi-portofolio-345whfpqfa-et.a.run.app',
    cookieName: 'strapi_jwt'
  },

})
