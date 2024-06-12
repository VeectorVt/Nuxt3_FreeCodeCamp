<template>
  <div v-if="$route.params.id != '10'">
    <NuxtLink to="/">Id Errado , Volte para a Página inicial</NuxtLink>
  </div>
  <div v-else>event id:{{ $route.params.id }}</div>
</template>

<script setup>
// const nuxt =  useNuxtApp();
// console.log(nuxt)
</script>
