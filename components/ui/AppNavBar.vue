<template>
  <v-app-bar
    app
    fixed
    prominent
    dense
    elevation="4"
  >
    <v-container fill-height class="py-0">
      <v-row no-gutters justify="center" style="height: 100%">
        <v-col cols="12" xl="10" style="height: 100%">
          <v-row no-gutters align="center" justify="center" style="height: 100%">
            <v-col cols="auto">
              <v-toolbar-title v-text="blog.name" />
            </v-col>

            <v-spacer />

            <v-col cols="auto" style="height: 100%">
              <v-toolbar-items>
                <v-btn v-for="(item, i) in items" :key="i" :to="item.to" exact text>
                  {{ item.title }}
                </v-btn>
              </v-toolbar-items>
            </v-col>
          </v-row>
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
      blog: 'blog/get'
    }),
    items () {
      const items = [
        {
          title: 'Home',
          to: '/'
        }
      ]

      return items
    }
  }
}
</script>
