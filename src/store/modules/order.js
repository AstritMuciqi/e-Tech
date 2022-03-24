const state = () => ({
  list: [],
});

const mutations = {
  SET_ORDER_LIST(state, list) {
    state.list = list;
  },
};

const actions = {
  fetchOrders({ commit }, list) {
    commit("SET_ORDER_LIST", list);
  },
};

const getters = {
  orderList(state) {
    return state.list;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
