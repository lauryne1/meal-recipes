<template>
    <div class="flex h-screen overflow-hidden">
      <div class="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
        <div class="w-full max-w-md">
          <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <InputText
              id="username"
              type="text"
              v-model="username"
              class="w-full mt-1 p-2 border rounded"
              placeholder="Enter your username"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <InputText
              id="password"
              type="password"
              v-model="password"
              class="w-full mt-1 p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button @click="log" class="w-full bg-green-500 text-white py-2 rounded mb-4">Login</button>
        </div>
      </div>
      <div class="hidden md:flex w-1/2 bg-green-500 items-center justify-center overflow-hidden">
        <div class="text-center text-white max-w-full">
          <img
            src="/public/login-cover.jpg"
            alt="Promotional Image"
            class="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router' // Import useRouter
  import InputText from 'primevue/inputtext'
  import { login } from '../api/index'
  
  
  const router = useRouter() // Initialize router
  const username = ref('')
  const password = ref('')
  
  
  const log = async () => {
    const result = await login(username.value, password.value)
    console.log('Login result', result)
    if (result) {
      router.push('/home')
    }
  }
  </script>
  
  
  <style scoped></style>
  
  
  
  