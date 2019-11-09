<template>
  <v-app-bar app fixed :elevate-on-scroll="true">
    <v-container>
      <v-row no-gutters justify="center" align="center">
        <v-col cols="11" lg="9">
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
