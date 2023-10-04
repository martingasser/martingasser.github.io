<template>
  <img :srcset="dynamicImage">
</template>

<script>
export default {
  name: 'SmallImage',
  props: {
    work: {
      type: Object,
      required: true
    }
  },
  computed: {
    dynamicImage () {
      const src = require(`~/content${this.work.dir}/${this.work.imgUrl}?{sizes: [50, 100, 200]}`).srcSet
      return src
    }
  }
}
</script>
