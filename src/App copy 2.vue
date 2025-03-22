Here’s the reformatted Vue.js component code, organized for better readability and structure:

```vue
<template>
  <v-app>
    <div>
      <v-btn 
        @click="toogle" 
        class="dark-mode-toggle" 
        icon 
        :style="{ backgroundColor: isDarkMode ? 'white' : 'black' }"
      >
        <v-icon :style="{ color: isDarkMode ? 'black' : 'white' }">
          {{ isDarkMode ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
        </v-icon>
      </v-btn>

      <transition name="fade">
        <v-toolbar 
          v-show="isToolbarVisible" 
          :color="isDarkMode ? '#252423' : '#fffbe9'" 
          class="tBar" 
          style="z-index: 1999"
        >
          <v-toolbar-title 
            v-on:click="handleMenuItemClick({ link: '#home' })" 
            :style="{ color: isDarkMode ? 'white' : 'black' }"
          >
            COACH KIP
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <button 
            :style="{ background: isDarkMode ? 'white' : 'black', color: isDarkMode ? 'black' : 'white' }" 
            @click.stop="drawer = !drawer" 
            style="float: right; font-family: 'Aeonik1'; border-bottom-color: #000; border-radius: 20px; padding: 2px 22px 3px; display: block;" 
            class="mr-6 hidden-md-and-up mt-n1" 
            @click="drawer = true"
          >
            Menu
          </button>
          <v-toolbar-items class="hidden-sm-and-down">
            <template v-for="(item, index) in menuItems" :key="index">
              <v-btn 
                :style="{ color: isDarkMode ? 'white' : 'black' }" 
                flat 
                :class="{ 'active-line': activeSection === item.link.substring(1) }"
                :color="activeSection === item.link.substring(1) ? '#FFD700' : '#FFFFFF'"
                class="menu-button" 
                @click="handleMenuItemClick(item)"
              >
                {{ item.text }}
              </v-btn>
            </template>
          </v-toolbar-items>
        </v-toolbar>
      </transition>

      <v-navigation-drawer 
        style="z-index: 10000"  
        location="right" 
        v-model="drawer" 
        fixed  
        temporary  
        class="mobile-nav fullscreen-drawer" 
        width="490"
      >
        <v-card style="width: 50% !important"></v-card>
        <v-toolbar style="background-color: transparent" class="mt-1">
          <v-icon size="small" color="black" class="mb-n1 ml-5" v-on:click="handleMenuItemClick({ link: '#home' })">
            mdi-arrow-left
          </v-icon>
          <a 
            style="font-family: 'Aeonik1'"  
            v-on:click="handleMenuItemClick({ link: '#home' })"  
            data-w-id="4a4302b6-6981-f1fa-9bee-92d7404c033a"
            class="side-nav-link-home"
          >
            Home
          </a>
          <v-spacer />
          <button
            style="float: right; font-family: 'Aeonik1'; background-color: #252423; color: #b7e3b6; border-bottom-style: none; border-bottom-color: #000; border-radius: 20px; padding: 2px 22px 3px; display: block;" 
            class="mr-6 mt-1"  
            @click="drawer = false"
          >
            Close
          </button>
        </v-toolbar>
        <v-row>
          <v-col class="ml-3 mr-3">
            <nav class="col col-nav-top w-clearfix" style="padding-left: 2% !important" aria-label="Main Navigation">
              <ul class="side-nav-list">
                <a 
                  style="font-size: 36px; font-family: 'Aeonik1'; line-height: 42px"  
                  @click="handleMenuItemClick({ link: '#home' })" 
                  class="side-nav-link-large"
                >
                  Home
                </a>
                <a 
                  style="font-size: 36px; font-family: 'Aeonik1'; line-height: 42px"  
                  @click="handleMenuItemClick({ link: '#mission' })"  
                  class="side-nav-link-large mt-n2"
                >
                  Mission
                </a>
                <a 
                  style="font-size: 36px; font-family: 'Aeonik1'; line-height: 42px"  
                  @click="handleMenuItemClick({ link: '#kip' })"  
                  class="side-nav-link-large mt-n2"
                >
                  Kip
                </a>
                <a 
                  style="font-size: 36px; font-family: 'Aeonik1'; line-height: 42px"  
                  @click="handleMenuItemClick({ link: '#about' })"  
                  class="side-nav-link-large mt-n2"
                >
                  About
                </a>
                <a 
                  style="font-size: 36px; font-family: 'Aeonik1'; line-height: 42px"  
                  @click="handleMenuItemClick({ link: '#team' })" 
                  class="side-nav-link-large mt-n2"
                >
                  Team
                </a>
                <a 
                  style="font-size: 36px; font-family: 'Aeonik1'; line-height: 42px"  
                  @click="handleMenuItemClick({ link: '#contact' })"  
                  class="side-nav-link-large mt-n2"
                >
                  Contact
                </a>
              </ul>
            </nav>
          </v-col>
        </v-row>
        <br /><br />
        <br /><br /><br /><br />
        <v-row style="margin-top: auto; padding: 10px">
          <v-col class="ml-3 mr-3">
            <ul class="side-nav-list" style="list-style-type: none; padding: 0">
              <li>
                <a 
                  class="side-nav-link-large"
                  style="font-family: 'Aeonik1'; font-size: 16px !important; line-height: 25px !important; color: black !important;"  
                  target="_blank"
                >
                  <v-icon class="mr-1">mdi-twitter</v-icon>Twitter
                </a>
              </li>
              <li>
                <a 
                  class="side-nav-link-large"
                  style="font-family: 'Aeonik1'; font-size: 16px !important; line-height: 25px !important; color: black !important;" 
                  target="_blank"
                >
                  <v-icon class="mr-1">mdi-linkedin</v-icon>LinkedIn
                </a>
              </li>
              <li>
                <a  
                  class="side-nav-link-large"
                  style="font-family: 'Aeonik1'; font-size: 16px !important; line-height: 25px !important; color: black !important;" 
                  target="_blank"
                >
                  <v-icon class="mr-1">mdi-instagram</v-icon>Instagram
                </a>
              </li>
              <li>
                <a  
                  class="side-nav-link-large"
                  style="font-family: 'Aeonik1'; font-size: 16px !important; line-height: 25px !important; color: black !important;" 
                  target="_blank"
                >
                  <v-icon class="mr-1">mdi-vimeo</v-icon>Vimeo
                </a>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-navigation-drawer>

      <section class="fade-in" style="position: relative; min-height: 100vh; z-index: 999;" id="home">
      <v-parallax :color="isDarkMode ? '#252423' : '#fffbe9'" style="position: relative; min-height: 100vh;">
        <div class="hero-content" :style="{paddingTop: isMobile ? '4% !important' : ''}">
          <div class="title-wrapper">
            <div class="main-title">
              <span :style="{fontWeight:400, fontFamily:'Aeonik1, Arial , sans-serif', fontSize: isMobile ? '48px' : '', color:isDarkMode ? 'white' : 'black', '--i': 0 }" class="word" >COACH</span>
              <span :style="{fontWeight:400, fontFamily:'Aeonik1, Arial , sans-serif', fontSize: isMobile ? '48px' : '', color:isDarkMode ? 'white' : 'black', '--i': 3 }" class="word" >&nbsp;</span>
              <span :style="{fontWeight:400, fontFamily:'Aeonik1, Arial , sans-serif', fontSize: isMobile ? '48px' : '', color:isDarkMode ? 'white' : 'black', '--i': 6 }" class="word" >KIP</span>
            </div>
          </div>

          <!-- Line separator between title and form -->
          <div class="separator word" :style="{ backgroundColor: isDarkMode ? '#887C5C' : 'black', '--i': 7 }"></div>

          <div v-if="!isMobile" class="form-container word" :style="{ '--i': 8 }">
            <div class="input-form" >
              <v-text-field rounded placeholder="Enter email" class="mb-4" 
              :width="isMobile ? '205px' : '350px'" hide-details  :style="{
                    border: !isDarkMode ? '1px solid black' : '1px solid #ccc',
                    color: isDarkMode ? 'white' : 'black' , borderRadius:'30px',  }">

              </v-text-field>
              <button :class="isMobile ? 'join-button1' : 'join-button'" class="mt-n9">
                Join Waitlist
              </button>
            </div>

            <div v-if="isMobile" class="social-icons">
              <v-row no-gutters class="social-row" style="justify-content: center">
                <v-icon
                  @mousemove="handleMouseMove($event, 'Twitter')"
                  @mouseleave="handleMouseLeave"
                  size="x-large"
                  :style="{ color: !isDarkMode ? 'black' : '#e4dbcc' }"
                  class="mr-2 social-icon"
                >
                  mdi-twitter
                </v-icon>
                <v-icon
                  @mousemove="handleMouseMove($event, 'Instagram')"
                  @mouseleave="handleMouseLeave"
                  size="x-large"
                  :style="{ color: !isDarkMode ? 'black' : '#e4dbcc' }"
                  class="mr-2 social-icon"
                >
                  mdi-instagram
                </v-icon>
                <v-icon
                  @mousemove="handleMouseMove($event, 'Message')"
                  @mouseleave="handleMouseLeave"
                  size="x-large"
                  :style="{ color: !isDarkMode ? 'black' : '#e4dbcc' }"
                  class="ml-2 social-icon"
                >
                  mdi-message
                </v-icon>
              </v-row>
            </div>
          </div>
          <div v-else>
            <div class="form-container word " :style="{ '--i': 8 }">
            <div class="input-form"  :style="{marginBottom: isMobile ? '53%': '',
              paddingTop: isMobile ? '15% !important' : ''}">
              <v-text-field rounded placeholder="Enter email" 
              :width="isMobile ? '205px' : '280px'" hide-details  :style="{
                    border: !isDarkMode ? '1px solid black' : '1px solid #ccc',
                    color: isDarkMode ? 'white' : 'black' , borderRadius:'30px',  }">

              </v-text-field>
              <v-btn  :color="isDarkMode ? 'white' : 'black'" variant="elevated" class="mt-3" 
              style="border-radius:30px" size="small">Join Waitlist</v-btn>
              <v-row no-gutters class="social-row mt-2" style="justify-content: center">
                <v-icon
                  @mousemove="handleMouseMove($event, 'Twitter')"
                  @mouseleave="handleMouseLeave"
                  size="x-large"
                  :style="{ color: !isDarkMode ? 'black' : '#e4dbcc' }"
                  class="mr-2 social-icon"
                >
                  mdi-twitter
                </v-icon>
                <v-icon
                  @mousemove="handleMouseMove($event, 'Instagram')"
                  @mouseleave="handleMouseLeave"
                  size="x-large"
                  :style="{ color: !isDarkMode ? 'black' : '#e4dbcc' }"
                  class="mr-2 social-icon"
                >
                  mdi-instagram
                </v-icon>
                <v-icon
                  @mousemove="handleMouseMove($event, 'Message')"
                  @mouseleave="handleMouseLeave"
                  size="x-large"
                  :style="{ color: !isDarkMode ? 'black' : '#e4dbcc' }"
                  class="ml-1 social-icon"
                >
                  mdi-message
                </v-icon>
              </v-row>
            </div> 
          
          </div> 
          </div>
        
        </div>
      </v-parallax>
      </section>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
      isToolbarVisible: true,
      menuItems: [
        { text: "HOME", link: "#home" },
        { text: "Mission", link: "#mission" },
        { text: "KIP", link: "#kip" },
        { text: "ABOUT", link: "#about" },
        { text: "TEAM", link: "#team" },
        { text: "CONTACT", link: "#contact" },
      ],
      activeSection: "home",
      drawer: false,
      isMobile: false,
      lastScrollY: 0,
    };
  },
  mounted() {
    const resizeObserver = new ResizeObserver((entries) => {
      const isMobile = entries[0].contentRect.width < 480;
      this.setCustomCursor(isMobile ? "white" : "dark");
    });
    resizeObserver.observe(document.body);
    localStorage.setItem('isDarkMode', this.isDarkMode);
    this.setCustomCursor("dark");
    this.checkMobile();
  },
  beforeDestroy() {
    resizeObserver.disconnect();
  },
  created() {
    this.checkDarkMode();
  },
  methods: {
    toogle() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('isDarkMode', this.isDarkMode);
    },
    checkDarkMode() {
      const darkModePreference = localStorage.getItem('isDarkMode');
      if (darkModePreference !== null) {
        this.isDarkMode = JSON.parse(darkModePreference);
      }
    },
    setCustomCursor(type) {
      const cursorUrl = type === "dark"
        ? 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="gold"/></svg>'
        : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="white"/></svg>';
      document.body.style.cursor = `url('${cursorUrl}') 10 10, auto`;
    },
    handleMenuItemClick(item) {
      if (item.link.startsWith("#")) {
        const section = document.querySelector(item.link);
        if (section) {
          if (item.link === "#contact") {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
          } else {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else {
        this.drawer = false;
      }
      this.drawer = false;
    },
    checkMobile() {
      this.isMobile = window.innerWidth < 850;
    },
    handleMouseLeave() {
      this.hoveredMember = null;
      this.showFloatingText = false;
    },
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.isToolbarVisible = currentScrollY <= this.lastScrollY;
      this.lastScrollY = currentScrollY;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/fonts/fonts.css";

@font-face {
  font-family: "Aeonik1";
  src: url("../src/assets/font/AeonikTRIAL-Regular.otf") format("opentype");
  font-weight: 1000 !important;
  font-style: normal;
}

@font-face {
  font-family: "Poppins";
  src: url("../src/assets/font/poppins.medium.ttf") format("opentype");
  font-style: normal;
}

@font-face {
  font-family: "ChaletBook";
  src: url("../src/assets/font/ChaletBookBold.ttf") format("opentype");
  font-style: normal;
}

@font-face {
  font-family: "ChaletBook1";
  src: url("../src/assets/font/ChaletBookRegular.ttf") format("opentype");
  font-style: normal;
}
</style>

<style scoped>
.tBar {
  height: 80px !important;
  z-index: 100;
  width: 100%;
  padding-top: 0.6em;
  position: fixed;
  top: 0; 
  left: 0;
  right: 0;
  transition: transform 0.3s ease, opacity 0.3s ease; 
}

.tBar.hidden {
  transform: translateY(-100%); 
}

.tBar.visible {
  transform: translateY(0); 
  opacity: 1; 
}

.dark-mode-toggle {
  position: fixed;
  bottom: 20px; 
  right: 20px; 
  z-index: 1000;
  border-radius: 50%; 
  width: 56px;
  height: 56px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); 
}

/* TOOLBAR */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0; 
}

.fade-enter-to {
  opacity: 1;
  transform-style: preserve-3d;
  transition: transform 0.3s ease; 
}

/* MOBILE NAVIGATION DRAWER */
.mobile-nav {
  background-color: #b7e3b6 !important;
}

.mobile-nav .v-list-item {
  color: black !important;
}

.mobile-nav .v-list-item:hover {
  background-color: rgba(255, 105, 180, 0.1);
}

.fullscreen-drawer {
  width: 150vw; 
  height: 100vh; 
  background-color: #212021; 
  z-index: 2000;
  transform: translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); 
  transform-style: preserve-3d !important;
  transition: transform 0.3s ease;
}

.side-nav-link-home {
  border-bottom-style: solid;
  border-bottom-color: #0000;
  padding-bottom: 0;
  font-size: 18px;
  line-height: 32px;
}

.side-nav-link-large {
  text-decoration: none;
  color: #333;
  position: relative;
}

.side-nav-link-large:hover {
  color: #252423; 
}

.side-nav-link-large::after {
  content: ''; 
  display: block;
  width: 100%; 
  height: 2px; 
  background-color: #252423; 
  position: absolute; 
  left: 0; 
  bottom: 0;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.side-nav-link-large:hover::after {
  transform: scaleX(1); 
}

.side-nav-link-large {
  float: left;
  clear: left;
  text-align: right;
  border-bottom-style: solid;
  border-bottom-color: #0000;
  margin-right: 2em;
  font-size: 48px;
  line-height: 50px !important;
  display: block;
}

@media screen and (max-width: 479px) {
  .side-nav-link-large {
    font-size: 36px;
    line-height: 42px;
  }
}

/* // TITLE PAGE */
.separator {
  width: 50%;
  height: 2px;
  margin: 40px auto; 
}

.title-wrapper {
  margin-top: 10vh;
  font-size: 3.5rem; 
  font-weight: 100;
  letter-spacing: 1px;
  text-transform: uppercase;
  animation: fadeIn 2s ease-in-out;
  text-align: center;
}

@media (max-width: 600px) {
  .title-wrapper {
    font-size: 2.5rem; 
  }

  .input-field {
    width: 70%;
    max-width: 100%;
  }

  .separator {
    width: 80%;
  }
}

.word {
  display: inline-block;
  opacity: 0;
  animation: fadeInRotate 0.8s ease-out forwards;
  animation-delay: calc(var(--i) * 1s);
}
.word {
  display: inline-block;
  opacity: 0;
  animation: fadeInRotate 0.8s ease-out forwards;
  animation-delay: calc(var(--i) * 0.2s);
}
.word3 {
  animation: wordAnim 3s ease-in-out;
  position: relative;
}


.form-container {
  margin-top: 20px;
  text-align: center;
}

.input-form {
  margin-top: 20px;
}

/* // BUTTON */
.join-button1 {
  margin-top: 10px;
  padding: 10px 10px;
  border-radius: 30px;
  background-color: black; 
  color: white;
  border: none;
  cursor: pointer;
  width: 150px;
  letter-spacing: 1px;
}

.join-button {
  margin-top: 10px;
  padding:  20px 10px 22px 15px;
  border-radius: 30px;
  background-color: black; 
  color: white;
  border: none;
  cursor: pointer;
  width: 200px;
  letter-spacing: 3px;
}

.join-button:hover {
  transition: background-color 1.3s ease;
  background-color: #ffd700;
  color: rgb(3, 3, 3) !important;
}

/* FIRST SECTION */
.hero-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.main-title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-title {
  font-size: 8rem;
  margin: 0;
}

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
    width: 80%; 
  }

  .v-app-bar {
    font-size: 1.2rem; 
  }
}
.section {
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
</style>