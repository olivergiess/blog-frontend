<template>
  <v-hover v-slot:default="{ hover }" open-delay="30" close-delay="30">
    <v-card flat tile color="transparent" :nuxt-link="true" :to="url">
      <v-img :class="{ 'on-hover' : hover }" :src="post.cover_image" height="25vh">
        <v-fade-transition>
          <div v-if="hover" class="d-flex transition-slow-in-fast-out darken-2 v-card--reveal headline white--text">
            Read
          </div>
        </v-fade-transition>
      </v-img>
      <v-card-title class="pl-0 title">
        {{ post.title }}
      </v-card-title>
      <v-card-text class="pl-0 overline text-uppercase">
        By: <strong>{{ post.user.full_name }}</strong>&nbsp;&nbsp;/&nbsp;&nbsp;
        <span class="light-green--text text--darken--5">
          {{ post.formatted_publish_at }}
        </span>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import User from '@/models/User'
import Post from '@/models/Post'

export default {
  props: {
    user: {
      type: User,
      default: () => new User()
    },
    post: {
      type: Post,
      default: () => new Post()
    }
  },
  computed: {
    url () {
      return `/${this.user.slug}/posts/${this.post.id}`
    }
  }
}
</script>

<style scoped>
  .on-hover {
    opacity: 0.5;
  }

  .v-card--reveal {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
</style>
