<template>
  <v-container fluid class="pt-0 pr-0 pl-0">
    <v-img :src="imageSrc" height="28vh" class="banner" />
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
  .banner {
    opacity: 0.8;
  }
</style>
