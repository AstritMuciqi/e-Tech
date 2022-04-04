const state = () => ({
    list: [],
  });
  
  const mutations = {
    SET_BRAND_LIST(state, list) {
      state.list = list;
    },
  };
  
  const actions = {
    fetchBrands({ commit }, list) {
      commit("SET_BRAND_LIST", list);
    },
  };
  
  const getters = {
    brandList(state) {
      return state.list;
    },
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };