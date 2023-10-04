<template>
  <main class="container mx-auto max-w-6xl px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      <ContentList :query="query" v-slot="{ list }">
        <div v-for="work in list" :key="work._path">
          <NuxtLink class="block p-10"  :to="work._path">
            <nuxt-img 
              class="object-cover h-32 w-32 m-auto rounded-md"
              :src="work.img"
              width="200"
            />
          </NuxtLink>
        </div>
      </ContentList>

    </div>
  </main>
</template>
<script setup>
const route = useRoute()
const filter = route.query.type ? { type: route.query.type} : {}
const query = { path:"/works", sort: [{ year: -1 }], where: [filter] }
</script>
<style lang="postcss">
img {
  @apply appearance-none;
}
</style>
