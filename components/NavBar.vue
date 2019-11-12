<template>
  <v-app-bar app fixed elevation="4">
    <v-container>
      <v-row no-gutters justify="center" align="center">
        <v-col cols="12" lg="8">
          <v-toolbar flat>
            <v-toolbar-title v-text="user.firstName" />

            <div class="flex-grow-1" />

            <v-toolbar-items>
              <v-btn v-for="(item, i) in items" :key="i" :to="item.to" exact text>
                {{ item.title }}
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'user/show'
    }),
    items () {
      const items = [
        {
          title: 'Home',
          to: '/'
        }
      ]

      if (this.user.slug) {
        items.push({
          title: 'Blog',
          to: `/${this.user.slug}/page/1`
        })
      }

      return items
    }
  }
}
</script>
