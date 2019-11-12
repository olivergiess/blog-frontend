<template>
  <v-app>
    <v-container>
      <v-row align="start" justify="center">
        <v-col cols="auto">
          <v-icon x-large>
            mdi-magnify
          </v-icon>
        </v-col>
      </v-row>
      <v-row align="start" justify="center">
        <v-col cols="auto">
          <p v-if="error.statusCode === 404" class="display-1 font-weight-light">
            {{ pageNotFound }}
          </p>
          <p v-else class="display-1 font-weight-light">
            {{ otherError }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>
