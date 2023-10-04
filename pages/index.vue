<template>
  <main class="font-sans container m-auto flex flex-col py-8 prose max-w-6xl text-center px-6">
    <p class="mt-1 lg:mt-12 max-w-lg m-auto leading-loose mb-6 text-left">
      <ContentDoc class="flex-1 mx-auto" />
    </p>
  </main>
</template>

<style lang="postcss">
.bubble {
  @apply absolute;
  @apply bg-gray-200;
  @apply font-medium;
  @apply rounded-md;
  @apply p-2;
  @apply mx-auto;
}

.bubble:hover {
  @apply bg-gray-300;
}

h2 {
  @apply text-4xl;
  @apply text-gray-700;
}
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
