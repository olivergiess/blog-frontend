<template>
  <v-container fluid class="pt-0 pr-0 pl-0">
    <v-img :src="backgroundImageSrc" height="20vh" style="opacity: 0.8;" />
  </v-container>
</template>

<script>
export default {
  props: {
    backgroundImageSrc: {
      type: String,
      default: ''
    }
  }
}
</script>
