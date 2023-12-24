<!-- HeroImage.vue -->
<template>
  <div class="w-full p-12 mt-24 md:mt-0 md:w-1/2 flex justify-center items-center md:p-8 lg:p-10 xl:p-28">
    <NuxtImg
      :src="imageSrc"
      class="max-w-full h-auto md:max-w-md lg:max-w-lg object-cover"
      fit="content"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const imageSrc = ref('https://storage.googleapis.com/strapi-bananalemon/undraw_programming_re_kg9v.svg');
</script>
