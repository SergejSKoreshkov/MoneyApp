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
const balance = {
  max: 0,
  total: 0,
  ...load('balance')
}
const settings = {
  currency: '€',
  period: 'All',
  selectedDate: new Date(2020, 9, 10).getTime(),
  ...load('settings')
}

/**
 *
 * @param {String} name
 * @param {String} icon
 * @param {String} color
 */
const createAccount = (name = 'Empty', icon = 'mdi-alert-circle', color = 'amber') => ({ name, icon, color, total: 0 })
/**
 *
 * @param {String} name
 * @param {String} icon
 * @param {String} color
 */
const createCategory = (name = 'Empty', icon = 'mdi-alert-circle', color = 'amber') => ({ name, icon, color, total: 0 })
/**
 *
 * @param {String} account
 * @param {String} category
 * @param {String} type
 * @param {Number} total
 */
const createHistory = (account = 'Empty', category = 'Empty', type = 'spending', total = 0) => ({ account, category, type, total, time: Date.now() })

export default new Vuex.Store({
  state: {
    accounts,
    categories,
    history,
    balance,
    settings,
    isNavBarOpen: false
  },
  getters: {
    period: state => {
      const selected = state.settings.selectedDate
      switch (state.settings.period) {
        case 'Year': return [selected, new Date(new Date(selected).getFullYear() + 1, 0, 1).getTime()]
        case 'Month': return [selected, new Date(new Date(selected).getFullYear(), new Date(selected).getMonth() + 1, 1).getTime()]
        case 'Day': return [selected, new Date(new Date(selected).getFullYear(), new Date(selected).getMonth(), new Date(selected).getDate() + 1).getTime()]
        case 'All':
        default: return [0, Date.now() + 1]
      }
    },
    history: (state, getters) => {
      const period = getters.period
      return state.history.filter(el => el.time >= period[0] && el.time <= period[1])
    }
  },
  mutations: {
    changeCategoryTotal (state, { category, total, type }) {
      state.categories[category].total += type === 'spending' ? -total : total
    },
    changeAccountTotal (state, { account, total, type }) {
      state.accounts[account].total += type === 'spending' ? -total : total
    },
    setIsNavBarOpen (state, newState) {
      state.isNavBarOpen = newState
    }
  },
  actions: {
    addPayment ({ commit, state }, { account, category, type, total }) {
      if (type === 'transfer') {
        commit('changeAccountTotal', { account, total, type: 'spending' })
        commit('changeAccountTotal', { account: category, total, type: 'income' })
        state.history.push(createHistory(account, category, type, total))
      } else {
        commit('changeCategoryTotal', { category, total, type })
        commit('changeAccountTotal', { account, total, type })
        state.history.push(createHistory(account, category, type, total))
        state.balance.total = state.history.reduce((acc, el) => acc + (el.type === 'spending' ? -el.total : el.total), 0)
        state.balance.max = Math.max(state.balance.max, state.balance.total)
      }
      save('accounts', state.accounts)
      save('categories', state.categories)
      save('history', state.history)
      save('balance', state.balance)
    },
    removePayment ({ commit, state }, { account, category, type, total, time }) {
      state.history = state.history.filter(el => el.account !== account || el.category !== category || el.type !== type || el.total !== total || el.time !== time)
      commit('changeCategoryTotal', { category, total, type: 'spending' })
      commit('changeAccountTotal', { account, total, type: 'spending' })
      state.balance.total = state.history.reduce((acc, el) => acc + (el.type === 'spending' ? -el.total : el.total), 0)
      state.balance.max = state.balance.max - total
      save('accounts', state.accounts)
      save('categories', state.categories)
      save('history', state.history)
      save('balance', state.balance)
    },
    addAccount ({ state }, { name, icon, color }) {
      state.accounts[name] = createAccount(name, icon, color)
      save('accounts', state.accounts)
    },
    editAccount ({ state }, { name, newName, color, icon }) {
      const buffer = { ...state.accounts[name] }
      delete state.accounts[name]
      state.accounts[newName] = buffer
      state.accounts[newName].color = color
      state.accounts[newName].icon = icon
      state.history = state.history.map(el => {
        if (el.account === name) {
          el.account = newName
        }
        return el
      })
      save('accounts', state.accounts)
      save('history', state.history)
    },
    removeAccount ({ state }, { name }) {
      delete state.accounts[name]
      state.history = state.history.filter((el, index) => {
        return el.account !== name
      })
      save('accounts', state.accounts)
      save('history', state.history)
    },
    addCategory ({ state }, { name, icon, color }) {
      state.categories[name] = createCategory(name, icon, color)
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
      state.history = state.history.map((el, index) => {
        return el.category !== name
      })
      save('categories', state.categories)
      save('history', state.history)
    },
    cleanData ({ state }) {
      state.history = []
      state.accounts = {}
      state.categories = {}
      state.settings = {}
      save('accounts', state.accounts)
      save('categories', state.categories)
      save('history', state.history)
      save('settings', state.settings)
    },
    setTheme ({ state }, { theme }) {
      state.settings.theme = theme
      save('settings', state.settings)
    },
    setPeriod ({ state }, { period }) {
      state.settings.period = period
      save('settings', state.settings)
    },
    setCurrency ({ state }, { currency }) {
      state.settings.currency = currency
      save('settings', state.settings)
    }
  },
  modules: {
  }
})
