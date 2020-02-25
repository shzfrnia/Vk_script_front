import {UserAPI} from "api-client";

const state = {
  session: {
    userIds: '',
    userName: '',
    avatar:  '',
    account: {}
  }
};

const mutations = {
  setAccount(state, account) {
    const fullName = `${account.first_name} ${account.last_name}`;
    state.session.userIds = account.id;
    state.session.userName = fullName;
    state.session.avatar = account.avatar;
    state.session.account = account
  },
  resetAccount(state) {
    state.session.userIds = '';
    state.session.userName = '';
    state.session.avatar = '';
    state.session.account = {}
  }
};

const getters = {
  accountIsSet(state) {
    return !!state.session.userIds || state.session.userIds !== ''
  },
  accountName(state) {
    return state.session.userName || ''
  },
};

const actions = {
  async setAccount({commit}, user_ids) {
    try {
      const account = await UserAPI.getUser(user_ids);
      commit('setAccount', account)
    } catch (e) {
      throw e.error
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
