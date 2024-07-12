import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
interface Category {
  id: number
  label: string
}

interface Area {
  id: number
  label: string
}

export const useStore = defineStore('main', {
  state: () => ({
    categories: [] as Category[],
    areas: [] as Area[]
  }),
  actions: {
    async fetchCategories() {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        this.categories = data.meals.map((el: { strCategory: string }, index: number) => ({
          id: index + 1,
          label: el.strCategory
        }))
      } catch (error) {
        console.error(error)
      }
    },
    async fetchAreas() {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        this.areas = data.meals.map((el: { strArea: string }, index: number) => ({
          id: index + 1,
          label: el.strArea
        }))
      } catch (error) {
        console.error(error)
      }
    }
  }
})
