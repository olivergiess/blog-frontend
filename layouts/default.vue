<template>
  <v-app>
    <v-content>
      <app-nav-bar />

      <nuxt />
    </v-content>
    <app-gradient-banner class="pa-0" :degrees="7" from="rgba(254, 214, 227, 0.7)" to="rgba(168, 237, 234, 0.3)">
      <app-socials />
    </app-gradient-banner>
    <app-footer />
  </v-app>
</template>

<script>
import AppNavBar from '~/components/ui/AppNavBar'
import AppGradientBanner from '~/components/ui/AppGradientBanner'
import AppSocials from '~/components/ui/AppSocials'
import AppFooter from '~/components/ui/AppFooter'

export default {
  components: {
    AppNavBar,
    AppGradientBanner,
    AppSocials,
    AppFooter
  }
}
</script>
