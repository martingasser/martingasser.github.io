<template>
  <div v-if="work" class="container m-auto">
    <img class="rounded-md block h-auto w-full" :src="require(`~/content${work.dir}/${work.img}?size=200`)">
    <h3>{{ work.title }}</h3>
    <p v-if="work.year">
      {{ work.year }}
    </p>
    <p v-if="work.duration">
      {{ work.duration }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="postcss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
h3 {
  @apply text-gray-700;
  @apply text-lg;
  @apply mt-2;
}

p {
  @apply text-sm;
  @apply text-gray-700;
}
</style>
