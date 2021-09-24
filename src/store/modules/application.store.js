// initial state object //
const initialState = () => ({
  createNewProjectModalActiveStatus: false,
  infoSidebarCollapsed: true,
  userDropdownMenuCollapsed: true
});

// state //
const state = initialState();

// getters //
const getters = {
  getCreateProjectModalActiveStatus: state => state.getCreateProjectModalActiveStatus,
  getInfoSidebarCollapsedState: state => state.infoSidebarCollapsed,
  getuserDropdownMenuCollapsedState: state => state.userDropdownMenuCollapsed
}

// actions //
const actions = { }

// mutations //
const mutations = { 
  storeCreateNewProjectModalActiveStatus: (state, activeStatus) => {
    state.getCreateProjectModalActiveStatus = activeStatus
  },
  storeInfoSidebarCollapsedState: (state, collapsed) => {
    state.infoSidebarCollapsed = collapsed
  },
  storeUserDropdownMenuCollapsedState: (state, collapsed) => {
    state.userDropdownMenuCollapsed = collapsed
  },
  applicationLogout (state) {
    const newState = initialState();
    Object.keys(newState).forEach(key => {
      state[key] = newState[key]
    });
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
