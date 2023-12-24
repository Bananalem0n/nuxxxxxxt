// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-primevue', 'nuxt-icon', '@nuxtjs/strapi'],
  
  primevue: {
    usePrimeVue: true,
    options: {
      unstyled: true,
      ripple: true,
      inputStyle: 'filled',
    },
    cssLayerOrder: 'primevue, tailwind-base, tailwind-utilities' ,
    components: {
      prefix: '',
      include: '*',
    },
    directives: {},
    composables: {},
  },

  image: {
    format: ['jpg','png','gif','jpeg','webp','avif'],
    domains: ['nuxtjs.org', 'storage.googleapis.com'],
    strapi: {}
  },

  strapi: {
    url: 'http://localhost:4000'
  }
})
