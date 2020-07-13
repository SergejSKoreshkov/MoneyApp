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
      House: { icon: 'mdi-home', color: 'purple', total: 123 },
      Pen: { icon: 'mdi-pen', color: 'lime', total: 123 },
      Pencil: { icon: 'mdi-pencil', color: 'blue', total: 123 }
    },
    history: [],
    settings: {
      theme: 1
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
    addPaymentToHistory (state, { category, value }) {
      state.history.push({ category, value, time: Date.now() })
    },
    setIsNavBarOpen (state, newState) {
      state.isNavBarOpen = newState
    }
  },
  actions: {
    addAccount ({ commit, state }, { account, category, value }) {
      commit('changeCategoryTotal', { category, value })
      commit('changeAccountTotal', { account, value })
      commit('addPaymentToHistory', { category: state.categories[category], value })
    },
    addCategory ({ commit, state }, { account, category, value }) {
      commit('changeCategoryTotal', { category, value })
      commit('changeAccountTotal', { account, value })
      commit('addPaymentToHistory', { category: state.categories[category], value })
    }
  },
  modules: {
  }
})
