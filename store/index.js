export const state = () => ({
  categoryIds: Object
})

export const mutations = {
  STORE_CATEGORY_IDS(state, categoryId) {
    state.categoryIds = categoryId
  }
}

export const actions = {
  storeCategoryId({commit}, categoryId) {
    commit('STORE_CATEGORY_IDS', categoryId)
  }
}

export const getters = {
  getCategoryId(state) {
    return state.categoryIds
  }
}
