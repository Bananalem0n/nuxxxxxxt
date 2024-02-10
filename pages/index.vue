<template>
  <HomeHero :payload="heroData" />
  <!-- <HomeSection :payload="sectionData" /> -->
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useStrapiGraphQL } from '#imports';
import { queryPage } from '#imports';
import { hero } from '~/composables/graphql';

const ql = useStrapiGraphQL();

const heroData = ref<Hero | null>(null);
const sectionData = ref<Section | null>(null);

// fetch data from strapi graphql with params of collection name, and components type
const query = await queryPage('home', [hero, section]); 

onBeforeMount(async () => {
  const { data }: any = await ql(query);
  const { components } = data?.home.data.attributes;
  heroData.value = components[0]
  sectionData.value = components[1]
});

</script>
  

