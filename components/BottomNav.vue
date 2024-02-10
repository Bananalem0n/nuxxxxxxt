<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-gray-800 pt-5 px-5 pb-3 sm:hidden">
    <div class="container mx-auto flex justify-between px-6">
      <NuxtLink
        v-for="link in links"
        :to="link.path"
        :key="link.id"
        @click="updateActiveLink(link.path)"
        class="flex flex-col items-center"
      >
        <Icon :name="link.icon" :class="getIconClasses(link)" class="mb-1" />
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const links = ref([
  { id: 1, icon: 'ic:round-add-home', label: 'Home', path: '/' },
  { id: 2, icon: 'ic:round-work', label: 'Project', path: '/projects' },
  { id: 3, icon: 'uis:web-grid', label: 'Blog', path: '/blog' },
  { id: 4, icon: 'bxs:contact', label: 'Contact', path: '/contact' },
])

const isActive = (path) => {
  return useRoute().path === path
}

const updateActiveLink = (path) => {
  activeLink.value = path
}

const getIconClasses = (link) => {
  return {
    'fill-current': true,
    'text-platinum': isActive(link.path),
    'text-gray-500': !isActive(link.path),
  }
}
</script>
