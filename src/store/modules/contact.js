
const state = () => ({
  list: [],
});

const mutations = {

  SET_CONTACT_LIST(state, list) {
    state.list = list;
  },
};

const actions = {

  fetchContacts({ commit }, list) {
    commit("SET_CONTACT_LIST", list);
  },
  
};


const getters = {

  contactList(state) {
    return state.list;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
