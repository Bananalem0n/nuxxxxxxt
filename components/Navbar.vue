<template>
  <nav
    class="hidden sm:flex flex-row items-center justify-between sm:px-16 md:px-24 lg:px-32 py-4 bg-gunmetal dark:bg-ultraviolet"
  >
    <NuxtLink to="/" class="logo flex justify-center items-center gap-5">
      <img
        class="rounded-lg max-w-12"
        :src="profileLogo.imageUrl"
        :alt="profileLogo.logoText"
        srcset=""
      />
      <span class="text-background text-2xl font-medium">{{ profileLogo.logoText }}</span>
    </NuxtLink>
    <div class="justify-between gap-3">
      <NuxtLink
        class="mx-4 text-background font-medium hover:text-platinum"
        v-for="link in links"
        :to="link.path"
        :key="link.id"
        :class="{ 'underline-offset': isActive(link.path) }"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const profileLogo = ref({
  imageUrl: 'https://storage.googleapis.com/strapi-bananalemon/nata.png',
  logoText: 'Bananalemon',
})

const links = ref([
  { id: 1, label: 'Home', path: '/' },
  { id: 2, label: 'Project', path: '/projects' },
  { id: 3, label: 'Blog', path: '/blog' },
  { id: 4, label: 'Contact', path: '/contact' },
])

const isActive = (path: string) => {
  return useRoute().path === path
}

</script>

<style scoped>
.underline-offset {
  position: relative;
}

.underline-offset::after {
  content: '';
  position: absolute;
  width: calc(100% - 10px); /* Adjust the offset as needed */
  height: 2px; /* Adjust the thickness of the underline as needed */
  background-color: #e5e5e5; /* Adjust the color of the underline as needed */
  bottom: -5px; /* Adjust the distance from the text as needed */
  left: 5px; /* Adjust the offset from the text as needed */
}
</style>
