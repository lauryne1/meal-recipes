<template>
  <div class="w-full h-[100vh] flex justify-center items-center">
    <Card style="width: 25rem; overflow: hidden; height: fit-content">
      <template #header>
        <img :src="meal?.thumbnail" alt="meal image" />
      </template>
      <template #title>{{ meal?.name }}</template>
      <template #subtitle>{{ meal?.category.label }}</template>
      <template #content>
        <p class="m-0">
          <span v-if="meal?.ingredients?.length">
            <span v-for="(ingredient, index) in meal.ingredients" :key="index">
              {{ ingredient.label }}: {{ ingredient.measure }}
              <span v-if="index < meal.ingredients.length - 1">, </span>
            </span>
          </span>
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Back" severity="secondary" outlined class="w-full" @click="goBack" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Button from 'primevue/button'
import Card from 'primevue/card'
import { searchMeals, type Meal } from '../api/index'

const route = useRoute()
const router = useRouter()
const meal = ref<Meal | null>(null)

const fetchMeal = async (id: number) => {
  try {
    const { items } = await searchMeals('', undefined, undefined, 1, 0)
    meal.value = items.find(m => m.id === id) || null
  } catch (error) {
    console.error('(^%$$)', error)
  }
}

const goBack = () => {
  router.back()
}

onMounted(() => {
  const id = Number(route.params.id)
  fetchMeal(id)
})
</script>
