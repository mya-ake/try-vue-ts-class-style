const state = () => ({
  values: null
});

const getters = {
  values({ values }) {
    return values;
  }
};

const mutations = {
  SET_VALUES(state, values) {
    state.values = { ...values };
  }
};

const actions = {
  saveValues({ commit }, values) {
    commit("SET_VALUES", values);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
