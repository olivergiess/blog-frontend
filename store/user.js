import { ADD, RESET } from '@/store/resource-mutations'

export const state = () => ({
  id: null,
  slug: '',
  firstName: '',
  lastName: ''
})

export const getters = {
  show (state) {
    return state
  }
}

export const mutations = {
  [ADD] (state, user) {
    state.id = user.id
    state.slug = user.slug
    state.firstName = user.first_name
    state.lastName = user.last_name
  },
  [RESET] (state) {
    state.id = null
    state.slug = ''
    state.firstName = ''
    state.lastName = ''
  }
}

export const actions = {
  async updateBySlug ({ getters, commit, dispatch }, slug) {
    if (slug === getters.show.slug) {
      return
    }

    await this.$axios.get(`/users/${slug}?expand=published`)
      .then((response) => {
        const user = response.data.data

        commit(ADD, user)

        const posts = user.relationships.posts.data

        dispatch('posts/insert', posts, { root: true })
      })
  }
}
