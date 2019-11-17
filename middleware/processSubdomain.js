import { getBlogByURLIdentifier } from '@/api/calls'

export default async function ({ req, store, error }) {
  if (!process.server) {
    return false
  }

  const hostname = req.headers.host

  const matches = hostname.match(/([a-z0-9-]+)[.](?:localhost[:]3000)/)

  if (matches !== null) {
    const subdomain = matches[1]

    store.dispatch('subdomain/insert', subdomain)

    await getBlogByURLIdentifier(subdomain)
      .then((result) => {
        const blog = result.data

        store.dispatch('blog/insert', blog)

        const relationships = blog.relationships

        const user = relationships.user.data

        store.dispatch('user/insert', user)

        const posts = relationships.posts.data

        store.dispatch('posts/insert', posts)
      })
      .catch((e) => {
        error({ statusCode: e.response.status })
      })
  } else {
    return error({ statusCode: 404 })
  }
}
