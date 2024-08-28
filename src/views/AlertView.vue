<template>
    <div>
      <AlertNotif
        v-if="showSuccess"
        type="success"
        title="Well done!"
        message="You successfully read this important message."
        @close="showSuccess = true"
      />
  
  
      <AlertNotif
        v-if="showFail"
        type="fail"
        title="Oh snap!"
        message="Change a few things up and try submitting again."
        @close="showFail = true"
      />
  
  
      <AlertNotif
        v-if="showWarning"
        type="warning"
        title="Warning!"
        message="There was a problem with your request."
        @close="showWarning = true"
      />
  
  
      <AlertNotif
        v-if="showInfo"
        type="info"
        title="Hi there!"
        message="Do you need a problem? Just use this form to contact us."
        @close="showInfo = true"
      />
    </div>
  </template>
  
  
  <script setup lang="ts">
// import AlertNotif from '../components/AlertNotif.vue';
import { ref } from 'vue'
  
  
  const showFail = ref(true)
  const showSuccess = ref(true)
  const showWarning = ref(true)
  const showInfo = ref(true)
  
  
  const handleClose = () => {
    console.log('Alert closed')
  }
  </script>
  
  
  
  