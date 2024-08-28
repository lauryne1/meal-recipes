<template>
  <router-view />
</template>


<script setup lang="ts">
import { onMounted } from 'vue'
import { useCategoryStore, useAreaStore } from '../src/stores/index'
import axios from 'axios'
import router from './router'


const categoryStore = useCategoryStore()
const areaStore = useAreaStore()


onMounted(async () => {
  await categoryStore.loadCategories()
  await areaStore.loadAreas()
})


axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token')


    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }


    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)


axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      router.push('/login')
    }


    return Promise.reject(error)
  }
)
</script>


<style></style>



