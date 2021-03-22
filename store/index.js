export const state = () => ({
  category_id: null,
});
export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedUser(state) {
    return state.auth.user
  }
};

export const mutations = {
  getCategoryId(state, data) {
    state.category_id = data;
  },
};

export const actions = {

};
