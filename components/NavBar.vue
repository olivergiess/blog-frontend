<template>
  <v-app-bar
    app
    fixed
    :elevate-on-scroll="true"
  >
    <v-container
      fill-height
    >
      <v-row
        no-gutters
        justify="center"
        align="center"
      >
        <v-col
          cols="11"
          lg="9"
        >
          <v-toolbar
            flat
          >
            <v-toolbar-title v-text="name" />

            <div class="flex-grow-1" />

            <v-toolbar-items>
              <v-btn
                v-for="(item, i) in items"
                :key="i"
                :to="item.to"
                exact
                text
              >
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
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    }
  },
  computed: {
    items () {
      const items = [
        {
          title: 'Home',
          to: '/'
        }
      ]

      if (this.slug) {
        items.push({
          title: 'Blog',
          to: '/' + this.slug
        })
      }

      return items
    }
  }
}
</script>
