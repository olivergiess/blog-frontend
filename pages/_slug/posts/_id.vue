<template>
  <div>
    <ImageBanner :image-src="post.coverImage" />

    <Avatar />

    <v-container>
      <v-row align="start" justify="center">
        <v-col cols="6">
          <h1 class="display-3 font-weight-light text-center">
            Test
          </h1>
        </v-col>
      </v-row>
      <v-row align="start" justify="center">
        <v-col cols="auto">
          <h3 class="overline text-uppercase grey--text">
            PUBLISHED / {{ formattedPublishAt }}
          </h3>
          <h3 class="overline text-uppercase grey--text">
            EDITED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ {{ formattedUpdatedAt }}
          </h3>
        </v-col>
      </v-row>
      <v-row align="start" justify="center">
        <v-col cols="8">
          <DisplayPost :html="post.body" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

import ImageBanner from '@/components/ImageBanner'
import Avatar from '@/components/Avatar'
import DisplayPost from '@/components/DisplayPost'

export default {
  auth: false,
  components: {
    ImageBanner,
    Avatar,
    DisplayPost
  },
  computed: {
    ...mapGetters({
      getPost: 'posts/show'
    }),
    post () {
      const id = this.$route.params.id

      return this.getPost(id)
    },
    formattedPublishAt () {
      return moment(this.post.publishAt).format('Do MMM YYYY')
    },
    formattedUpdatedAt () {
      return moment(this.post.updatedAt).format('Do MMM YYYY')
    }
  },
  async fetch ({ route, store }) {
    const slug = route.params.slug

    await store.dispatch('user/updateBySlug', slug)
  }
}
</script>
