<template>
  <RouterView :categories="categories" :areas="areas" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchCategories, fetchAreas, type Category, type Area } from '@/api/index'
const categories = ref<Category[]>([])
const areas = ref<Area[]>([])

onMounted(async () => {
  categories.value = await fetchCategories()
  areas.value = await fetchAreas()

  console.log('Categories loaded in App.vue:', categories.value)
  console.log('Areas loaded in App.vue:', areas.value)
})
</script>
