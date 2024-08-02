<template>
  <div class="px-80">
    <DataView :value="filteredProducts" :layout="layout" :rows="5">
      <template #header>
        <div class="flex justify-between">
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="searchQuery" placeholder="Search" />
          </IconField>

          <div class="flex gap-3">
            <Select
              v-model="sortKey"
              :options="categoryStore.categories"
              optionLabel="label"
              placeholder="Sort By Category"
            />
            <Select
              v-model="sortKey"
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
                    :src="item.thumb"
                    :alt="item.name"
                    style="max-width: 300px"
                  />
                </div>
              </div>
              <div class="pt-6">
                <div class="flex flex-row justify-between items-start gap-2">
                  <div>
                    <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">
                      {{ item.area }}
                    </span>
                    <div class="text-lg font-medium mt-1">{{ item.name }}</div>
                  </div>

                  <span class="text-sm font-medium text-green-500">{{ item.category }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>

    <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import SelectButton from 'primevue/selectbutton'
import Tag from 'primevue/tag'
import DataView from 'primevue/dataview'
import Select from 'primevue/select'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
// import LoadingView from '@/components/LoadingView.vue'
import Paginator from 'primevue/paginator'
import Empty from '@/components/icons/Empty.vue'
import { useRouter } from 'vue-router'
import { useAreaStore, useCategoryStore } from '@/stores'
import debounce from 'lodash.debounce'
const router = useRouter()
import { searchMeals, type Meal } from '@/api/index'

const categoryStore = useCategoryStore()
const areaStore = useAreaStore()

const products = ref<Meal[]>([])
const searchQuery = ref('')
const filteredProducts = ref<Meal[]>(products.value)

const updateFilteredProducts = debounce(async () => {
  if (searchQuery.value.trim()) {
    const meals = await searchMeals(searchQuery.value)
    console.log('Fetched meals:', meals)
    filteredProducts.value = meals
  } else {
    filteredProducts.value = products.value
  }
}, 500)

watch(searchQuery, () => {
  console.log('Search query:', searchQuery.value)
  updateFilteredProducts()
})

const layout = ref('grid')
const layoutOptions = ref(['list', 'grid'])

const sortKey = ref('')

const onMealClick = () => {
  router.push('/detail')
}
</script>
