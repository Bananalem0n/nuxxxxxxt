  <template>
    <nav
      class="hidden sm:flex flex-row items-center justify-between sm:px-12 md:px-24 lg:px-32 py-4 bg-gunmetal dark:bg-ultraviolet fixed w-screen  "
    >
      <NuxtLink to="/" class="logo flex justify-center items-center gap-5">
        <img
          class="rounded-lg max-w-12"
          :src="useStrapiMedia(profileLogo?.image.data.attributes.url) ?? ''"
          :alt="profileLogo?.image?.data?.attributes?.alternativeText || ''"
          srcset=""
        />
        <span class="text-background text-2xl font-josefin font-semibold subpixel-antialiased tracking-wider mt-auto">{{ profileLogo?.title }}</span>
      </NuxtLink>
      <div class="justify-between gap-3">
        <NuxtLink
          class="mx-4 text-background font-josefin font-normal tracking-wide hover:text-platinum"
          v-for="item in navlink"
          :to="item?.links || '/'"
          :key="item?.id"
          :class="{ 'underline-offset': isActive(item?.links) }"
        >
          {{ item?.text }}
        </NuxtLink>
      </div>
    </nav>
  </template>

  <script setup lang="ts">
  import { ref, onBeforeMount, reactive } from 'vue'
  import { useRoute } from 'vue-router'

  const ql = useStrapiGraphQL()

  const profileLogo = ref<Navbar | null>(null)
  const navlink = reactive<NavLinks[]>([])

  onBeforeMount(async () => {
    try {
      const { data }: any = await ql(qlNavbar)
      const { navbar, links } = data?.global.data.attributes
      profileLogo.value = navbar
      navlink.length = 0 // Clear existing data before updating
      navlink.push(...links)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  })

  const isActive = (path: string) => {
    return useRoute().path === path
  }

  </script>

  <style scoped>
  .underline-offset {
    position: relative;
  }

  .underline-offset::after {
    content: '';
    position: absolute;
    width: calc(100% - 10px); /* Adjust the offset as needed */
    height: 2px; /* Adjust the thickness of the underline as needed */
    background-color: #e5e5e5; /* Adjust the color of the underline as needed */
    bottom: -8px; /* Adjust the distance from the text as needed */
    left: 5px; /* Adjust the offset from the text as needed */
  }
  </style>
