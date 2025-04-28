import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import App from './App.vue';
import router from './router';
import Vuetify from './plugins/vuetify';

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

const app = createApp(App);

// Set up the router to update the document title and meta description
router.afterEach((to) => {
  // Set the document title
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  // Set the meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || '');
  }
});

app.use(router);
app.use(Vuetify);
app.use(pinia);
app.mount('#app');