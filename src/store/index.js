import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: {
      Cash: { icon: 'mdi-currency-usd', color: 'green', total: 1000 },
      Swedbank: { icon: 'mdi-credit-card', color: 'orange', total: 1000 },
      Revolut: { icon: 'mdi-power-socket-eu', color: 'indigo', total: 1000 },
      Stocks: { icon: 'mdi-plus', color: 'amber', total: 1000 }
    },
    categories: {
      Car: { icon: 'mdi-car', color: 'amber', total: 123 },
      House: { icon: 'mdi-home', color: 'purple', total: 23 },
      Pen: { icon: 'mdi-pen', color: 'lime', total: 123 },
      Pencil: { icon: 'mdi-pencil', color: 'blue', total: 123 }
    },
    history: [
      { category: 'Car', account: 'Cash', total: 123.43, time: Date.now() },
      { category: 'Car', account: 'Cash', total: 2.43, time: Date.now() },
      { category: 'Car', account: 'Cash', total: 5.43, time: Date.now() },
      { category: 'Car', account: 'Cash', total: 1.43, time: Date.now() },
      { category: 'House', account: 'Swedbank', total: 1.53, time: Date.now() }
    ],
    settings: {
      theme: 0
    },
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
        category: state.categories[category],
        value,
        time: Date.now()
      })
    },
    addAccount ({ state }, { name, color, icon }) {
      state.accounts[name] = { color, icon, total: 0 }
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
    },
    removeAccount ({ state }, { name }) {
      delete state.accounts[name]
      state.history.map((el, index) => {
        if (el.accounts === name) {
          delete state.accounts[index]
        }
      })
    },
    addCategory ({ state }, { name, color, icon }) {
      state.categories[name] = { color, icon, total: 0 }
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
    },
    removeCategory ({ state }, { name }) {
      delete state.categories[name]
      state.history.map((el, index) => {
        if (el.category === name) {
          delete state.history[index]
        }
      })
    }
  },
  modules: {
  }
})
