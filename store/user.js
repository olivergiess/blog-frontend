import { getBlogBySlug } from '@/api/calls'

export const state = () => ({
  id: null,
  slug: '',
  firstName: '',
  lastName: ''
})

export const mutations = {
  add (state, user) {
    state.id = user.id
    state.slug = user.slug
    state.firstName = user.first_name
    state.lastName = user.last_name
  },
  reset (state) {
    state.id = null
    state.slug = ''
    state.firstName = ''
    state.lastName = ''
  }
}

export const actions = {
  updateBySlug ({ getters, commit, dispatch }, slug) {
    if (slug === getters.get.slug) {
      return
    }

    return getBlogBySlug(slug)
      .then((result) => {
        const user = result.data

        const posts = result.data.relationships.posts.data

        commit('add', user)

        dispatch('posts/insert', posts, { root: true })
      })
  }
}

export const getters = {
  get (state) {
    return state
  }
}
