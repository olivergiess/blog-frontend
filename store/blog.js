export const state = () => ({
  id: null,
  URLIdentifier: '',
  name: '',
  coverImage: '',
  about: ''
})

export const mutations = {
  add (state, blog) {
    state.id = blog.id
    state.URLIdentifier = blog.url_identifier
    state.name = blog.name
    state.coverImage = blog.cover_image
    state.about = blog.about
  },
  reset (state) {
    state.id = null
    state.URLIdentifier = ''
    state.name = ''
    state.coverImage = ''
    state.about = ''
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
