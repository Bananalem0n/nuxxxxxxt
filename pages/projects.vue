<template>
  <div
    class="w-screen sm bg-background dark:bg-gunmetal max-h-fit min-h-screen sm:pt-20 px-8 sm:px-20 pb-24 sm:pb-0 md:px-16 lg:px-48"
  >
    <div id="heading" class="flex flex-col flex-wrap py-6 gap-y-0">
      <h3 class="tracking-wider text-2xl font-josefin font-normal">Checkout</h3>
      <h1 class="text-4xl font-bold tracking-wide font-ubuntu antialiased">My Project's</h1>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 sm:justify-evenly">
      <div
        class="card w-full overflow-hidden flex flex-col bg-slate-600 rounded-lg border-slate-700 border-[0.1px] shadow-xl"
        v-for="project in projects"
        key="project.id"
      >
        <NuxtLink 
        :to="'/project/' + project.attributes.slug">
          <NuxtImg
            class="w-full h-36 object-cover"
            :src="useStrapiMedia(project.attributes.cover.image.data.attributes.url)"
            :alt="project.attributes.cover.image.data.attributes.alternativeText"
          />
          <div class="flex flex-row justify-between px-3 py-3 text-background antialiased">
            <p class="font-josefin tracking-normal overflow-x-hidden">
              {{ project.attributes.cover.text }}
            </p>
            <UBadge color="green" variant="subtle" size="sm">{{
              project.attributes.cover.project_category.data.attributes.category
            }}</UBadge>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const ql = useStrapiGraphQL()
const projects = ref<ProjectOverview[]>([])

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
onBeforeMount(async () => {
  try {
    const { data }: any = await ql(query)
    projects.value = data?.projects?.data || []
  } catch (error) {
    console.error('Error fetching project data:', error)
  }
})
</script>
