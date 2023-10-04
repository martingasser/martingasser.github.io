<template>
  <main class="flex">
    <section class="font-sans container m-auto flex flex-col py-8 max-w-4xl text-center px-6">
      <p class="mt-1 lg:mt-4 m-auto leading-loose mb-6 text-left">
        <ContentDoc class="flex-1 mx-auto my-10 prose"/>
      </p>
    </section>
  </main>
</template>
<script>
export default {
}
</script>

<style lang="postcss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
