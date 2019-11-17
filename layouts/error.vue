<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="10" md="3">
        <v-card tile>
          <v-card-title>
            {{ getError(error.statusCode).title }}
          </v-card-title>
          <v-card-text>
            {{ getError(error.statusCode).message }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
    const title = this.getError(this.error.statusCode).title

    return {
      title
    }
  },
  data () {
    return {
      errors: {
        404: {
          title: '404 Not Found',
          message: 'We couldn\'t find what you were looking for.'
        },
        default: {
          title: 'An error occurred',
          message: 'Something is not right!'
        }
      }
    }
  },
  methods: {
    getError (statusCode) {
      if (statusCode in this.errors) {
        return this.errors[statusCode]
      }

      return this.errors.default
    }
  }
}
</script>
