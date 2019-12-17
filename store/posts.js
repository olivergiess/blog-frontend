const ITEMS_PER_PAGE = 10

// eslint-disable-next-line camelcase
const formatPost = ({ id, cover_image: coverImage, title, body, publish_at: publishAt, updated_at: updatedAt }) => ({
  id,
  coverImage,
  title,
  body: JSON.parse(body),
  publishAt,
  updatedAt
})

export const state = () => ([])

export const mutations = {
  add (state, post) {
    state.push(formatPost(post))
  },
  reset (state) {
    state = []
  }
}

export const actions = {
  insert ({ commit }, posts) {
    if (Array.isArray(posts)) {
      posts.forEach(post => commit('add', post))

      return
    }

    commit('add', posts)
  }
}

export const getters = {
  get (state) {
    // eslint-disable-next-line eqeqeq
    return id => state.find(ele => ele.id == id)
  },
  totalPages (state) {
    return Math.ceil(state.length / ITEMS_PER_PAGE)
  },
  getPage (state) {
    return (page) => {
      page = (page - 1) * ITEMS_PER_PAGE

      return state.slice(page, page + ITEMS_PER_PAGE)
    }
  }
}
