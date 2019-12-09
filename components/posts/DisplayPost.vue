<template>
  <div id="post" class="font-weight-light body-1">
    {{ html }}
  </div>
</template>

<script>
export default {
  props: {
    html: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
  #post h3 {
    margin-bottom: 1em;
  }

  #post p {
    line-height: 2em !important;
  }

  #post blockquote p em::before {
    content: '<i class="v-icon mdi mdi-format-quote-close"></i>'
  }
</style>
