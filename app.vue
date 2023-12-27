<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<script setup>
watchEffect(() => {
  const path = useRoute().path;
  const cleanedPath = path === '/' ? 'Home' : path.slice(1);

  useHead({
    title: `${cleanedPath}`,
    ogTitle: `${cleanedPath}`,
    htmlAttrs: {
      lang: 'en',
    },
  });
});

useHead({
  description: 'Bananalemon Portofolio Website to Display My Bio',
  ogDescription: 'Bananalemon Portofolio Website to Display My Bio',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
