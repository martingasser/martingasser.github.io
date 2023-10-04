<template>
  <nuxt-link class="p-2 text-xl text-center" :to="href">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
