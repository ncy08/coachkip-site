// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

import { defineStore } from 'pinia';

export const useMainStore = defineStore('store', {
    state: () => ({
        userInformation: {},
        storedColor:''
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++;
        },
    },
    persist: {
        key: 'store',
        paths: ['storedColor'] 
    }
});