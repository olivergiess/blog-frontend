<template>
  <v-app>
    <v-content>
      <NavBar />

      <nuxt />
    </v-content>
    <GradientBanner class="pa-0" :degrees="7" from="rgba(254, 214, 227, 0.7)" to="rgba(168, 237, 234, 0.3)">
      <Socials />
    </GradientBanner>
    <Footer />
  </v-app>
</template>

<script>
import Socials from '@/components/Socials'
import NavBar from '@/components/NavBar'
import GradientBanner from '@/components/GradientBanner'
import Footer from '@/components/Footer'

export default {
  components: {
    NavBar,
    GradientBanner,
    Socials,
    Footer
  }
}
</script>
