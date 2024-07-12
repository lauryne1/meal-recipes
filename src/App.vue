<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from './stores/counter'

const store = useStore()

onMounted(async () => {
  await store.fetchCategories()
  await store.fetchAreas()
})
</script>
