<template>
  <div
    class="w-screen sm bg-gunmetal max-h-fit min-h-screen sm:pt-28 px-8 sm:px-12 pb-24 sm:pb-0 md:px-14 lg:px-48"
  >
    <div id="heading" class="flex flex-col flex-wrap py-6 gap-y-0">
      <h3 class="tracking-wider text-2xl sm:text-3xl font-josefin font-normal text-white">Checkout</h3>
      <h1 class="text-4xl sm:text-5xl font-bold tracking-wide font-ubuntu antialiased text-white">My Project's</h1>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-2 sm:pt-8 sm:justify-evenly">
      <div
        class="card w-full overflow-hidden flex flex-col bg-slate-600 rounded-lg border-slate-700 border-[0.1px] shadow-md zoom-in"
        v-for="project in projects"
        :key="project.id"
      >
        <NuxtLink :to="'/project/' + project.attributes.slug">
          <NuxtImg
            class="w-full h-36 object-cover"
            :src="useStrapiMedia(project.attributes.cover.image.data.attributes.url)"
            :alt="project.attributes.cover.image.data.attributes.alternativeText"
          />
          <div class="flex flex-row justify-between px-3 py-3 text-white antialiased gap-3">
            <p class="font-josefin tracking-normal pr-1 truncate">
              {{ project.attributes.cover.text }}
            </p>
            <UBadge color="green" variant="subtle" size="sm">
              {{ project.attributes.cover.project_category.data.attributes.category }}
            </UBadge>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  overflow: hidden;
}

.zoom-in {
  transition: transform 0.2s ease-in-out;
}

.zoom-in:hover {
  transform: scale(1.05); /* 20% zoom on hover */
}
</style>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

const ql = useStrapiGraphQL()
const projects = ref<ProjectOverview[]>([])

onBeforeMount(async () => {
  try {
    const { data }: any = await ql(query)
    projects.value = data?.projects?.data || []
  } catch (error) {
    console.error('Error fetching project data:', error)
  }
})

// GraphQL Query
const query = `
  {
    projects {
      data {
        id
        attributes {
          title
          slug
          cover {
            text
            image {
              data {
                attributes {
                  url
                }
              }
            }
            project_category {
              data {
                attributes {
                  category
                }
              }
            }
          }
        }
      }
    }
  }
`
</script>
