export const state = () => ({
  subdomain: ''
})

export const mutations = {
  add (state, subdomain) {
    state.subdomain = subdomain
  },
  reset (state) {
    state.subdomain = ''
  }
}

export const actions = {
  insert ({ commit }, subdomain) {
    commit('add', subdomain)
  }
}

export const getters = {
  exists (state) {
    return !!state.subdomain
  },
  get (state) {
    return state.subdomain
  }
}
