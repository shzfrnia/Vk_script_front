import Vue from 'vue'
import Vuex from 'vuex'
import {UserAPI} from "api-client";

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    session: {
      userIds: '',
      userName: '',
      avatar:  '',
      account: {}
    },
    friendList: [],
    bannedFriends: [],
    deletedFriends: [],
    abandonedFriends: [],
    loading: true,
    fetched: false,
    errors: {
      setAccount: ""
    }
  },
  mutations: {
    setAccount(state, account) {
      const fullName = `${account.first_name} ${account.last_name}`
      state.session.userIds = account.id
      state.session.userName = fullName
      state.session.avatar = account.avatar
      state.session.account = account
    },
    resetAccount(state) {
      state.session.userIds = ''
      state.session.userName = ''
      state.session.avatar = ''
      state.session.account = {}
    },
    setError(state, {form, errors}) {
      state.errors[form] = errors
    },
    clearErrors(state) {
      for (const form in state.errors) {
        state.errors[form] = ""
      }
    },
    setBannedFriends(state, friends) {
      state.bannedFriends = friends
    },
    setDeletedFriends(state, friends) {
      state.deletedFriends = friends
    },
    setAbandonedFriends(state, friends) {
      state.abandonedFriends = friends
    },
    setLoading(state, boolean) {
      state.loading = boolean
    },
    setFetchSate(state, boolean) {
      state.fetched = boolean
    },
    resetFriendsLists(state) {
      state.friendList = []
      state.bannedFriends = []
      state.deletedFriends = []
      state.abandonedFriends = []
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
    },
    async fetchAllFriends({dispatch, commit}, user_ids) {
      commit('setLoading', true)
      commit('resetFriendsLists')
      await dispatch('fetchBannedFriends', user_ids)
      await dispatch('fetchDeletedFriends', user_ids)
      await dispatch('fetchAbandonedFriends', user_ids)
      commit('setLoading', false)
      commit('setFetchSate', true)
    },
    async fetchBannedFriends({commit}, user_ids) {
      try {
        const bannedFriends = await UserAPI.getBannedFriends(user_ids)
        commit('setBannedFriends', bannedFriends)
      } catch (e) {
        commit('setError',{form:'bannedFriends', errors: e.error})
      }
    },
    async fetchDeletedFriends({commit}, user_ids) {
      try {
        const deletedFriends = await UserAPI.getDeletedFriends(user_ids)
        commit('setDeletedFriends', deletedFriends)
      } catch (e) {
        commit('setError',{form:'deletedFriends', errors: e.error})
      }
    },
    async fetchAbandonedFriends({commit}, user_ids) {
      try {
        const abandonedFriends = await UserAPI.getAbandonedFriends(user_ids)
        commit('setAbandonedFriends', abandonedFriends)
      } catch (e) {
        commit('setError',{form:'abandonedFriends', errors: e.error})
      }
    }
  }
})
