<template>
  <div class="thank-you-container">
    <div class="header">
      <div class="brand">COACH KIP</div>
    </div>
    <div class="thank-you">Thank You!</div>
  </div>
</template>

<script>
export default {
  name: "ThankYouView",
  mounted() {
    // Track thank you page visit
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_title: "Thank You",
      page_location: window.location.href,
    });

    // Track conversion event
    window.dataLayer.push({
      event: "conversion",
      event_category: "engagement",
      event_action: "thank_you_page_view",
      event_label: "signup_completion",
    });
  },
};
</script>

<style scoped>
.thank-you-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #252423;
  color: #fffbe9;
}

.header {
  margin-bottom: 2rem;
}

.brand {
  font-family: "Aeonik1", Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #fffbe9;
  text-align: center;
  margin-bottom: 3rem;
}

.thank-you {
  font-family: "Aeonik1", Arial, sans-serif;
  font-size: 4rem;
  font-weight: 400;
  color: #fffbe9;
  text-align: center;
  line-height: 1;
}

@media (max-width: 768px) {
  .thank-you {
    font-size: 2.5rem;
  }

  .brand {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .thank-you {
    font-size: 2rem;
  }
}
</style>
