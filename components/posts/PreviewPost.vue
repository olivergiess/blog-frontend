<template>
  <v-card :hover="true" :to="url">
    <v-card-text class="px-2 pt-2">
      <v-img :src="post.coverImage" height="25vh">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center" color="grey">
            <v-progress-circular indeterminate color="grey lighten-2" />
          </v-row>
        </template>
      </v-img>
    </v-card-text>

    <v-divider class="mx-4" />

    <v-card-title>
      {{ post.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ formattedPublishAt }}
    </v-card-subtitle>

    <v-card-text>
      Test...
    </v-card-text>

    <v-card-actions>
      <v-row no-gutters>
        <v-btn text rounded color="amber accent-4">
          READ MORE
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/get'
    }),
    author () {
      return `${this.user.firstName} ${this.user.lastName}`
    },
    formattedPublishAt () {
      return moment(this.post.publishAt).format('Do MMM YYYY')
    },
    url () {
      return `/posts/${this.post.id}`
    }
  }
}
</script>
