import { createStore } from 'vuex'
import state from './state.js';
import actions from './actions.js';
import mutations from './mutations.js';


export default createStore({
  state,
  mutations,
  actions
})
