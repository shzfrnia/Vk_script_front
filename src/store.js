import Vue from 'vue'
import Vuex from 'vuex'
import {UserAPI} from "api-client";

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    session: {
      userIds: localStorage.getItem('userIds') || ''
    },
    friendList: [],
    friendStates: {
      banned: "banned",
      active: null,
      deleted: "deleted",
      offline: true
    },
    errors: {
      setAccount: ""
    }
  },
  mutations: {
    setAccount(state, user_ids) {
      state.session.userIds = user_ids
    },
  getters: {
    accountIsSet(state) {
      return !!state.session.userIds || state.session.userIds !== ''
    }
  },
  actions: {
    async setAccount({commit}, user_ids) {
      try {
        const account = await UserAPI.getUser(user_ids)
        commit('setAccount', account.id)
      } catch (e) {
        commit('setError', {form:'setAccount', errors: e.error})
        commit('setAccount','')
      }
    }
  }
})
