export const state = () => ({
  id: null,
  firstName: '',
  lastName: ''
})

export const mutations = {
  add (state, user) {
    state.id = user.id
    state.firstName = user.first_name
    state.lastName = user.last_name
  },
  reset (state) {
    state.id = null
    state.firstName = ''
    state.lastName = ''
  }
}

export const actions = {
  insert ({ commit }, posts) {
    commit('add', posts)
  }
}

export const getters = {
  get (state) {
    return state
  }
}
