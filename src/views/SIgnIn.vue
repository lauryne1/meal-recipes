<template>
    <div class="flex h-screen overflow-hidden">
      <!-- Left side (Reset Password form) -->
      <div class="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
        <div class="w-full max-w-md">
          <h2 class="text-3xl font-bold mb-4 text-start">Sign in</h2>
          <div class="mb-4">
            <!-- <label for="firstname" class="block text-sm font-medium text-gray-700">
              Enter your firstname
            </label> -->
            <!-- <InputText
              id="firstname"
              type="firstname"
              v-model="firstname"
              class="w-full mt-1 p-2 border rounded"
              placeholder="firstname"
            /> -->
          </div>
          <div class="mb-4">
            <!-- <label for="email" class="block text-sm font-medium text-gray-700">
              Enter your lastname
            </label> -->
            <!-- <InputText
              id="lastname"
              type="lastname"
              v-model="lastname"
              class="w-full mt-1 p-2 border rounded"
              placeholder="lastname"
            /> -->
          </div>
  
  
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Enter your e-mail address
            </label>
            <InputText
              id="email"
              type="email"
              v-model="username"
              class="w-full mt-1 p-2 border rounded"
              placeholder=" e-mail "
            />
          </div>
  
  
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Create your password
            </label>
            <InputText
              id="password"
              type="password"
              v-model="password"
              class="w-full mt-1 p-2 border rounded"
              placeholder="password"
            />
          </div>
  
  
          <!-- <div class="flex justify-start space-x-4">
            <Checkbox
              v-model="checked"
              :binary="true"
              class="border flex w-7 h-7 border-black rounded-md"
            />
            <p class="mb-5">I agree to the terms and privacy policy</p>
          </div> -->
  
  
          <button @click="sign" class="w-full bg-green-500 text-white py-2 rounded mb-4">Send</button>
        </div>
      </div>
      <div class="hidden md:flex w-1/2 bg-green-500 items-center justify-center overflow-hidden">
        <div class="text-center text-white max-w-full">
          <img
            src="/public/sign-cover.jpg"
            alt="Promotional Image"
            class="rounded-lg shadow-md object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import InputText from 'primevue/inputtext'
  import { signin } from '../api/index'
  
  
  const password = ref('')
  const username = ref('')
  
  
  const sign = async () => {
    const result = await signin(username.value, password.value)
    console.log('sigin result', result)
  }
  </script>
  
  
  <style scoped></style>
  
  
  
  