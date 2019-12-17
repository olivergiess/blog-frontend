<template>
  <div>
    <app-image-banner :image-src="blog.coverImage" />

    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="12" xl="10">
          <v-container>
            <v-row align="center">
              <v-col cols="auto">
                <h1 class="display-2">
                  Articles
                </h1>
              </v-col>
            </v-row>
            <v-row no-gutters align="center">
              <v-col cols="auto">
                <h2 class="subtitle-1">
                  Latest from the Blog
                </h2>
              </v-col>
            </v-row>
          </v-container>

          <v-row>
            <v-col v-for="post in posts" :key="post.id" cols="12" lg="6">
              <preview-post :post="post" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="auto">
          <app-pagination v-model="page" :length="pages" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { validatePositiveInteger } from '~/scripts/Validation'

import AppImageBanner from '~/components/ui/AppImageBanner'
import PreviewPost from '~/components/posts/PreviewPost'
import AppPagination from '~/components/ui/AppPagination'

export default {
  components: {
    AppImageBanner,
    PreviewPost,
    AppPagination
  },
  computed: {
    ...mapGetters({
      blog: 'blog/get',
      pages: 'posts/totalPages'
    }),
    posts () {
      return this.$store.getters['posts/getPage'](this.page)
    }
  },
  watch: {
    page: (pageNumber) => {
      history.pushState({}, null, pageNumber)
    }
  },
  validate ({ params }) {
    const page = Number(params.page)

    return validatePositiveInteger(page)
  },
  middleware: [
    'processSubdomain'
  ],
  asyncData ({ route }) {
    return {
      page: Number(route.params.page)
    }
  },
  fetch ({ params, store, error }) {
    const page = params.page

    const pages = store.getters['posts/totalPages']

    if (page > pages) {
      return error({ statusCode: 404 })
    }
  }
}
</script>
