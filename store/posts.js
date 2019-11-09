import { ADD, RESET } from '@/store/resource-mutations'

const ITEMS_PER_PAGE = 10

// eslint-disable-next-line camelcase
const formatPost = ({ id, cover_image: coverImage, title, body, publish_at: publishAt, updated_at: updatedAt }) => ({
  id,
  coverImage,
  title,
  body,
  publishAt,
  updatedAt
})

export const state = () => ([])

export const mutations = {
  [ADD] (state, post) {
    state.push(formatPost(post))
  },
  [RESET] (state) {
    state = []
  }
}

export const actions = {
  insert ({ commit }, posts) {
    if (Array.isArray(posts)) {
      posts.forEach(post => commit(ADD, post))

      return
    }

    commit(ADD, posts)
  },
  deleteAll ({ commit }) {
    commit(RESET)
  }
}

export const getters = {
  show (state) {
    // eslint-disable-next-line eqeqeq
    return id => state.find(ele => ele.id == id)
  },
  totalPages (state) {
    return Math.ceil(state.length / ITEMS_PER_PAGE)
  },
  getPage (state) {
    return (page) => {
      // if (page < 0 || page > this.totalPages()) {
      //   this.error()
      // }

      page = (page - 1) * ITEMS_PER_PAGE

      return state.slice(page, page + ITEMS_PER_PAGE)
    }
  }
}
