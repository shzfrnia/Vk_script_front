import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const ACCOUNT_IS_SET = 0
export const ACCOUNT_IS_NOT_SET = 1
export const ACCOUNTIS_WATTING = 2



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
      setAccount: {}
    }
  },
  mutations: {


  },
  actions: {

  }
})
