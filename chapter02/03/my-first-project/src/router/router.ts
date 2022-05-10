import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }, {
    path: '/secure',
    name: 'secure',
    component: () => import('../views/Secure.vue')
  }]
})
