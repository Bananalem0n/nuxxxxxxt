<template>
    <h1 class="h-screen w-100 text-white pt-32">{{ route.params.id }}</h1>
</template>

<script setup>
const route = useRoute()
console.log(route.params) // { id: '123' }
</script>
