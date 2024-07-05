<script setup>
// const response  = await useFetch('/api/hello')
// console.log(response)
// import { useCounterStore2 } from "~/stores/myStore"

// const store = useCounterStore2()
// console.log(store)
const { data: rick } = await useAsyncData(
  "characters",
  async () => {
    const rickData = await $fetch("https://rickandmortyapi.com/api/character");

    return {
      info: rickData.info,
      results: rickData.results,
    };
  },
  {
    // lazy:true
  }
);

let rickImage = ref(rick?.value?.results[2].image);

function refresh() {
  console.log(rick);

  rickImage.value =
    rickImage.value == rick?.value?.results[1].image
      ? rick?.value?.results[2].image
      : rick?.value?.results[1].image;
}
</script>

<template>
  <div>
    <!-- <h1 class="bg-blue-900">Hello Nuxt</h1> -->
    <!-- {{ pending ? "Loading" : rick }} -->
    <button @click="refresh">Refresh Image</button>

    <img :src="rickImage" alt="" />

    <ContentDoc />
  </div>
  <!-- <Counter id="counter"/> -->
  <!-- <ProfileHeaderAvatar/> -->
</template>
