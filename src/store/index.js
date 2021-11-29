import { createStore } from 'vuex'

export default createStore({
  state: {
    prevent: ''
  },
  mutations: {
    changePrevent(state, payload) {
      state.prevent = payload;
    }
  },
  actions: {
    changePrevent(context, payload) {
      context.commit('changePrevent', payload);
    }
  },
  getters: {
    getPrevent(state) {
      return state.prevent;
    }
  },
  modules: {
  }
})
