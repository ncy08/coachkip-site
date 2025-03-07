import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import App from './App.vue'
import router from './router'
import Vuetify from './plugins/vuetify'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const app = createApp(App)
app.use(router)
app.use(Vuetify)
app.use(pinia)
app.mount('#app')