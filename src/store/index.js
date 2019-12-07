import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import todoModule from './todo.module'

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todoModule,
  }
})
