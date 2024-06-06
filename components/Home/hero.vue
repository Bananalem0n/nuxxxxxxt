<template>
  <section class="bg-gunmetal flex flex-col md:flex-row sm:p-16 md:p-16 pt-14 sm:pt-6 items-center h-screen md:justify-between ">
    <div class="sm:py-24 md:py-44 lg:pl-32 w-full md:w-1/2 md:flex flex-col justify-center">
      <!-- Hero Title -->
      <HomeHeroHeader :title="payload?.name" :subtitle="payload?.hello" />

      <div class="HeroDetail flex flex-row gap-[0.3rem] text-base sm:text-lg font-medium pt-6 sm:pt-5 justify-center md:justify-start">
        <span class="text-ultraviolet">{{ payload?.description }}</span>
      </div>  

      <!-- Hero Button -->
      <div class="space-x-4 font-medium mt-10 md:mt-7 button-group flex justify-center md:justify-start items-center align-middle">
        <NuxtLink v-for="btn in payload?.button" :key="btn.text" :to="btn.links">
          <Button :class="[buttonVariantClass(btn.variant)]">{{btn.text}}</Button>
        </NuxtLink>
      </div>
    </div>

    <!-- Image Hero -->
    <NuxtImg
      v-if="payload?.image.data.attributes.url || payload?.image.data.attributes.alternativeText"
      :src="useStrapiMedia(payload?.image.data.attributes.url)"
      :alt="payload?.image.data.attributes.alternativeText"
      class="py-32 sm:py-16 px-10 lg:p-0 sm:max-w-full md:max-w-md lg:mr-44 lg:max-w-lg w-full object-cover"
      fit="content"
    />
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps(['payload']) as { payload: Hero }

const buttonVariantClass = (variant: keyof typeof ButtonVariant) => {
  return ButtonVariant[variant]
}
</script>
