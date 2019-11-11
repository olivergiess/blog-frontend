<template>
  <v-container fluid>
    <v-img :style="`background-image: linear-gradient(${degrees}deg, ${from}, ${to});`" height="20vh">
      <slot />
    </v-img>
  </v-container>
</template>

<script>
export default {
  props: {
    degrees: {
      type: Number,
      default: 173
    },
    from: {
      type: String,
      default: 'rgba(252, 98, 98, 0.7)'
    },
    to: {
      type: String,
      default: 'rgba(255, 216, 111, 0.4)'
    }
  }
}
</script>
