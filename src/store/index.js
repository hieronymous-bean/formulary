/** store/index.js **/
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

// load individual store modules //
import modules from './modules';

// export function for easy store reference //
export function useStore() {
  return store
}

// main store declaration //
export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules
});