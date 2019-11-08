<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <h1 class="title font-weight-light text-uppercase">
          {{ title }}
        </h1>
        <v-divider />
      </v-col>
    </v-row>
    <v-row no-gutters align="center" justify="center">
      <v-col cols="auto">
        <h2 class="display-1 font-weight-light">
          {{ subTitle }}
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>
