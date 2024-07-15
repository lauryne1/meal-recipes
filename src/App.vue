<template>
  <RouterView :categories="categories" :areas="areas" />
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useCategoryStore } from './stores/useDataStore.ts'
import { useAreaStore } from './stores/useDataStore.ts'

const categoryStore = useCategoryStore()
const areaStore = useAreaStore()

onMounted(async () => {
  await categoryStore.loadCategories()
  await areaStore.loadAreas()
})

const categories = computed(() => categoryStore.categories)
const areas = computed(() => areaStore.areas)
</script>
