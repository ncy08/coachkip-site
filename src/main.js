import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";
import Vuetify from "./plugins/vuetify";
import { createHead } from "@vueuse/head"; // Import VueUse Head
import { inject } from "@vercel/analytics"; // Add Vercel Analytics
import { injectSpeedInsights } from "@vercel/speed-insights"; // Add Vercel Speed Insights

// Initialize Vercel Analytics
inject();

// Initialize Vercel Speed Insights
injectSpeedInsights();

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

const app = createApp(App);

// Use plugins BEFORE mounting
app.use(router);
app.use(pinia);
app.use(Vuetify);
app.use(createHead()); // Use @vueuse/head

app.mount("#app");

// Enhanced Google Analytics page tracking for SPA
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", to.meta.description || "");
  }

  // Send page view to Google Analytics
  if (typeof gtag !== "undefined") {
    gtag("config", "G-N3TE67LD2E", {
      page_title: to.meta.title || document.title,
      page_location: window.location.href,
    });
  }
});
