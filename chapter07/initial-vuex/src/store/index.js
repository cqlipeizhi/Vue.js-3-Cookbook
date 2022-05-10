import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  getters: {},
  mutations: {
    increment: state => {
      state.counter += 1
    },
    decrement: state => {
      state.counter -= 1
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    decrement({ commit }) {
      commit('decrement')
    }
  },
  modules: {}
})
