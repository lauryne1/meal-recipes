<template>
  <div class="px-80">
    <DataView :value="products" :layout="layout" :rows="5">
      <template #header>
        <div class="flex justify-between">
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="value1" placeholder="Search" />
          </IconField>

          <div class="flex gap-3">
            <Select
              v-model="sortKey"
              :options="store.categories"
              optionLabel="label"
              placeholder="Sort By Category"
              @change="onSortChange($event)"
            />
            <Select
              v-model="sortKey"
              :options="store.areas"
              optionLabel="label"
              placeholder="Sort By Area"
              @change="onSortChange($event)"
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
                    :src="`https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg`"
                    :alt="item.name"
                    style="max-width: 300px"
                  />
                </div>
              </div>
              <div class="pt-6">
                <div class="flex flex-row justify-between items-start gap-2">
                  <div>
                    <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{
                      item.category
                    }}</span>
                    <div class="text-lg font-medium mt-1">{{ item.name }}</div>
                  </div>

                  <Tag
                    :value="item.inventoryStatus"
                    :severity="getSeverity(item)"
                    style="left: 4px; top: 4px"
                  ></Tag>
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
import { ref } from 'vue'
import { useStore } from '@/stores/counter'
import Select from 'primevue/select'
import DataView from 'primevue/dataview'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Tag from 'primevue/tag'
import Paginator from 'primevue/paginator'
import Empty from '@/components/icons/Empty.vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const value1 = ref('')
const sortKey = ref(null)
const layout = ref('grid')
const products = ref([
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1001',
    code: 'nvklal433',
    name: 'Black Watch',
    description: 'Product Description',
    image: 'black-watch.jpg',
    price: 72,
    category: 'Accessories',
    quantity: 61,
    inventoryStatus: 'INSTOCK',
    rating: 4
  },
  {
    id: '1002',
    code: 'zz21cz3c1',
    name: 'Blue Band',
    description: 'Product Description',
    image: 'blue-band.jpg',
    price: 79,
    category: 'Fitness',
    quantity: 2,
    inventoryStatus: 'LOWSTOCK',
    rating: 3
  },
  {
    id: '1003',
    code: '244wgerg2',
    name: 'Blue T-Shirt',
    description: 'Product Description',
    image: 'blue-t-shirt.jpg',
    price: 29,
    category: 'Clothing',
    quantity: 25,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1004',
    code: 'h456wer53',
    name: 'Bracelet',
    description: 'Product Description',
    image: 'bracelet.jpg',
    price: 15,
    category: 'Accessories',
    quantity: 73,
    inventoryStatus: 'INSTOCK',
    rating: 4
  },
  {
    id: '1005',
    code: 'av2231fwg',
    name: 'Brown Purse',
    description: 'Product Description',
    image: 'brown-purse.jpg',
    price: 120,
    category: 'Accessories',
    quantity: 0,
    inventoryStatus: 'OUTOFSTOCK',
    rating: 4
  }
])

const onMealClick = () => {
  router.push('/detail')
}

const onSortChange = (event: Event) => {
  // Logique de tri à ajouter ici
}

// const getSeverity = () => {
//   switch () {
//     case 'INSTOCK':
//       return 'success'
//     case 'LOWSTOCK':
//       return 'warn'
//     case 'OUTOFSTOCK':
//       return 'danger'
//     default:
//       return null
//   }
// }

const getSeverity = (product: { inventoryStatus: any }) => {
  switch (product.inventoryStatus) {
    case 'INSTOCK':
      return 'success'

    case 'LOWSTOCK':
      return 'warn'

    case 'OUTOFSTOCK':
      return 'danger'

    default:
      return null
  }
}
</script>
