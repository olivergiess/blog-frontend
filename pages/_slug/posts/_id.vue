<template>
  <div>
    <NavBar />

    <Banner />

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
            PUBLISHED /
          </h3>
          <h3 class="overline text-uppercase grey--text">
            EDITED &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/
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
import NavBar from '@/components/NavBar'
import Avatar from '@/components/Avatar'
import Banner from '@/components/ImageBanner'
import DisplayPost from '@/components/DisplayPost'

export default {
  auth: false,
  components: {
    NavBar,
    Avatar,
    Banner,
    DisplayPost
  }
}
</script>
