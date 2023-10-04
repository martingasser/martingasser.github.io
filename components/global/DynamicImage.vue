<template>
  <img :srcset="dynamicImage">
</template>

<script>
export default {
  name: 'DynamicImage',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  computed: {
    dynamicImage () {
      const srcSet = require(`~/content/${this.src}`).srcSet
      return srcSet
    }
  }
}
</script>
