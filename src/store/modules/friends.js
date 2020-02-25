import {UserAPI} from "api-client";

const state = {
  friendList: [],
  daysOffline: 362/2,
  friendsFetched: false
};

const mutations = {
  setDaysOffline(state, daysOffline) {
    state.daysOffline = daysOffline
  },
  setFriendsList(state, friends) {
    state.friendList = friends
  },
  setFetchSate(state, boolean) {
    state.friendsFetched = boolean
  },
  resetFriendsLists(state) {
    state.friendList = [];
  }
};

const getters = {
  bannedFriends(state) {
    return state.friendList.filter(friend => friend.is_deactivated === 'banned')
  },
  deletedFriends(state) {
    return state.friendList.filter(friend => friend.is_deactivated === 'deleted')
  },
  abandonedFriends(state) {
    return state.friendList.filter(friend => friend.days_offline >= state.daysOffline)
  }
};


const actions = {
  async fetchAllFriends({commit}, user_ids) {
    // commit('setLoading', true);
    commit('resetFriendsLists');
    try {
      const friendList = await UserAPI.getFriendsList(user_ids);
      commit("setFriendsList", friendList)
    } catch (e) {
      commit('setError', {form:'bannedFriends', errors: e.error})
    }
    // commit('setLoading', false);
    commit('setFetchSate', true)
  },
};


export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
