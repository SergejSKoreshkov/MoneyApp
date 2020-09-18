import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Categories from '../views/Categories.vue'
import Accounts from '../views/Accounts.vue'
import AppSettings from '../views/AppSettings.vue'
import AddOrEdit from '../views/AddOrEdit.vue'
import Spendings from '../views/Spendings.vue'

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
    name: 'AppSettings',
    component: AppSettings
  },
  {
    path: '/addOrEdit',
    name: 'AddOrEdit',
    component: AddOrEdit
  },
  {
    path: '/spendings',
    name: 'Spendings',
    component: Spendings
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
