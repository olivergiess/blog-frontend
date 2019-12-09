<template>
  <v-container fluid class="pa-0 mb-3">
    <v-img :src="imageSrc" height="30rem" />
  </v-container>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
</style>
