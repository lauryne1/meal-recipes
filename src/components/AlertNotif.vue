<template>
    <div
      v-if="type === 'success'"
      :class="alertClass"
      class="w-[438px] h-[110px] mt-12 mx-12 pr-5 rounded-2xl shadow-lg relative flex items-center"
    >
      <div class="flex items-center">
        <div class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 z-10">
          <UnionSuccessIcon class="w-14 h-14 mx-12" />
        </div>
        <div class="ml-28 flex flex-col justify-center w-52">
          <strong class="text-lg">{{ title }}</strong>
          <p class="text-sm mt-1">{{ message }}</p>
        </div>
      </div>
      <div class="absolute top-[-5px] left-[1px] w-[100px] h-[61px] z-0">
        <GreenBubble class="w-full h-16 rounded-2xl mt-[50px] overflow-hidden" />
      </div>
      <CloseIcon @click="closeAlert" class="absolute top-6 right-6 cursor-pointer" />
    </div>
  
  
    <div
      v-if="type === 'fail'"
      :class="alertClass"
      class="w-[438px] h-[110px] mt-12 mx-12 p-5 rounded-2xl shadow-lg relative flex items-center"
    >
      <div class="flex items-center">
        <div class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 z-10">
          <UnionFailIcon class="w-14 h-14 mx-12" />
        </div>
        <div class="ml-28 flex flex-col justify-center w-52">
          <strong class="text-lg">{{ title }}</strong>
          <p class="text-sm mt-1">{{ message }}</p>
        </div>
      </div>
      <div class="absolute top-[-5px] left-[-1px] w-[100px] h-[115px] z-0">
        <DangerBubble class="w-full h-full rounded-2xl overflow-hidden" />
      </div>
      <CloseIcon @click="closeAlert" class="absolute top-6 right-6 cursor-pointer" />
    </div>
  
  
    <div
      v-if="type === 'warning'"
      :class="alertClass"
      class="w-[438px] h-[110px] mt-12 mx-12 p-5 rounded-2xl shadow-lg relative flex items-center"
    >
      <div class="flex items-center">
        <div class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 z-10">
          <UnionWrningIcon class="w-14 h-14 mx-12" />
        </div>
        <div class="ml-28 flex flex-col justify-center w-52">
          <strong class="text-lg">{{ title }}</strong>
          <p class="text-sm mt-1">{{ message }}</p>
        </div>
      </div>
      <div class="absolute mt-2 left-[-1px] w-[100px] h-[100px] z-0">
        <WarningBubble class="w-full h-full rounded-2xl overflow-hidden" />
      </div>
      <CloseIcon @click="closeAlert" class="absolute top-6 right-6 cursor-pointer" />
    </div>
  
  
    <div
      v-if="type === 'info'"
      :class="alertClass"
      class="w-[438px] h-[110px] mt-12 mx-12 p-5 rounded-2xl shadow-lg relative flex items-center"
    >
      <div class="flex items-center">
        <div class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 z-10">
          <UnionInfoIcon class="w-14 h-14 mx-12" />
        </div>
        <div class="ml-28 flex flex-col justify-center w-52">
          <strong class="text-lg">{{ title }}</strong>
          <p class="text-sm mt-1">{{ message }}</p>
        </div>
      </div>
      <div class="absolute top-[-5px] left-[-1px] w-[100px] h-[115px] z-0">
        <InfoBubble class="w-full h-full rounded-2xl overflow-hidden" />
      </div>
      <CloseIcon @click="closeAlert" class="absolute top-6 right-6 cursor-pointer" />
    </div>
  </template>
  
  
  <script setup lang="ts">
  import { computed } from 'vue'
  
  
  import UnionWrningIcon from './icons/UnionWrningIcon.vue'
  import UnionFailIcon from './icons/UnionFailIcon.vue'
  import UnionInfoIcon from './icons/UnionInfoIcon.vue'
  import CloseIcon from './icons/CloseIcon.vue'
  import DangerBubble from './icons/DangerBubble.vue'
//   import WarningBubble from './icons/WarningBubble.vue'
  import InfoBubble from './icons/InfoBubble.vue'
  import UnionSuccessIcon from './icons/UnionSuccessIcon.vue'
  import GreenBubble from './icons/GreenBubble.vue'
  
  
  const props = defineProps({
    type: {
      type: String as () => 'success' | 'fail' | 'warning' | 'info',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  })
  
  
  const emit = defineEmits(['close'])
  
  
  const alertClass = computed(() => {
    switch (props.type) {
      case 'success':
        return 'bg-[#03A65A] text-white '
      case 'fail':
        return 'bg-[#F63E50] text-white '
      case 'warning':
        return 'bg-[#F88F01] text-white'
      case 'info':
        return 'bg-[#739BE5] text-white'
      default:
        return ''
    }
  })
  
  
  const closeAlert = () => {
    emit('close')
  }
  </script>
  
  
  
  