<template>
  <v-card
    :hover="true"
    nuxt-link="true"
    :to="url"
  >
    <v-img :src="post.coverImage" height="25vh">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center" color="grey">
          <v-progress-circular indeterminate color="grey lighten-2"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-card-title>
      {{ post.title }}
    </v-card-title>
    <v-card-subtitle>
      By <strong>{{ author }}</strong>&nbsp;&nbsp;/&nbsp;
      <span>
        {{ formattedPublishAt }}
      </span>
    </v-card-subtitle>
  </v-card>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    },
    post: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    author () {
      return `${this.user.firstName} ${this.user.lastName}`
    },
    formattedPublishAt () {
      return moment(this.post.publishAt).format('Do MMM YYYY')
    },
    url () {
      return `/${this.user.slug}/posts/${this.post.id}`
    }
  }
}
</script>
