<template>
  <div>
    <ImageBanner image-src="http://olivergiess.com/dynamic/images/full/5bae0d9960327.jpeg" />

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
              <PreviewPost :user="user" :post="post" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="auto">
          <Pagination v-model="page" :length="pages" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { validatePositiveInteger } from '@/helpers/Validation'

import ImageBanner from '@/components/ImageBanner'
import PreviewPost from '@/components/PreviewPost'
import Pagination from '@/components/Pagination'

export default {
  components: {
    ImageBanner,
    PreviewPost,
    Pagination
  },
  computed: {
    ...mapGetters({
      user: 'user/get',
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
  asyncData ({ route }) {
    return {
      page: Number(route.params.page)
    }
  },
  async fetch ({ params, store, error }) {
    const slug = params.slug

    try {
      await store.dispatch('user/updateBySlug', slug)
    } catch (e) {
      error({ statusCode: e.response.status })
    }

    const page = params.page

    const pages = store.getters['posts/totalPages']

    if (page > pages) {
      error({ statusCode: 404 })
    }
  }
}
</script>
