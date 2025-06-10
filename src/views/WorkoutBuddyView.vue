<template>
  <v-app>
    <!-- SEO: Use @vueuse/head for meta tags -->
    <Head>
      <title>Coach Kip Workout Buddy - Your AI Running Partner vs Apple</title>
      <meta
        name="description"
        content="Coach Kip workout buddy offers personalized AI coaching that adapts to your running style, unlike Apple's basic fitness tracking. Get smarter training."
      />
      <link rel="canonical" href="https://kip.coach/workout-buddy" />

      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="product" />
      <meta
        property="og:title"
        content="Coach Kip Workout Buddy - Your AI Running Partner vs Apple"
      />
      <meta
        property="og:description"
        content="Coach Kip workout buddy offers personalized AI coaching that adapts to your running style, unlike Apple's basic fitness tracking. Get smarter training."
      />
      <meta property="og:url" content="https://kip.coach/workout-buddy" />
      <meta property="og:image" content="https://kip.coach/CoachKip.jpg" />

      <!-- Twitter -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Coach Kip Workout Buddy - Your AI Running Partner vs Apple"
      />
      <meta
        name="twitter:description"
        content="Coach Kip workout buddy offers personalized AI coaching that adapts to your running style, unlike Apple's basic fitness tracking. Get smarter training."
      />
      <meta name="twitter:image" content="https://kip.coach/CoachKip.jpg" />
    </Head>

    <div style="background-color: #fffbe9; min-height: 100vh">
      <!-- Hero Section -->
      <section
        class="hero-section"
        style="padding: 80px 20px 60px; text-align: center"
      >
        <v-container max-width="1200px">
          <h1
            style="
              font-family: 'Aeonik1', Arial, sans-serif;
              font-size: 3.5rem;
              font-weight: 400;
              color: #252423;
              margin-bottom: 24px;
              line-height: 1.2;
            "
          >
            Coach Kip Workout Buddy
          </h1>
          <p
            style="
              font-family: 'Aeonik1', Arial, sans-serif;
              font-size: 1.25rem;
              color: #252423;
              max-width: 600px;
              margin: 0 auto 40px;
              line-height: 1.6;
            "
          >
            Your AI-powered workout buddy that delivers personalized running
            coaching beyond what Apple's fitness tracking can offer.
          </p>

          <!-- CTA Button -->
          <div
            style="
              display: flex;
              justify-content: center;
              width: 100%;
              margin-top: 20px;
            "
          >
            <v-btn
              style="
                background: #252423;
                color: white;
                border-radius: 40px;
                padding: 16px 60px;
                font-family: 'Aeonik1';
                font-size: 1.1rem;
                text-transform: none;
                text-align: center;
                min-width: 320px;
                height: 56px;
                display: flex;
                align-items: center;
                justify-content: center;
              "
              elevation="0"
              @click="scrollToWaitlist"
            >
              Coach Kip Workout Buddy Waitlist
            </v-btn>
          </div>
        </v-container>
      </section>

      <!-- Main Content -->
      <section style="padding: 60px 20px">
        <v-container max-width="1200px">
          <v-row>
            <v-col cols="12" md="8" offset-md="2">
              <!-- vs Apple Section -->
              <div style="margin-bottom: 60px">
                <h2
                  style="
                    font-family: 'Aeonik1';
                    font-size: 2.5rem;
                    color: #252423;
                    margin-bottom: 24px;
                    text-align: center;
                  "
                >
                  Beyond Apple's Basic Tracking
                </h2>
                <div
                  style="
                    background: white;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                  "
                >
                  <v-row>
                    <v-col cols="12" md="6">
                      <h3
                        style="
                          color: #252423;
                          font-family: 'Aeonik1';
                          margin-bottom: 16px;
                        "
                      >
                        Apple Fitness
                      </h3>
                      <ul
                        style="
                          color: #252423;
                          line-height: 1.8;
                          font-family: 'Aeonik1';
                        "
                      >
                        <li>Basic activity tracking</li>
                        <li>Generic workout suggestions</li>
                        <li>Limited running insights</li>
                        <li>One-size-fits-all approach</li>
                      </ul>
                    </v-col>
                    <v-col cols="12" md="6">
                      <h3
                        style="
                          color: #252423;
                          font-family: 'Aeonik1';
                          margin-bottom: 16px;
                        "
                      >
                        Coach Kip Workout Buddy
                      </h3>
                      <ul
                        style="
                          color: #252423;
                          line-height: 1.8;
                          font-family: 'Aeonik1';
                        "
                      >
                        <li>AI-powered personalized coaching</li>
                        <li>Adaptive training plans</li>
                        <li>Deep running performance analysis</li>
                        <li>Evolves with your progress</li>
                      </ul>
                    </v-col>
                  </v-row>
                </div>
              </div>

              <!-- Features Section -->
              <div style="margin-bottom: 60px">
                <h2
                  style="
                    font-family: 'Aeonik1';
                    font-size: 2.5rem;
                    color: #252423;
                    margin-bottom: 40px;
                    text-align: center;
                  "
                >
                  Your Intelligent Workout Buddy
                </h2>
                <v-row>
                  <v-col
                    cols="12"
                    md="4"
                    v-for="feature in features"
                    :key="feature.title"
                  >
                    <div style="text-align: center; padding: 20px">
                      <div
                        style="
                          width: 80px;
                          height: 80px;
                          background: #252423;
                          border-radius: 50%;
                          margin: 0 auto 20px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                        "
                      >
                        <v-icon size="40" color="white">{{
                          feature.icon
                        }}</v-icon>
                      </div>
                      <h3
                        style="
                          font-family: 'Aeonik1';
                          color: #252423;
                          margin-bottom: 12px;
                        "
                      >
                        {{ feature.title }}
                      </h3>
                      <p
                        style="
                          font-family: 'Aeonik1';
                          color: #252423;
                          line-height: 1.6;
                        "
                      >
                        {{ feature.description }}
                      </p>
                    </div>
                  </v-col>
                </v-row>
              </div>

              <!-- FAQ Section -->
              <div style="margin-bottom: 60px">
                <h2
                  style="
                    font-family: 'Aeonik1';
                    font-size: 2.5rem;
                    color: #252423;
                    margin-bottom: 40px;
                    text-align: center;
                  "
                >
                  Frequently Asked Questions
                </h2>
                <div
                  v-for="faq in faqs"
                  :key="faq.question"
                  style="margin-bottom: 24px"
                >
                  <div
                    style="
                      background: white;
                      padding: 30px;
                      border-radius: 12px;
                      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                    "
                  >
                    <h3
                      style="
                        font-family: 'Aeonik1';
                        color: #252423;
                        margin-bottom: 16px;
                        font-size: 1.3rem;
                      "
                    >
                      {{ faq.question }}
                    </h3>
                    <p
                      style="
                        font-family: 'Aeonik1';
                        color: #252423;
                        line-height: 1.7;
                        margin: 0;
                      "
                    >
                      {{ faq.answer }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Waitlist Section -->
              <div
                id="waitlist"
                style="
                  background: #252423;
                  padding: 60px 40px;
                  border-radius: 16px;
                  text-align: center;
                "
              >
                <h2
                  style="
                    font-family: 'Aeonik1';
                    font-size: 2.2rem;
                    color: white;
                    margin-bottom: 20px;
                    white-space: nowrap;
                  "
                >
                  Get Coach Kip Workout Buddy Early Access
                </h2>
                <p
                  style="
                    font-family: 'Aeonik1';
                    color: white;
                    margin-bottom: 30px;
                    font-size: 1.1rem;
                  "
                >
                  Join the waitlist to be first to experience AI-powered workout
                  buddy coaching.
                </p>

                <div style="max-width: 600px; margin: 0 auto">
                  <div data-tf-live="01JXB5N0K4PQ7RW7WR8C5X8QX1"></div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </div>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Head } from "@vueuse/head";

// Performance optimization: Lazy load animations if they exist
onMounted(() => {
  // Add fetchpriority to first visible content
  const heroTitle = document.querySelector("h1");
  if (heroTitle) {
    heroTitle.setAttribute("fetchpriority", "high");
  }

  // Lazy load any off-screen images
  const images = document.querySelectorAll("img[data-src]");
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });
    images.forEach((img) => imageObserver.observe(img));
  }

  // Load Typeform embed script
  const typeformScript = document.createElement("script");
  typeformScript.src = "//embed.typeform.com/next/embed.js";
  typeformScript.async = true;
  document.head.appendChild(typeformScript);
});

const features = [
  {
    icon: "mdi-brain",
    title: "AI-Powered Coaching",
    description:
      "Advanced algorithms analyze your running patterns and provide personalized guidance that evolves with your progress.",
  },
  {
    icon: "mdi-target",
    title: "Adaptive Training Plans",
    description:
      "Dynamic workout plans that adjust based on your performance, schedule, and running goals.",
  },
  {
    icon: "mdi-chart-line",
    title: "Performance Insights",
    description:
      "Deep analytics that go beyond basic metrics to help you understand and improve your running efficiency.",
  },
];

const faqs = [
  {
    question: "Is this Apple's workout buddy feature?",
    answer:
      "No, Kip Coach workout buddy offers advanced AI coaching that goes beyond Apple's basic fitness tracking. While Apple focuses on activity monitoring, Kip provides personalized training plans and adaptive coaching based on your running performance.",
  },
  {
    question: "Does Kip Coach workout buddy work on Android?",
    answer:
      "Yes, Kip Coach workout buddy is designed to work across platforms including Android devices, providing AI-powered coaching regardless of your device preference.",
  },
  {
    question: "How is Kip Coach different from other workout buddy apps?",
    answer:
      "Kip Coach uses advanced AI to provide truly personalized coaching that adapts to your unique running style, progress, and goals. Unlike basic fitness trackers, Kip acts as your intelligent running coach.",
  },
];

const scrollToWaitlist = () => {
  document.getElementById("waitlist").scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>
