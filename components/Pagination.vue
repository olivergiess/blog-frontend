<template>
  <div>
    <v-btn class="ma-2" tile text :disabled="isFirst" @click="updatePageNumber(previous)">
      <v-icon>
        mdi-menu-left
      </v-icon>
    </v-btn>
    {{ value }} / {{ length }}
    <v-btn class="ma-2" tile text :disabled="isLast" @click="updatePageNumber(next)">
      <v-icon>
        mdi-menu-right
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    length: {
      type: Number,
      default: 0
    }
  },
  computed: {
    previous () {
      return this.value - 1
    },
    next () {
      return this.value + 1
    },
    isFirst () {
      return this.previous <= 0
    },
    isLast () {
      return this.next > this.length
    }
  },
  methods: {
    updatePageNumber (number) {
      this.value = number

      this.$emit('input', this.value)
    }
  }
}
</script>
