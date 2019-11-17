<template>
  <div>
    Hello world!
  </div>
</template>

<script>
export default {
  middleware: [
    'processSubdomain'
  ],
  fetch ({ store, redirect }) {
    if (store.getters['subdomain/exists']) {
      redirect(`/page/1`)
    }
  }
}
</script>
