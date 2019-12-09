<script>
export default {
  middleware: [
    'processSubdomain'
  ],
  fetch ({ store, redirect }) {
    if (store.getters['subdomain/exists']) {
      redirect(`/pages/1`)
    }
  }
}
</script>
