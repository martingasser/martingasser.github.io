<template>
  <!-- <div class="flex">
    <nuxt-content class="flex-1 mx-auto my-10 prose" :document="contact" />
  </div> -->
  <section class="font-sans container m-auto flex flex-col py-8 max-w-xl text-center px-6">
    <p class="mt-1 lg:mt-12 max-w-lg m-auto leading-loose mb-6 text-left">
      <ContentDoc class="flex-1 mx-auto prose" />
    </p>
  </section>
</template>
<script>
export default {
  async asyncData ({ $content, params }) {
    const contact = await $content('contact')
      .fetch()
    return {
      contact
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    const email = document.getElementById('email')
    const user = 'martin.gasser'
    const site = 'gmail.com'
    const address = `${user}@${site}`
    email.setAttribute('href', 'mailto:' + address)
    email.innerHTML = address
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
</style>
