<template>
  <div class="w-full min-h-screen max-h-fit dark:bg-gunmetal bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-28 pt-20 sm:pt-28">
    <div id="breadcrumbs" class="hidden sm:block">
      <UBreadcrumb :links="getBreadcrumbLinks()" />
    </div>
    <h1 id="title" class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-ubuntu 2xl:pt-8 sm:pt-6">
      {{ projects?.attributes.title }}
    </h1>
    <section id="content" class="flex flex-col md:flex-row sm:pt-4 lg:pt-8 gap-4">
      <article id="content" class="w-full md:w-3/4 md:pr-4 lg:pr-8 xl:pr-12">
        <UCarousel
          v-slot="{ item }"
          :items="projects?.attributes.content.image.data"
          :ui="{ item: 'basis-full' }"
          class="rounded-xl overflow-hidden"
          arrows
          indicators
        >
          <img
            :src="useStrapiMedia(item.attributes.url)"
            class="bg-payne min-h-fit max-h-[20rem] sm:max-h-[25rem] md:max-h-[30rem] lg:max-h-[35rem] xl:max-h-[40rem] 2xl:max-h-[38rem] w-full object-cover shadow-lg"
          />
        </UCarousel>
      </article>
      <div id="info" class="w-full md:w-1/4 h-fit">
        <div
          class="zoom-in"
          v-for="data in projects?.attributes.content.projectLink"
          :key="data.id"
        >
          <NuxtLink :to="data.links">
            <div id="provider" class="w-full min-h-fit mb-5">
              <span class="flex flex-row bg-purp py-3 px-4 sm:px-6 md:px-7 rounded-md shadow-lg items-center">
                <Icon :name="data.icon" color="white" class="mr-2 sm:mr-3 md:mr-4 size-6 sm:size-7 md:size-8 lg:size-9 xl:size-10" />
                <div class="font-josefin text-sm sm:text-base md:text-lg lg:text-xl mt-auto mx-auto 2xl:pb-1">
                  {{ data.provider }}
                </div>
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.zoom-in {
  transition: transform 0.1s ease-out;
}

.zoom-in:hover {
  transform: scale(1.02); /* 20% zoom on hover */
}
</style>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

const route = useRoute()
const ql = useStrapiGraphQL()
const projects = ref<any | null>(null)

onBeforeMount(async () => {
  const { data }: any = await ql(query)
  projects.value = data?.projects?.data[0] || null
})

const query = `
{
  projects(filters: {slug: {eq:"${route.params.id}"}}) {
    data {
      attributes {
        slug
        title
        content {
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
          projectLink {
            id
            links
            provider
            icon
          }
          contributor {
            links
            name
            jobdesk
          }
        }
      }
    }
  }
}
`

const getBreadcrumbLinks = () => {
  if (projects.value) {
    return [{ label: 'Projects', to: '/projects' }, { label: projects.value.attributes.title }]
  }
  return []
}
</script>
