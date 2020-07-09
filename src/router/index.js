import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Categories from '../views/Categories.vue'
import Payments from '../views/Payments.vue'
import Settings from '../views/Settings.vue'

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
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'production'
    ? '/MoneyApp'
    : process.env.BASE_URL,
  routes
})

export default router
