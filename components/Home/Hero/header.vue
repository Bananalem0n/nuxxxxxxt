<!-- Header.vue -->
<template>
      <span class="justify-center md:justify-start text-3xl sm:text-4xl font-medium flex tracking-wide text-platinum">
        {{ subtitle }}
      </span>
      <span class="justify-center align-middle md:justify-start text-5xl sm:text-6xl font-semibold flex tracking-wider text-platinum">
        {{ title }} 
      </span>
</template>

<script setup lang="ts">

  const {title, subtitle} = defineProps(['title','subtitle'])

</script>
