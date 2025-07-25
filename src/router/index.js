import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorkoutBuddyView from "../views/WorkoutBuddyView.vue";
import ThankYouView from "../views/ThankYouView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      title: "COACH KIP | AGI Running Coach",
      description:
        "Coach Kip is your advanced AI-powered running coach. Get personalized training plans, track your progress, and run smarter today.",
    },
  },

  {
    path: "/workout-buddy",
    name: "WorkoutBuddy",
    component: WorkoutBuddyView,
    meta: {
      title: "Kip Coach Workout Buddy - Your AI Running Partner vs Apple",
      description:
        "Kip Coach workout buddy offers personalized AI coaching that adapts to your running style, unlike Apple's basic fitness tracking. Get smarter training.",
    },
  },
  {
    path: "/thank-you",
    name: "ThankYou",
    component: ThankYouView,
    meta: {
      title: "Thank You | Coach Kip",
      description:
        "Thank you for signing up with Coach Kip - your AI running coach.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "COACH KIP";
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      to.meta.description || "Your default description"
    );
  }
  next();
});

export default router;
