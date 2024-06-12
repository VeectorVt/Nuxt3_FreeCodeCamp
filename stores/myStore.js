//stores/counter.js;
// import { defineStore } from 'pinia'
// import { ref, computed } from 'vue';

// Vue 2 Optionn APi
// export const useCounterStore1 = defineStore('counter', {
//   state: () => {
//     return { count: 0  , name:'Eduardo'}
//   },
//   getters:{
//     doubleCount:(state) => state.count
//   },
// //   could also be defined as
//   state: () => ({ count: 0 }),
//   actions: {
//     increment() {
//       this.count++
//     },
//   },
// })

// Vue 3 Composition API
// export const useCounterStore2 = defineStore('counter', () => {
//     const count = ref(0)
//     // const name = ref('Eduardo')
//     const doubleCount = computed(() => count.value * 2)
//     function increment() {
//       count.value++
//     }
  
//     return { count, doubleCount, increment }
//   })