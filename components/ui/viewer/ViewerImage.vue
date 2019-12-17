<template>
  <v-img
    :src="node.attrs.src"
    :aspect-ratio="node.attrs.aspectRatio"
    :position="`${node.attrs.position.x}% ${node.attrs.position.y}%`"
    class="my-2"
  />
</template>

<script>
export default {
  props: ['node']
}
</script>
