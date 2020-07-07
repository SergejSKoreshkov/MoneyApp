import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Categories from '../views/Categories.vue'
import Payments from '../views/Payments.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/payments',
    name: 'Payments',
    component: Payments
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
