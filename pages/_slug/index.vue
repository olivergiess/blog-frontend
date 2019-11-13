<script>
export default {
  async fetch ({ params, store, error, redirect }) {
    const slug = params.slug

    try {
      await store.dispatch('user/updateBySlug', slug)
    } catch (e) {
      error({ statusCode: e.response.status })
    }

    redirect(`/${slug}/page/1`)
  }
}
</script>
