<template>
  <v-app>
    <nuxt />

    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from '~/components/ui/AppFooter'

export default {
  components: {
    AppFooter
  }
}
</script>
