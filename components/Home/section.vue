<template>
  <section
    class="justify-center md:justify-start flex flex-col-reverse lg:flex-row bg-gunmetal p-4 md:p-8 lg:p-16 items-center gap-12"
  >
    <!-- Image Section -->
    <div class="w-full lg:w-5/12 lg:p-16 xl:p-24">
      <NuxtImg
        v-if="payload?.image.data.attributes.url || payload?.image.data.attributes.alternativeText"
        :src="useStrapiMedia(payload?.image.data.attributes.url)"
        :alt="payload?.image.data.attributes.alternativeText"
        class="hidden sm:block py-44 sm:py-16 sm:px-32 lg:p-0 lg:mr-12 xl:mr-36 sm:max-w-full h-auto md:max-w-md lg:max-w-lg w-full object-contain"
      />
    </div>

    <!-- Text Section -->
    <div
      class="flex flex-col gap-3 text-base sm:text-lg font-medium pt-6 sm:pt-5 justify-center md:justify-start"
    >
      <!-- Title -->
      <div class="flex justify-center md:justify-start text-center md:text-start">
        <span class="text-lg md:text-xl lg:text-2xl font-medium text-[#BBB]">
          {{ payload?.title }}
        </span>
      </div>

      <!-- Details -->
      <div class="flex justify-center md:justify-start text-center md:text-start">
        <span class="text-xl md:text-3xl lg:text-4xl font-semibold text-platinum tracking-tight">
          {{ payload?.details }}
        </span>
      </div>

      <!-- Icon Group Title -->
      <div class="flex justify-center md:justify-start">
        <span class="text-xl md:text-2xl font-semibold text-[#BBB] tracking-normal lg:pt-8">
          {{ payload?.iconGroup.title }}
        </span>
      </div>

      <!-- Icon Group -->
      <div
        id="iconGroup"
        class="flex flex-wrap gap-4 lg:gap-6 pt-3 flex-row justify-center md:justify-start"
      >
        <NuxtImg
          v-for="icon in payload?.iconGroup.image.data"
          :key="icon.attributes.url"
          :src="useStrapiMedia(icon.attributes.url)"
          class="w-12 h-12 max-w-full"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps(['payload']) as { payload: Section }
</script>
