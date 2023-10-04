<template>
  <div class="flex flex-col h-screen">
    <header class="">
      <nav
        class="font-sans bg-white text-center flex justify-between mx-auto container overflow-hidden"
      >
        <a href="/" class="block text-left">
          <h1 class="py-2 px-3 text-gray-700 font-bold">
            Martin Gasser
          </h1>
        </a>
        <ul class="text-sm list-none p-0 flex items-center">
          <li>
            <nuxt-link
              to="/works"
              class="inline-block py-2 px-3 no-underline"
            >
              Works
            </nuxt-link>
          </li>
          <li class="pr-2">
            <nuxt-link
              to="/bio"
              class="inline-block py-2 px-3 no-underline"
            >
              Bio
            </nuxt-link>
          </li>
          <li class="pl-2">
            <nuxt-link
              to="/contact"
              class="inline-block py-2 px-3 no-underline"
            >
              Contact
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="flex-grow">
      <slot />
    </div>
    <footer class="">
      <div
        class="mx-auto max-w-xl overflow-hidden flex justify-center"
      >
        <p class="inline-block py-2 px-3 text-gray-700 text-xs">
          ©2023 Martin Gasser. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      fps: 30,
      run: true
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  @apply h-screen;
}

h1 {
  @apply text-xl;
}

body {
  @apply m-1;
}

header a {
  @apply text-gray-500;
}

header a:hover {
  @apply text-black font-normal;
}

header .nuxt-link-exact-active {
  @apply text-black font-normal;
}

.active{
  display: block;
  @apply flex;
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
