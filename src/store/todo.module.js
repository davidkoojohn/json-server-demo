import api from '../tools/api'

export default {
  state: {
    page: 1,
    dataList: []
  },
  getters: {
    page: state => state.page,
    dataList: state => state.dataList,
  },
  mutations: {
    SET_DATA_LIST(state, data) {
      state.dataList = data;
    },
  },
  actions: {
    async createTodo({ commit }, {data}) {
      await api.todo.create({data});
    },
    async getTodo({ commit }) {
      let resp = await api.todo.get({});
      commit('SET_DATA_LIST', resp);
    },
  },
  namespaced: true,
}
