
const state = {
  errors: {
    setAccount: ""
  }
};

const mutations = {
  setError(state, {form, errors}) {
    state.errors[form] = errors
  },
  clearErrors(state) {
    for (const form in state.errors) {
      state.errors[form] = ""
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations
}
