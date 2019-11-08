<template>
  <div>
    <NavBar :name="user.first_name" :slug="user.slug" />

    <Banner background_image_src="http://www.schintudesign.com/envato/exodus/assets/img/backs/back03.jpg" />

    <Header title="The Blog" sub_title="The Latest From The Blog" />

    <v-container>
      <v-row align="start" justify="center">
        <v-col v-for="post in posts" :key="post.id" cols="12" md="5">
          <PreviewPost :user="user" :post="post" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Banner from '@/components/ImageBanner'
import Header from '@/components/Header'
import PreviewPost from '@/components/PreviewPost'

import User from '@/models/User'
import Post from '@/models/Post'

export default {
  components: {
    NavBar,
    Banner,
    Header,
    PreviewPost
  },
  mounted () {
    Post.api().all(this.$route.params.slug)
  },
  computed: {
    user () {
      const slug = this.$route.params.slug

      const user = User.query().where('slug', slug).first()

      return user || new User()
    },
    posts () {
      const slug = this.$route.params.slug

      return Post.query().whereHas('user', (query) => { query.where('slug', slug) }).get()
    }
  },
  async fetch ({ params }) {
    await User.api().show(params.slug)
  }
}
</script>
