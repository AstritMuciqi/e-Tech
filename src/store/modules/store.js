 const state = {
    layout: 'userLayout'
  };
 const mutations = {
    SET_LAYOUT (state, payload) {
      state.layout = payload
    }
  };
  const getters = {
    layout (state) {
      return state.layout
    }
  };

export default {
    state,
    mutations,
    getters,
  };