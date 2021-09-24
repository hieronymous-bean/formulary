// initial state object //
const initialState = () => ({
  forms: null
});

// state //
const state = initialState();

// getters //
const getters = {
  getforms: state => state.forms
}

// actions //
const actions = { }

// mutations //
const mutations = { }

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
