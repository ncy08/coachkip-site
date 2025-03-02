

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import piniaPersist from 'pinia-plugin-persistedstate';
import App from './App.vue'
import router from './router'
import Vuetify from './plugins/vuetify'
// import Vue3Toastify from 'vue3-toastify';GV
// import "vue3-toastify/dist/index.css";


const pinia = createPinia();
pinia.use(piniaPluginPersistedState)
pinia.use(piniaPersist)

const app = createApp(App)
app.use(router)
app.use(Vuetify)
// app.use(Vue3Toastify , { autoClose: 900 })
app.use(pinia)
app.mount('#app')
