import Vue from 'vue'
import Vuex from 'vuex'
import {UserAPI} from "api-client";

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    session: {
      userIds: localStorage.getItem('userIds') || '',
      userName: localStorage.getItem('userName') || '',
      account: {}
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
    setAccount(state, account) {
      const fullName = `${account.first_name} ${account.last_name}`
      const id = account.id
      state.session.userIds = id
      state.session.userName = fullName
      state.session.account = account
      localStorage.setItem('userIds', id)
      localStorage.setItem('userName', fullName)
    },
    resetAccount(state) {
      state.session.userIds = ''
      state.session.userName = ''
      localStorage.removeItem('userIds')
      localStorage.removeItem('userName')
    },
    setError(state, {form, errors}) {
      state.errors[form] = errors
    },
    clearErrors(state) {
      for (const form in state.errors) {
        state.errors[form] = ""
      }
    }
  },
  getters: {
    accountIsSet(state) {
      return !!state.session.userIds || state.session.userIds !== ''
    },
    accountName(state) {
      return state.session.userName || ''
    }
  },
  actions: {
    async setAccount({commit}, user_ids) {
      try {
        const account = await UserAPI.getUser(user_ids)
        commit('setAccount', account)
      } catch (e) {
        commit('resetAccount')
        commit('setError', {form:'setAccount', errors: e.error})
      }
    }
  }
})
