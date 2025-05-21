import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'COACH KIP | AGI Running Coach',
      description: 'Coach Kip is your AGI-powered running coach, offering personalized training plans and expert advice to help you run smarter.',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: {
      title: 'About Us | COACH KIP',
      description: 'Learn more about Coach Kip - your AGI running coach. Discover our mission and how we personalize your training.',
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
