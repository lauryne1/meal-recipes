<template>
  <div class="px-80">
    <DataView :value="filteredProducts" :layout="layout" :rows="limit">
      <template #header>
        <div class="flex justify-between">
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="searchQuery" placeholder="Search" />
          </IconField>

          <div class="flex gap-3">
            <Select
              v-model="selectedCategory"
              :options="categoryStore.categories"
              optionLabel="label"
              placeholder="Sort By Category"
            />
            <Select
              v-model="selectedArea"
              :options="areaStore.areas"
              optionLabel="label"
              placeholder="Sort By Area"
            />
          </div>
        </div>
      </template>

      <template #grid="slotProps">
        <div class="grid grid-cols-12 gap-4">
          <div
            v-for="(item, index) in slotProps.items"
            :key="index"
            class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-6 p-2 cursor-hand"
            @click="onMealClick"
          >
            <div
              class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col"
            >
              <div class="bg-surface-50 flex justify-center rounded p-4">
                <div class="relative mx-auto">
                  <img
                    class="rounded w-full"
                    :src="item.thumbnail"
                    :alt="item.name"
                    style="max-width: 300px"
                  />
                </div>
              </div>
              <div class="pt-6">
                <div class="flex flex-row justify-between items-start gap-2">
                  <div>
                    <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">
                      {{ item.area.label }}
                    </span>
                    <div class="text-lg font-medium mt-1">{{ item.name }}</div>
                  </div>

                  <span class="text-sm font-medium text-green-500">{{ item.category.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
    <Paginator
      :rows="limit"
      :totalRecords="totalRecords"
      :rowsPerPageOptions="[10, 20, 30]"
      @page="onPageChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import DataView from 'primevue/dataview'
import Select from 'primevue/select'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Paginator from 'primevue/paginator'
import { useRouter } from 'vue-router'
import { useAreaStore, useCategoryStore } from '../stores'
import debounce from 'lodash.debounce'
import { searchMeals, type Meal } from '../api/index'

const router = useRouter()
const categoryStore = useCategoryStore()
const areaStore = useAreaStore()

const products = ref<Meal[]>([])
const searchQuery = ref('')
const filteredProducts = ref<Meal[]>([])
const selectedCategory = ref<number | undefined>(undefined)
const selectedArea = ref<number | undefined>(undefined)
const limit = ref(10) // Nombre d'éléments par page
const offset = ref(0) // Offset initial à 0
const totalRecords = ref(0) // Nombre total d'éléments

const updateFilteredProducts = debounce(async () => {
  const { items, count } = await searchMeals(
    searchQuery.value,
    selectedCategory.value,
    selectedArea.value,
    limit.value,
    offset.value
  )
  console.log('Fetched meals:', items)
  filteredProducts.value = items
  totalRecords.value = count
}, 500)

watch([searchQuery, selectedCategory, selectedArea, limit], () => {
  // Réinitialiser l'offset lorsque les filtres changent
  offset.value = 0
  updateFilteredProducts()
})

const layout = ref('grid')

const onMealClick = () => {
  router.push('/detail')
}

const onPageChange = (event: any) => {
  // Calculer le nouvel offset basé sur la page sélectionnée
  offset.value = event.page * event.rows
  limit.value = event.rows
  updateFilteredProducts()
}

// Initialiser les produits filtrés lors du montage
onMounted(() => {
  updateFilteredProducts()
})
</script>
