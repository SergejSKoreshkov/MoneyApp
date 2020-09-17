import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const load = (type) => {
  try {
    return JSON.parse(window.localStorage.getItem(type))
  } catch {
    return {}
  }
}

export const save = (type, object) => {
  try {
    window.localStorage.setItem(type, JSON.stringify(object))
  } catch {}
}

// Cash: { icon: 'mdi-currency-usd', color: 'green', total: 1000 },
// Car: { icon: 'mdi-car', color: 'amber', total: 123 },
// { category: 'Car', account: 'Cash', total: 2.43, time: Date.now() },
const accounts = load('accounts') || {}
const categories = load('categories') || {}
const history = load('history') || []
const settings = load('settings') || {}

export default new Vuex.Store({
  state: {
    accounts,
    categories,
    history,
    settings,
    isNavBarOpen: false
  },
  mutations: {
    changeCategoryTotal (state, { category, value }) {
      state.categories[category].total += value
    },
    changeAccountTotal (state, { account, value }) {
      state.accounts[account].total += value
    },
    setIsNavBarOpen (state, newState) {
      state.isNavBarOpen = newState
    }
  },
  actions: {
    addPayment ({ commit, state }, { account, category, value }) {
      commit('changeCategoryTotal', { category, value })
      commit('changeAccountTotal', { account, value })
      state.history.push({
        category,
        account,
        value,
        time: Date.now()
      })
      save('accounts', state.accounts)
      save('categories', state.categories)
      save('history', state.history)
    },
    addAccount ({ state }, { name, color, icon }) {
      state.accounts[name] = { color, icon, total: 0 }
      save('accounts', state.accounts)
    },
    editAccount ({ state }, { name, newName, color, icon }) {
      const buffer = { ...state.accounts[name] }
      delete state.accounts[name]
      state.accounts[newName] = buffer
      state.accounts[newName].color = color
      state.accounts[newName].icon = icon
      state.history = state.history.map(el => {
        if (el.accounts === name) {
          el.accounts = newName
        }
        return el
      })
      save('accounts', state.accounts)
      save('history', state.history)
    },
    removeAccount ({ state }, { name }) {
      delete state.accounts[name]
      state.history.map((el, index) => {
        if (el.accounts === name) {
          delete state.accounts[index]
        }
      })
      save('accounts', state.accounts)
      save('history', state.history)
    },
    addCategory ({ state }, { name, color, icon }) {
      state.categories[name] = { color, icon, total: 0 }
      save('categories', state.categories)
    },
    editCategory ({ state }, { name, newName, color, icon }) {
      const buffer = { ...state.categories[name] }
      delete state.categories[name]
      state.categories[newName] = buffer
      state.categories[newName].color = color
      state.categories[newName].icon = icon
      state.history = state.history.map(el => {
        if (el.category === name) {
          el.category = newName
        }
        return el
      })
      save('categories', state.categories)
      save('history', state.history)
    },
    removeCategory ({ state }, { name }) {
      delete state.categories[name]
      state.history.map((el, index) => {
        if (el.category === name) {
          delete state.history[index]
        }
      })
      save('categories', state.categories)
      save('history', state.history)
    },
    setTheme ({ state }, { theme }) {
      state.settings.theme = theme
      save('settings', {
        ...state.settings,
        theme
      })
    }
  },
  modules: {
  }
})
