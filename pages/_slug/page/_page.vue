<template>
  <div>
    <ImageBanner image-src="http://www.schintudesign.com/envato/exodus/assets/img/backs/back03.jpg" />

    <Header />

    <Pagination v-model="page" :length="pages" />

    <v-container>
      <v-row align="start" justify="center">
        <v-col v-for="post in posts" :key="post.id" cols="12" md="6">
          <PreviewPost :user="user" :post="post" />
        </v-col>
      </v-row>
    </v-container>

    <Pagination v-model="page" :length="pages" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ImageBanner from '@/components/ImageBanner'
import Header from '@/components/Header'
import PreviewPost from '@/components/PreviewPost'
import Pagination from '@/components/Pagination'

export default {
  components: {
    ImageBanner,
    Header,
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
  async fetch ({ route, store }) {
    const slug = route.params.slug

    await store.dispatch('user/updateBySlug', slug)
  }
}
</script>
