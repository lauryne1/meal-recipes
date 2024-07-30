<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCategoryStore, useAreaStore } from '@/stores/index'

const categoryStore = useCategoryStore()
const areaStore = useAreaStore()

onMounted(async () => {
  await categoryStore.loadCategories()
  await areaStore.loadAreas()
  console.log('!@#$%', categoryStore.categories)
  console.log(')(*&&&^)', areaStore.areas)
})
</script>

<style></style>
