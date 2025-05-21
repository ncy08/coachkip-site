import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'COACH KIP | AGI Running Coach & Trainer',
      description: 'Coach Kip is your advanced AI-powered running coach. Get personalized training plans, track your progress, and run smarter today.',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: {
      title: 'About Coach Kip | Your AI Running Coach',
      description: 'Discover how Coach Kip uses AGI to become the ultimate running coach. Learn about our mission and personalized training philosophy.',
    },
  },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'COACH KIP';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || 'Your default description');
  }
  next();
});

export default router;
