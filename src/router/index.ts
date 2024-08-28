import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import LoginView from '../views/LoginView.vue'
import SignIn from '../views/SIgnIn.vue'
import AlertView from '../views/AlertView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signin',
      name: 'sign',
      component: SignIn
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail',
      name: 'Details',
      component: DetailView
    },
    {
      path: '/alert',
      name: 'alert',
      component: AlertView
    }
  ]
})


export default router



