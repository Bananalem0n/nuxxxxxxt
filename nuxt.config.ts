// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue', 'nuxt-icon'],
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
})
