<template>
  <section
    class="bg-background dark:bg-gunmetal flex flex-col md:flex-row h-fit sm:p-16 md:p-16 pt-14 sm:pt-1 justify-between items-center"
  >
    <div class="sm:py-24 md:py-44 lg:pl-32 w-full md:w-1/2 md:flex flex-col justify-center">
      <HomeHeroHeader #subtitle>
        {{ payload?.hello }}
      </HomeHeroHeader>
      <HomeHeroHeader #title>
        {{ payload?.name }}
      </HomeHeroHeader>
      <div
        class="HeroDetail flex flex-row gap-[0.3rem] text-base sm:text-lg font-medium pt-6 sm:pt-5 justify-center md:justify-start"
      >
        <span class="text-ultraviolet">{{ payload?.description }}</span>
      </div>
      <div
        class="space-x-4 font-medium mt-10 md:mt-7 button-group flex justify-center md:justify-start items-center align-middle"
      >
        <NuxtLink v-for="btn in payload?.button" :key="btn.text" :to="btn.links">
          <Button :class="[buttonVariantClass(btn.variant)]" :label="btn.text" />
        </NuxtLink>
        <div class="card flex justify-content-center gap-6 md:gap-4 mt-12 md:mt-8"></div>
      </div>
    </div>

    <NuxtImg
      v-if="payload?.image.data.attributes.url || payload?.image.data.attributes.alternativeText"
      :src="useStrapiMedia(payload?.image.data.attributes.url)"
      :alt="payload?.image.data.attributes.alternativeText"
      class="py-52 sm:py-16 px-10 lg:p-0 lg:mr-12 xl:mr-36 sm:max-w-full h-auto md:max-w-md lg:max-w-lg w-full object-contain"
      fit="content"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

const props = defineProps(['title', 'slug','attributes'])

const ql = useStrapiGraphQL()

import { queryPage } from '#imports';
import { hero } from '~/composables/graphql';

const payload = ref<Hero | null>(null)

const buttonVariantClass = (variant: keyof typeof ButtonVariant) => {
  return ButtonVariant[variant]
}
const myDynamicQuery = await queryPage('home', hero);

onBeforeMount(async () => {
  const { data }: any = await ql(myDynamicQuery)
  console.log(data)
  const { components } = data?.home.data.attributes
  payload.value = components[0]
})
</script>
