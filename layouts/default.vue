<template>
  <v-app>
    <v-content>
      <NavBar />

      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>
