<template>
  <div>
    <app-image-banner :image-src="post.coverImage" />

    <app-avatar />

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
          <display-post :html="post.body" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import moment from 'moment'
import { validatePositiveInteger } from '~/helpers/Validation'

import AppImageBanner from '~/components/ui/AppImageBanner'
import AppAvatar from '~/components/ui/AppAvatar'
import DisplayPost from '~/components/posts/DisplayPost'

export default {
  auth: false,
  components: {
    AppImageBanner,
    AppAvatar,
    DisplayPost
  },
  computed: {
    post () {
      const id = this.$route.params.id

      return this.$store.getters['posts/get'](id)
    },
    formattedPublishAt () {
      return moment(this.post.publishAt).format('Do MMM YYYY')
    },
    formattedUpdatedAt () {
      return moment(this.post.updatedAt).format('Do MMM YYYY')
    }
  },
  validate ({ params }) {
    const id = Number(params.id)

    return validatePositiveInteger(id)
  },
  middleware: [
    'processSubdomain'
  ],
  fetch ({ params, store, error }) {
    const id = params.id

    const post = store.getters['posts/get'](id)

    if (post === undefined) {
      error({ statusCode: 404 })
    }
  }
}
</script>
