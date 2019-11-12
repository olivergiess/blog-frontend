<template>
  <div>
    <v-container>
      <v-row no-gutters align="start" justify="center">
        <v-col cols="12" lg="8">
          <v-container>
            <v-row align="center" justify="left">
              <v-col cols="auto">
                <h1 class="display-2">
                  Articles
                </h1>
              </v-col>
            </v-row>
            <v-row no-gutters align="center" justify="left">
              <v-col cols="auto">
                <h2 class="subtitle-1">
                  Latest from the Blog
                </h2>
              </v-col>
            </v-row>
          </v-container>

          <v-row align="start" justify="left">
            <v-col v-for="post in posts" :key="post.id" cols="12" lg="6">
              <PreviewPost :user="user" :post="post" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="auto">
          <Pagination v-model="page" :length="pages"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import PreviewPost from '@/components/PreviewPost'
import Pagination from '@/components/Pagination'

export default {
  components: {
    PreviewPost,
    Pagination
  },
  computed: {
    ...mapGetters({
      user: 'user/show',
      getPage: 'posts/getPage',
      pages: 'posts/totalPages'
    }),
    posts () {
      return this.getPage(this.page)
    }
  },
  watch: {
    page: (pageNumber) => {
      history.pushState({}, null, pageNumber)
    }
  },
  asyncData ({ route }) {
    return {
      page: Number(route.params.page)
    }
  },
  async fetch ({ route, store, error }) {
    const slug = route.params.slug

    await store.dispatch('user/updateBySlug', slug)
      .catch(e => error({ statusCode: e.response.status }))
  }
}
</script>
