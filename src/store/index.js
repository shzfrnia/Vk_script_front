import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'
import friends from './modules/friends'
import errors from "./modules/errors";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    account,
    friends,
    errors
  },
  state: {
    loading: false
  },
  mutations: {
    setLoading(state, boolean) {
      state.loading = boolean
    },
  }
})
