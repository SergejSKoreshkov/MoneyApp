import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Categories from '../views/Categories.vue'
import Accounts from '../views/Accounts.vue'
import Settings from '../views/Settings.vue'
import AddCategory from '../views/AddCategory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: Accounts
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
  },
  {
    path: '/addcategory',
    name: 'AddCategory',
    component: AddCategory
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
