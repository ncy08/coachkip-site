<template>
  <v-app light>
    <!-- Floating Text Overlay -->
    <div v-if="showFloatingText" class="floating-text" :style="{ left: floatingX + 'px', top: floatingY + 'px' }">
      <span v-for="(char, index) in floatingText" :key="index">{{ char }}</span>
    </div>

    <v-toolbar class="tBar" color="#212021">
      <v-toolbar-title>
        TEST SAMPLE <sup>Beta</sup>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon color="rgba(255, 105, 180, 0.3)" class="hidden-md-and-up" @click.stop="drawer = !drawer" />
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="(item, index) in menuItems" :key="index">
          <v-btn flat color="pink" class="menu-button" @click="handleMenuItemClick(item)">
            {{ item.text }}
          </v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer location="right" v-model="drawer" fixed temporary class="mobile-nav">
      <v-list nav dense>
        <v-list-item-group>
          <template v-for="(item, index) in menuItems" :key="index">
            <v-list-item @click="handleMenuItemClick(item)">
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- 1ST Section -->
    <section style="height: 100vh;" class="overflow-hidden">
      <v-parallax color="black" height="100vh">
        <div class="hero-content">
          <div class="title-wrapper">
            <div class="main-title">
                <span class="word" :style="{ '--i': 0 }">INNOVATE</span>
                <span class="word" :style="{ '--i': 1 }">CREATE</span>
                <span class="word" :style="{ '--i': 2 }">TRANSFORM</span>
              </div>
            <div class="subtitle">
              <p class="typing-text">This is sample only</p>
            </div>
          </div>
        </div>
      </v-parallax>
    </section>

    <!-- 2ND Section -->
    <section style="height: 100vh;">
      <v-parallax color="black" height="100vh">
        <v-img src="../src/image/workspace-1280538.jpg" height="90%" cover></v-img>
      </v-parallax>
    </section>
    <section style="height: 100vh;">
      <v-parallax color="black" height="100vh">
        <div class="hero-content">
          <div class="title-wrapper">
            <div class="main-title1">
              <p class="typing-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum</p>
            </div>
          </div>
        </div>
      </v-parallax>
    </section>

    <!-- 3RD Section - Image Gallery -->
    <section style="height: 100vh;">
      <v-parallax height="100vh" color="black">
        <v-container fluid class="gallery-container" style="padding:5% !important">
          <v-row class="fill-height mt-1">
            <!-- Left Card -->
            <v-col cols="12" md="6" class="d-flex align-center justify-center">
              <v-card color="#111112" style="border-radius:0%" :height="cardHeight" width="100%"
                       class="visible-content card-hover card-how-we-do"
                       @mousemove="(e) => handleCardMousemove(e, { text: 'How  we  do' })"
                       @mouseleave="handleCardMouseleave">
                <v-card-title class="card-title">HOW WE DO</v-card-title>
                <v-card-text class="flex-grow-1">
                  <!-- You can keep this section for other content if needed -->
                </v-card-text>
                <!-- Title and paragraph above the button -->
                <v-card-text style="padding: 56px; text-align: center;">
                  <h1 :style="{'font-size': cardHeight == '45vh' ? '25px' : '40px'}" style="color: white; margin: 0; text-align: left;">
                    Our Approach: Delivering Results with Precision
                  </h1>
                </v-card-text>
                <v-card-actions class="ml-6 mb-6">
                  <v-btn rounded size="x-large" variant="outlined" class="enhanced-button">
                    HOW WE DO <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <!-- Right Card -->
            <v-col cols="12" md="6" class="d-flex align-center justify-center">
              <v-card color="#111112" style="border-radius:0%" :height="cardHeight" width="100%"
                       class="visible-content card-hover card-how-we-do-it"
                       @mousemove="(e) => handleCardMousemove(e, { text: 'How  we  do  it' })"
                       @mouseleave="handleCardMouseleave">
                <v-card-title class="card-title">HOW WE DO IT</v-card-title>
                <v-card-text class="flex-grow-1">
                </v-card-text>
                <v-card-text style="padding: 16px;">
                  <h1 :style="{'font-size': cardHeight == '45vh' ? '25px' : '40px'}" style="color: white; margin: 0; text-align: left;">
                    We follow a structured approach to ensure that every project is executed with precision and care.
                  </h1>
                </v-card-text>
                <v-card-actions class="ml-6 mb-6">
                  <v-btn rounded size="x-large" variant="outlined" class="enhanced-button">
                    HOW WE DO IT <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>
    
    <!-- //4TH SECTION -->
    <section style="height: 100vh;" >
    <v-parallax height="100vh" color="black">
      <v-container fluid class="sponsorship-container" style="padding:5% !important">
        <div class="section-header mb-8">
          <h2 class="text-h3 text-white text-center mb-4">Our Spinouts and Investments</h2>
          <div class="text-center">
            <v-divider class="mx-auto mb-4" color="rgba(255,255,255,0.2)" style="max-width: 100px"></v-divider>
          </div>
        </div>
      
      <!-- Sponsorship Grid -->
      <v-row class="fill-height">
        <!-- Dynamic Sponsor Cards -->
        <template v-for="(sponsor, index) in sponsors" :key="sponsor.id">
          <v-col cols="12" md="4" class="d-flex align-center justify-center">
            <v-card color="#111112" style="border-radius:0%"  :height="cardHeightsponsort" 
              width="90%" class="visible-content card-hover card-sponsor"
              @mousemove="(e) => handleCardMousemove(e, { text: sponsor.title })"
              @click="handleSponsorClick(sponsor)" 
              @mouseleave="handleCardMouseleave">
              <v-card-title class="card-title">{{ sponsor.title }}</v-card-title>
              <v-card-text class="flex-grow-1">
                <v-img  :src="sponsor.image"  aspect-ratio="1.777"  class="image-cover" ></v-img>
              </v-card-text>
              <v-card-actions class="ml-6 mb-6">
                <v-btn   rounded   size="large"  variant="outlined"   class="enhanced-button" >
                  LEARN MORE <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-parallax>
</section>

<!-- Add this section to your existing template -->
<section class="contact-section" style="height: 80vh;">
  <v-parallax height="100vh" color="#b7e3b6">
    <v-container fluid class="contact-container" style="padding: 5% !important">
      <div class="section-header mb-8">
          <h2 class="text-h3 text-black text-center mb-4">Contact us</h2>
          <div class="text-center">
            <v-divider class="mx-auto mb-4" color="rgba(255,255,255,0.2)" style="max-width: 100px"></v-divider>
          </div>
        </div>
      <!-- Contact Information -->
      <div class="contact-info">
        <div class="info-card" v-for="(info, index) in contactInfo" :key="index">
          <div class="info-icon">
            <v-icon size="48" color="pink" class="icon-hover">{{ info.icon }}</v-icon>
          </div>
          <h3 class="text-h6 mb-2">{{ info.title }}</h3>
          <p class="text-body-1">{{ info.content }}</p>
        </div>
      </div>

      <!-- Contact Form -->
      <v-form ref="form" v-model="valid" class="contact-form">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Name"
              required
              class="input-hover"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              required
              class="input-hover"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="message"
              :rules="messageRules"
              label="Message"
              required
              class="input-hover"
            ></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-btn
              color="pink"
              class="submit-button"
              @click="submitForm"
            >
              Send Message
              <v-icon right>mdi-send</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </v-parallax>
</section>

<v-footer dark padless class="footer-section">
  <v-card flat tile width="100%" class="pink darken-1 white--text text-center">
    <!-- Social media links -->
    <v-card-text>
      <div class="social-links">
        <a href="#" target="_blank" class="social-link">
          <v-icon color="pink">mdi-facebook</v-icon>
        </a>
        <a href="#" target="_blank" class="social-link">
          <v-icon color="pink">mdi-twitter</v-icon>
        </a>
        <a href="#" target="_blank" class="social-link">
          <v-icon color="pink">mdi-instagram</v-icon>
        </a>
        <a href="#" target="_blank" class="social-link">
          <v-icon color="pink">mdi-google-downasaur</v-icon>
        </a>
      </div>
    </v-card-text>

    <!-- Copyright information -->
    <v-card-text class="white--text pt-0">
      {{ new Date().getFullYear() }} — <strong>TEST COMPANY</strong>
    </v-card-text>
  </v-card>
</v-footer>
    
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menuItems: [
        { text: 'HOME', link: '/' },
        { text: 'HOW WE DO', link: '/how-we-do' },
        { text: 'HOW WE DO IT', link: '/how-we-do-it' },
        { text: 'WHERE WE\'VE BEEN', link: '/where-weve-been' },
        { text: 'WHO ARE WE', link: '/who-are-we' },
        { text: 'WHEN TO CONTACT', link: '/contact' }
      ],
      isMobile: false,
      hoveredCard: null,
      cursorX: 0,
      cursorY: 0,
      showFloatingText: false,
      sponsors: [
      {
        id: 1,
        title: 'CSS',
        image: '../src/image/CSS.png',
        description: 'Sponsor description',
        link: '/sponsor-1'
      },
      {
        id: 2,
        title: 'HTML',
        image: '../src/image/html.png',
        description: 'Sponsor description',
        link: '/sponsor-2'
      },
      {
        id: 3,
        title: 'Vuetify',
        image: '../src/image/Vuetify.png',
        description: 'Sponsor description',
        link: '/sponsor-3'
      },
      {
        id: 4,
        title: 'Laravel',
        image: '../src/image/Laravel.png',
        description: 'Sponsor description',
        link: '/sponsor-4'
      },
      {
        id: 5,
        title: 'PHP',
        image: '../src/image/php.png',
        description: 'Sponsor description',
        link: '/sponsor-5'
      },
      {
        id: 6,
        title: 'NODE JS',
        image: '../src/image/Node JS.png',
        description: 'Sponsor description',
        link: '/sponsor-6'
      },
      ],
      valid: true,
    name: '',
    email: '',
    message: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length >= 2) || 'Name must be at least 2 characters'
    ],
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email must be valid'
    ],
    messageRules: [
      v => !!v || 'Message is required',
      v => (v && v.length >= 10) || 'Message must be at least 10 characters'
    ],
    contactInfo: [
      {
        icon: 'mdi-phone',
        title: 'Phone',
        content: '+1 (555) 123-4567'
      },
      {
        icon: 'mdi-email',
        title: 'Email',
        content: 'contact@example.com'
      },
      {
        icon: 'mdi-map-marker',
        title: 'Location',
        content: '123 Main St, New York, NY 10001'
      }
    ]
      
    };
  },
  computed: {
    floatingX() {
      return this.cursorX - 74; // Adjusts the X position to center the text above the cursor
    },
    floatingY() {
      return this.cursorY - 66; // Adjusts the Y position to place the text above the cursor
    },
    cardHeight() {
      return this.isMobile ? '45vh' : '86vh';
    },
    cardHeightsponsort() {
      return this.isMobile ? '25vh' : '35vh';
    },
    floatingText() {
      return this.hoveredCard ? this.hoveredCard.text : '';
    },
    
  },
  methods: {
    handleSponsorClick (sponsor){
      console.log(sponsor);
      
    },
    setCustomCursor(type) {
      const cursorUrl = type === 'dark'
        ? 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="green"/></svg>'
        : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="white"/></svg>';
      document.body.style.cursor = `url('${cursorUrl}') 10 10, auto`;
    },
    handleMenuItemClick(item) {
      console.log('Navigating to:', item.link);
      this.drawer = false;
    },
    checkMobile() {
      this.isMobile = window.innerWidth < 768;
    },
    handleCardMousemove(e, card) {
      this.hoveredCard = card;
      this.cursorX = e.clientX;
      this.cursorY = e.clientY;
      this.showFloatingText = true;
    },
    handleCardMouseleave() {
      this.hoveredCard = null;
      this.showFloatingText = false;
    },
    createIntersectionObserver() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            } else {
              // Optional: remove visible class when scrolling up
              // entry.target.classList.remove('visible')
            }
          })
        },
        {
          threshold: 0.2,
          rootMargin: '0px'
        }
      )

      // Observe all sections
      document.querySelectorAll('.section').forEach(section => {
        observer.observe(section)
        this.observers.push(observer)
      })
    },
    submitForm() {
      if (this.$refs.form.validate()) {
        // Handle form submission
        console.log('Form submitted:', {
          name: this.name,
          email: this.email,
          message: this.message
        });
        
        // Reset form
        this.$refs.form.reset();
      }
    }
  },
  mounted() {
    const resizeObserver = new ResizeObserver(entries => {
      const isMobile = entries[0].contentRect.width < 768;
      this.setCustomCursor(isMobile ? 'white' : 'dark');
    });
    window.addEventListener('resize', this.checkMobile);
    resizeObserver.observe(document.body);
    this.createIntersectionObserver();
    this.setCustomCursor('dark');
    this.checkMobile();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile);
    resizeObserver.disconnect();
  },
  
};
</script>

<style scoped>
/* Base Styles */
.hero-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* Title Animations */
.main-title {
  font-size: 8rem;
  margin: 0;
}

.word {
  display: inline-block;
  opacity: 0;
  animation: fadeInRotate 0.8s ease-out forwards;
  animation-delay: calc(var(--i) * 1s);
}

@keyframes fadeInRotate {
  0% {
    opacity: 0;
    transform: rotateY(90deg);
  }
  100% {
    opacity: 1;
    transform: rotateY(0);
  }
}

/* Optional: Add hover effect */
/* .word:hover {
  animation: pulse 0.5s ease-in-out infinite;
} */

@keyframes pulse {
  0% { transform: rotateY(0) scale(1); }
  50% { transform: rotateY(360deg) scale(1.05); }
  100% { transform: rotateY(360deg) scale(1); }
}

.main-title1 {
  font-size: 2rem;
  margin: 0;
  opacity: 0;
  animation: fadeInDown 1s forwards;
}

.word {
  display: inline-block;
  opacity: 0;
  animation: fadeInRotate 0.8s ease-out forwards;
  animation-delay: calc(var(--i) * 0.2s);
}

/* Toolbar Styles */
.tBar {
  height: 80px !important;
  z-index: 100;
  width: 100%;
  padding-top: 0.5em;
  inset: 0% 0% auto;
  transition: all 0.3s ease;
  position: fixed;
}

/* Card Hover Effects */
.card-content {
  transition: transform 0.3s ease-in-out;
}

.card-content.hover-active {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(255, 105, 180, 0.3);
}

/* Mobile Navigation */
.mobile-nav {
  background-color: #212021 !important;
}

.mobile-nav .v-list-item {
  color: white !important;
}

.mobile-nav .v-list-item:hover {
  background-color: rgba(255, 105, 180, 0.1);
}

/* Gallery Styles */
.gallery-container {
  padding: 0 !important;
  max-width: none !important;
}

.gallery-image {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
}

.gallery-image:hover {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}

/* Floating Text Styles */
.floating-text {
  position: fixed;
  pointer-events: none;
  z-index: 999;
  padding: 8px 16px;
  color: white;
  font-size: 20px;
  transform-origin: center bottom;
  animation: fadeIn 0.2s ease-out;
  display: inline-flex;
  gap: 2px;
  background: none;
  padding: 16px 16px;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRotate {
  from {
    opacity: 0;
    transform: rotateY(90deg);
  }
  to {
    opacity: 1;
    transform: rotateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-title {
    font-size: 4rem;
  }

  .menu-button {
    margin: 0 5px;
    transition: transform 0.3s ease;
  }

  .menu-button:hover {
    transform: scale(1.05);
  }

  .v-navigation-drawer {
    width: 80%; /* Adjust width for mobile */
  }

  .v-app-bar {
    font-size: 1.2rem; /* Adjust font size for mobile */
  }
}

@media (min-width: 768px) {
  .menu-button {
    margin: 0 15px;
    transition: all 0.3s ease;
  }

  .menu-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 105, 180, 0.3);
  }
}

/* Enhanced Button Styles */
.enhanced-button {
  border: 2px solid currentColor !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
}

.enhanced-button::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid transparent;
  box-shadow: 0 0 0 0 rgba(255, 105, 180, 0.5);
  transition: box-shadow 0.4s ease;
}

.enhanced-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
}

.enhanced-button:hover::before {
  box-shadow: 0 0 0 10px rgba(255, 105, 180, 0.2);
}

.enhanced-button .v-icon {
  transition: transform 0.3s ease;
}

.enhanced-button:hover .v-icon {
  transform: translateX(10px);
}

/* Enhanced Card Styles */
.card-hover {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card-how-we-do::before,
.card-how-we-do-it::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.6s ease;
  z-index: 0;
}

.card-how-we-do::before {
  background-image: url('../src/image/laptop-1478822.jpg');
}

.card-how-we-do:hover::before {
  opacity: 1;
}

.card-how-we-do-it::before {
  background-image: url('../src/image/office-1834294.jpg');
}

.card-how-we-do-it:hover::before {
  opacity: 1;
}

/* Ensure card content is above the background */
.card-how-we-do .v-card-title,
.card-how-we-do .v-card-text,
.card-how-we-do .v-card-actions,
.card-how-we-do-it .v-card-title,
.card-how-we-do-it .v-card-text,
.card-how-we-do-it .v-card-actions {
  position: relative;
  z-index: 1;
}

/* Override any element-specific cursors */
.v-application * {
  cursor: inherit !important;
}

.visible-content {
  display: flex;
  flex-direction: column;
}

.flex-grow-1 {
  overflow-y: auto;
}

.button-enhanced {
  border: 2px solid !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.button-enhanced:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.3);
  border-color: rgba(255, 105, 180, 0.8);
  background-color: rgba(255, 105, 180, 0.1);
}

.button-enhanced:hover::before {
  opacity: 0.08;
}

.button-enhanced:active {
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 8px 20px rgba(255, 105, 180, 0.4);
  background-color: rgba(236, 213, 225, 0.2);
}

.button-enhanced:hover .v-icon {
  transform: translateX(5px);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced Typography */
.card-title {
  font-weight: 700;
  letter-spacing: 2px;
  transition: color 0.3s ease;
}

@media (max-width: 768px) {
  .card-hover:hover::before {
    opacity: 0.7;
  }
  .enhanced-button:hover {
    transform: scale(1.05);
  }
}
/* Sponsorship Section Styles */
.sponsorship-container {
  padding: 0 !important;
  max-width: none !important;
}

.section-header {
  margin-bottom: 64px;
}

.card-sponsor {
  transition: transform 0.3s ease;
}

.card-sponsor:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
}

.card-sponsor:hover .v-card-title {
  color: rgba(255, 105, 180, 0.8);
}

.image-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .card-sponsor {
    width: 90%;
    margin-bottom: 32px;
  }
  
  .card-sponsor:hover {
    transform: scale(1.05);
  }
}
.section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Add smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
.section {
  /* Faster animation */
  transition: all 0.5s ease-out;
}

.section.parallax {
  transform: translateZ(0);
  background-size: cover !important;
}

.section.fade-in {
  opacity: 0;
  transform: none;
  transition: opacity 6s ease-in;
}
/* Contact Section Styles */
.contact-section {
  position: relative;
  overflow: hidden;
}

.contact-container {
  max-width: 1200px !important;
}

/* Contact Information Styles */
.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-bottom: 48px;
}

.info-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);
}

.info-icon {
  display: flex;
  justify-content: center;
}
/* Contact Section Styles */
.contact-section {
  position: relative;
  overflow: hidden;
}

.contact-container {
  padding: 0 !important;
  max-width: none !important;
}

/* Contact Information Cards */
.info-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 24px;
  border-radius: 12px;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 105, 180, 0.2);
}

.info-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
}

.icon-hover {
  transition: transform 0.3s ease;
}

.info-card:hover .icon-hover {
  transform: scale(1.1);
}

/* Contact Form Styles */
.contact-form {
  margin-top: 48px;
}

.input-hover {
  transition: all 0.3s ease;
}

.input-hover:hover {
  transform: translateY(-2px);
}

.input-hover:hover .v-input__slot {
  border-color: rgba(255, 105, 180, 0.8);
}

.submit-button {
  width: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.submit-button::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid transparent;
  box-shadow: 0 0 0 0 rgba(255, 105, 180, 0.5);
  transition: box-shadow 0.4s ease;
}

.submit-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
}

.submit-button:hover::before {
  box-shadow: 0 0 0 10px rgba(255, 105, 180, 0.2);
}

.submit-button .v-icon {
  transition: transform 0.3s ease;
}

.submit-button:hover .v-icon {
  transform: translateX(10px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .info-card {
    margin-bottom: 24px;
  }
  
  .input-hover:hover {
    transform: scale(1.02);
  }
  
  .submit-button:hover {
    transform: scale(1.05);
  }
}

/* Footer Styles */
.footer-section {
  position: relative;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.social-link {
  text-decoration: none;
  transition: transform 0.3s ease;
}

.social-link:hover {
  transform: translateY(-5px);
}

.social-link:hover .v-icon {
  color: rgba(255, 255, 255, 0.8) !important;
}

@media (max-width: 768px) {
  .social-links {
    gap: 15px;
  }
  
  .social-link:hover {
    transform: scale(1.1);
  }
}
</style>