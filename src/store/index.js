import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    payments: [
      { name: 'Cash', icon: 'mdi-currency-usd', color: 'green', total: 1000 },
      { name: 'Swedbank', icon: 'mdi-credit-card', color: 'orange', total: 1000 },
      { name: 'Revolut', icon: 'mdi-power-socket-eu', color: 'indigo', total: 1000 },
      { name: 'Stocks', icon: 'mdi-plus', color: 'amber', total: 1000 }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
