<template>
  <main>

    <nuxt-img 
      class="mx-auto m-10 rounded-md"
      :style="{ cursor: cursorRef}"
      width="400"
      @click="onShow"
      @mouseenter="onEnter"
      @mouseleave="onLeave"
      :src="project.img" />    
    
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="project.img"
      :index="indexRef"
      @hide="onHide"
    ></vue-easy-lightbox>

    <article class="font-sans container m-auto py-8 px-12 prose max-w-6xl">
      <h3>
        {{ project.title }}
      </h3>
      <section>
        <div v-if="project.duration">
          <h4>Duration</h4>
          <p>{{ project.duration }}</p>
        </div>
        <div v-if="project.url">
          <a :href="project.url">{{ project.url }}</a>
        </div>
      </section>
      <section>
        <p><ContentRenderer :value="project" /></p>
      </section>
    </article>
  </main>
</template>

<script setup>
  import VueEasyLightbox from 'vue-easy-lightbox/external-css'
  import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'
  
  const indexRef = ref(0)
  const visibleRef = ref(false)
  const cursorRef = ref('normal')

  const onShow = () => (visibleRef.value = true)
  const onHide = () => (visibleRef.value = false)

  const onEnter = () => { cursorRef.value = 'zoom-in' }
  const onLeave = () => { cursorRef.value = 'normal' }

  const route = useRoute()
  let path = route.path
  path = path.replace(/\/+$/, '')
  const project = await queryContent('works').where({ _path: path }).findOne()
</script>

<style lang="postcss">
h2 {
  @apply text-gray-700;
  @apply text-2xl;
  @apply font-bold;
  @apply mb-4;
}

p {
  @apply my-4;
}
</style>
