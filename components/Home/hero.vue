<template>
  <section class="bg-background dark:bg-gunmetal flex flex-col md:flex-row h-fit sm:p-16 md:p-24 pt-14 sm:pt-1">
    <div class="sm:py-24 md:py-44 lg:pl-32 w-full md:w-1/2 md:flex flex-col justify-center h-full">
      <HomeHeroHeader>Ukasyah Nata</HomeHeroHeader>

      <div
        class="HeroDetail flex flex-row gap-[0.3rem] text-base sm:text-lg font-medium pt-6 sm:pt-5 justify-center md:justify-start">
        <span class="text-ultraviolet">Backend Developer and Cloud Engineer</span>
      </div>

      <HomeHeroButton
        class="space-x-4 font-medium mt-10 md:mt-7 button-group flex justify-center md:justify-start items-center align-middle">
        <NuxtLink to="/projects">
          <Button class="bg-ultraviolet hover:bg-purp w-28 h-12 text-background rounded-lg" label="Project" />
        </NuxtLink>
        <NuxtLink to="/contact">
          <Button class="hover:bg-[#EFEFEF] border-2 border-ultraviolet w-28 h-12 text-purp rounded-lg" label="Contact" />
        </NuxtLink>
      </HomeHeroButton>

    </div>

    <HomeHeroImage />

  </section>
</template>

<script setup lang="ts">

  // const strapiUrl = process.env.STRAPI_URL || ''
  // const strapiToken = process.env.STRAPI_API_TOKEN || ''
  // const headers = {
  //   Authorization: `Bearer ${strapiToken}`,
  //   'Content-Type': 'application/json',
  // }

  // const data = await $fetch(`${strapiUrl}/home?populate[0]=hero&populate[1]=hero.buttonGroup`, {
  //   method: 'GET',
  //   headers
  // })

  const { find, findOne, create, update, delete: remove } = useStrapi()

  const response = await find('home')
  console.log(response)

  // const {data}: any = await $fetch('http://localhost:4000/api/home?populate[0]=hero&populate[1]=hero.buttonGroup')

  // console.log(data.attributes)

</script>
