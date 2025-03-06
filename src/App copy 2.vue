<template>
  <v-app light>
    <div class="content">
    <v-toolbar class="tBar" color="#252423" style="z-index:1999">
       <v-toolbar-title @click="handleMenuItemClick({link:'#home'})" color="#fffbe9">COACH KIP
       </v-toolbar-title>
        <v-spacer></v-spacer>
        <button  @click.stop="drawer = !drawer"  style="float: right;font-family: 'Aeonik1'; background-color: #fffbe9; color: black;
          border-bottom-style: none; border-bottom-color: #000; border-radius: 20px; padding: 5px 28px 4px;
          display: block;" class="mr-6 hidden-sm-and-up mt-n1" 
          @click="drawer = true" >
          Menu
        </button>
        <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="(item, index) in menuItems" :key="index">
          <v-btn flat :class="{'active-line': activeSection === item.link.substring(1) }" 
            :color="activeSection === item.link.substring(1) ? '#FFD700' : '#FFFFFF'" 
            class="menu-button" 
            @click="handleMenuItemClick(item)">
            {{ item.text }}
          </v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer   style="z-index: 10000" location="right" v-model="drawer" fixed temporary
      class="mobile-nav fullscreen-drawer" width="490">
    <v-card style="width:50% !important"></v-card>
      <v-toolbar style="background-color:transparent" class="mt-1">
        <v-icon size="small " color="black" class="mb-n1 ml-5" v-on:click="handleMenuItemClick({link:'#home'})">mdi-arrow-left</v-icon>
        <a style="font-family:'Aeonik1';" v-on:click="handleMenuItemClick({link:'#home'})" data-w-id="4a4302b6-6981-f1fa-9bee-92d7404c033a"
        class="side-nav-link-home ">Home</a>
        <v-spacer/>
        <button style="float: right;font-family: 'Aeonik1';background-color: #252423;color: #f4ff49;
          border-bottom-style: none; border-bottom-color: #000; border-radius: 20px;padding: 5px 28px 5px;
          display: block;" class="mr-6 mt-1"
           @click="drawer = false">
          Close
        </button>
      </v-toolbar>
     <v-row>
      <v-col class="ml-3 mr-3">
        <nav class="col col-nav-top w-clearfix" style="padding-left:2% !important" aria-label="Main Navigation">
          <ul class="side-nav-list">
              <a style="font-size: 36px;font-family:'Aeonik1';
                 line-height: 42px;" @click="handleMenuItemClick({link:'#home'} )" class="side-nav-link-large">Home</a>
               <a style="font-size: 36px;font-family:'Aeonik1';
                 line-height: 42px;" @click="handleMenuItemClick({link:'#mission'} )" class="side-nav-link-large  mt-n2">Mission</a>
               <a style="font-size: 36px;font-family:'Aeonik1';
                 line-height: 42px;" @click="handleMenuItemClick({link:'#kip'} )" class="side-nav-link-large mt-n2">Kip</a>
               <a style="font-size: 36px;font-family:'Aeonik1';
                 line-height: 42px;" @click="handleMenuItemClick({link:'#about'} )" class="side-nav-link-large mt-n2">About</a>
               <a style="font-size: 36px;font-family:'Aeonik1';
                 line-height: 42px;" @click="handleMenuItemClick({link:'#team'} )" class="side-nav-link-large mt-n2">Team</a>
               <a style="font-size: 36px;font-family:'Aeonik1';
                 line-height: 42px;" @click="handleMenuItemClick({link:'#contact'} )" class="side-nav-link-large mt-n2">Contact</a>
          </ul>
      </nav>
      </v-col>
     </v-row>
    <br/><br/> <br/><br/><br/><br/>
     <v-row style="margin-top: auto; padding: 10px;">
          <v-col class="ml-3 mr-3">
              <ul class="side-nav-list" style="list-style-type: none; padding: 0;">
                  <li><a class="side-nav-link-large" style="font-family:'Aeonik1';font-size: 16px !important; line-height: 25px !important;color:black !important" target="_blank"><v-icon class="mr-1">mdi-twitter</v-icon>Twitter</a></li>
                  <li><a class="side-nav-link-large" style="font-family:'Aeonik1';font-size: 16px !important; line-height: 25px !important;color:black !important" target="_blank"><v-icon class="mr-1">mdi-linkedin</v-icon>LinkedIn</a></li>
                  <li><a class="side-nav-link-large" style="font-family:'Aeonik1';font-size: 16px !important; line-height: 25px !important;color:black !important" target="_blank"><v-icon class="mr-1">mdi-instagram</v-icon>Instagram</a></li>
                  <li><a class="side-nav-link-large" style="font-family:'Aeonik1';font-size: 16px !important; line-height: 25px !important;color:black !important" target="_blank"><v-icon class="mr-1">mdi-vimeo</v-icon>Vimeo</a></li>
              </ul>
          </v-col>
      </v-row>
    </v-navigation-drawer>


    <!-- //1ST SECTION -->
    <section style="position: relative; z-index: 999;"  id="home" :height="isMobile ? '100vh' : '100vh'" >
      <v-parallax color="#252423" :height="isMobile ? '100vh' : '100vh'">
        <div class="hero-content">
          <div class="title-wrapper">
            <div class="main-title">
                <span class="word" :style="{ '--i': 0 }">COACH</span>
                <span class="word" :style="{ '--i': 3 }"> &nbsp </span>
                <span class="word" :style="{ '--i': 6 }">KIP</span>
              </div>
          </div>
        </div>
      </v-parallax>
    </section>
    
    </div>
  </v-app>
</template>

<script>
import lottie from 'lottie-web'
export default {
  data() {
    return {
      forLoading:false,
      drawer: false,
      menuItems: [
        { text: 'HOME', link: '#home' },
        { text: 'Mission', link: '#mission' },
        { text: 'KIP', link: '#kip' },
        { text: 'ABOUT', link: '#about' },
        { text: 'TEAM', link: '#team' },  
        { text: 'CONTACT', link: '#contact' } 
      ],
      hoveredMember: null,
      isMobile: false,
      hoveredCard: null,
      cursorX: 0,
      cursorY: 0,
      showFloatingText: false,
      valid: true,
      name: '',
      email: '',
      message: '',
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ],
      messageRules: [
        v => !!v || 'Message is required',
        v => (v && v.length >= 10) || 'Message must be at least 10 characters'
      ],
      teamMembers: [
      { 
        id: 1, 
        name: 'Anthony Pablo', 
        position: 'CEO', 
        image: 'https://img.freepik.com/premium-photo/3d-cartoon-business-character_776674-532471.jpg',
        details: 'Anthony has over 20 years of experience in the tech industry and has led multiple successful startups.'
      },
      { 
        id: 2, 
        name: 'Sandra Kate', 
        position: 'CTO', 
        image: 'https://img.freepik.com/premium-photo/3d-animation-style-portrait-business-woman-3d-metaverse-avatar-cartoon-character-3d-illustration_839035-102292.jpg',
        details: 'Jane is an expert in software development and has a passion for innovative technology solutions.'
      },
      { 
        id: 3, 
        name: 'Alice Johnson', 
        position: 'CFO', 
        image: 'https://img.freepik.com/premium-photo/3d-character-business-woman_935410-589.jpg',
        details: 'Alice has a strong background in finance and has helped companies raise millions in funding.'
      },
      { 
        id: 4, 
        name: 'Barry Diaz', 
        position: 'CMO', 
        image: 'https://img.freepik.com/premium-photo/cartoon-character-with-contract-hands-3d-illustration_839035-120672.jpg',
        details: 'Barry is a marketing guru with a knack for creating compelling brand stories.'
      },
      { 
        id: 5, 
        name: 'John Fritz', 
        position: 'DEVELOPER', 
        image: 'https://img.freepik.com/premium-photo/cartoon-boy-with-brown-hair-blue-jacket-looking-up-generative-ai_900833-38976.jpg?w=360',
        details: 'Fritz has a strong experience in web programming'
      }
    ],
    activeSection: 'home',
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
    currentIndex: 0,
    sponsorsPerPage: 3,
    intervalId: null,
    isHovering: false,
    countIdeasSpunOut: 0,
    countIdeasKilled: 0,
    intervalIdSpunOut: null,
    intervalIdKilled: null,
    maxSpunOut: 36,
    maxKilled: 412,
    duration: 2000, 
    isAtBottom: false,
    lastScrollPosition: 0
      
    };
  },
  computed: {
    floatingX() {
      return this.cursorX - 66; // Adjusts the X position to center the text above the cursor
    },
    floatingY() {
      return this.cursorY - 56; // Adjusts the Y position to place the text above the cursor
    },
    cardHeight() {
      return this.isMobile ? '45vh' : '86vh';
    },
    cardHeightsponsort() {
      return this.isMobile ? '50vh' : '55vh';
    },
    floatingText() {
      return this.hoveredCard ? this.hoveredCard.text : '';
    },
    displayedSponsors() {
      return this.sponsors.slice(this.currentIndex, this.currentIndex + this.sponsorsPerPage);
    },
  },
  methods: {
    handleMouseMove(event, member) {
    this.cursorX = event.clientX; // Use the mouse's X position directly
    this.cursorY = event.clientY; // Use the mouse's Y position directly
    this.hoveredMember = member;
    this.showFloatingText = true;
    },
    handleMouseLeave() {
        this.hoveredMember = null;
        this.showFloatingText = false;
    },
    handleSponsorClick (sponsor){
      console.log(sponsor);
    },
    setCustomCursor(type) {
      const cursorUrl = type === 'dark'
        ? 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="gold"/></svg>'
        : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="white"/></svg>';
      document.body.style.cursor = `url('${cursorUrl}') 10 10, auto`;
    },
    handleMenuItemClick(item) {
      if (item.link.startsWith('#')) {
        const section = document.querySelector(item.link);
        if (section) {
          if (item.link === '#contact') {
          // Scroll to bottom of page
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
          });
        } else {
          // For other sections, use existing behavior
          section.scrollIntoView({ behavior: 'smooth' });
        }
        
        section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        this.drawer = false;
      }
      this.drawer = false;
      },
    checkMobile() {
      this.isMobile = window.innerWidth < 768;
      // this.countIdeasSpunOut = 0;
      // this.countIdeasKilled = 0;
      this.startCounting();
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
                      const sectionId = entry.target.id;
                      this.activeSection = sectionId; 

                      // Add visible class to text elements
                      const textElements = entry.target.querySelectorAll('.fade-up');
                      textElements.forEach(el => el.classList.add('visible'));

                      // Existing logic for counting
                      if (sectionId === 'results') {
                          if (this.forLoading == false) {
                              this.countIdeasSpunOut = 0;
                              this.countIdeasKilled = 0;
                              this.startCounting();
                              localStorage.setItem('countingStarted', 'true');
                              this.forLoading = true;
                          } else {
                              this.forLoading = true;
                          }
                      }
                  } else {
                      // Remove visible class when out of view
                      const textElements = entry.target.querySelectorAll('.fade-up');
                      textElements.forEach(el => el.classList.remove('visible'));
                  }
              });
          },
          {
              threshold: 0.5, 
          }
      );
      // Observe all sections
      document.querySelectorAll('section').forEach(section => {
          observer.observe(section);
      });
  },
    // createIntersectionObserver() {
    //   const observer = new IntersectionObserver(
    //       (entries) => {
    //           entries.forEach(entry => {
    //               if (entry.isIntersecting) {
    //                   const sectionId = entry.target.id;
    //                   this.activeSection = sectionId; 

    //                   if (sectionId === 'results') {
    //                       // Check if counting has not started
    //                       if (this.forLoading == false) {
    //                           this.countIdeasSpunOut = 0;
    //                           this.countIdeasKilled = 0;
    //                           this.startCounting();
    //                           localStorage.setItem('countingStarted', 'true');
    //                           this.forLoading = true
    //                       }else{
    //                         this.forLoading = true
    //                       }
    //                   } else {
    //                     this.forLoading = true
    //                       // Optionally clear the countingStarted flag if you want to allow counting to restart
    //                       // localStorage.removeItem('countingStarted');
    //                   }
    //               }
    //           });
    //       },
    //       {
    //           threshold: 0.5, 
    //       }
    //   );

    //   // Observe all sections
    //   document.querySelectorAll('section').forEach(section => {
    //       observer.observe(section);
    //   });
    // },
    resetCounting() {
      localStorage.removeItem('countingStarted');
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
    },
    loadLottieAnimation() {
      this.animationInstance = lottie.loadAnimation({
        container: this.$refs.lottieContainer, 
        renderer: 'svg',
        loop: true, 
        autoplay: true, 
        path: 'https://cdn.prod.website-files.com/5d2f74fb3cba1f3a752e2046/5d916146d12b5b7a3da48d14_Ideation.json' 
      });
    },
    loadLottieAnimation1() {
      this.animationInstance = lottie.loadAnimation({
        container: this.$refs.lottieContainer1, 
        renderer: 'svg',
        loop: true, 
        autoplay: true, 
        path: 'https://cdn.prod.website-files.com/5d2f74fb3cba1f3a752e2046/5d9161c9cb36a49d93d6b9e8_Validation.json' 
      });
    },
    loadLottieAnimation2() {
      this.animationInstance = lottie.loadAnimation({
        container: this.$refs.lottieContainer2, 
        renderer: 'svg',
        loop: true, 
        autoplay: true, 
        path: 'https://cdn.prod.website-files.com/5d2f74fb3cba1f3a752e2046/5d916201124e0776f419828f_Creation.json' 
     
      });
    },
    loadLottieAnimation3() {
      this.animationInstance = lottie.loadAnimation({
        container: this.$refs.lottieContainer3, 
        renderer: 'svg',
        loop: true, 
        autoplay: true, 
        path: 'https://cdn.prod.website-files.com/5d2f74fb3cba1f3a752e2046/5d9161c97115f97b9bd4a04d_SpinOut.json' 
      });
    },
    loadLottieAnimation4() {
      this.animationInstance = lottie.loadAnimation({
        container: this.$refs.lottieContainer4, 
        renderer: 'svg',
        loop: true, 
        autoplay: true, 
        path: 'https://cdn.prod.website-files.com/5d2f74fb3cba1f3a752e2046/5d9161c9e6be583f1654f247_ScaleUp.json' 
      });
    },
    startDrag(event) {
      this.isDragging = true;
      this.startX = event.pageX - this.$refs.teamMembersContainer.offsetLeft;
      this.scrollLeft = this.$refs.teamMembersContainer.scrollLeft;
      this.$refs.teamMembersContainer.classList.add('dragging');
      event.preventDefault();
    },
    
    stopDrag() {
      this.isDragging = false;
      this.$refs.teamMembersContainer.classList.remove('dragging');
    },
    
    drag(event) {
      if (!this.isDragging) return;
      
      event.preventDefault();
      const x = event.pageX - this.$refs.teamMembersContainer.offsetLeft;
      const walk = (x - this.startX) * 2; 
      
      requestAnimationFrame(() => {
        this.$refs.teamMembersContainer.scrollLeft = this.scrollLeft - walk;
      });
    },
    startCounting() {

          const duration = 1000; // Duration of the counting animation in milliseconds
          const startTime = performance.now(); // Get the current time
          const initialSpunOut = this.countIdeasSpunOut; // Initial value for spun out
          const initialKilled = this.countIdeasKilled; // Initial value for killed

          const updateCount = (timestamp) => {
              const elapsed = timestamp - startTime; // Calculate elapsed time
              const progress = Math.min(elapsed / duration, 1); // Normalize progress to [0, 1]

              // Calculate the current count based on progress
              this.countIdeasSpunOut = Math.round(initialSpunOut + (this.maxSpunOut - initialSpunOut) * progress);
              this.countIdeasKilled = Math.round(initialKilled + (this.maxKilled - initialKilled) * progress);

              // Continue the animation until the duration is reached
              if (progress < 1) {
                  requestAnimationFrame(updateCount);
              } else {
                  // Ensure it ends exactly at max
                  this.countIdeasSpunOut = this.maxSpunOut;
                  this.countIdeasKilled = this.maxKilled;
              }
          };

          // Start the animation
          requestAnimationFrame(updateCount);
      },
    handleScroll() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    
    // Check if we're at the bottom (within 1px)
    if (Math.abs((scrollTop + windowHeight) - documentHeight) < 1) {
      // this.isAtBottom = true;
      this.activeSection = 'contact'
    } else {
      this.isAtBottom = false;
    }
    
    // Store last scroll position for scroll direction detection
    this.lastScrollPosition = scrollTop;
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
    this.loadLottieAnimation();
    this.loadLottieAnimation1();
    this.loadLottieAnimation2();
    this.loadLottieAnimation3();
    this.loadLottieAnimation4();
    window.addEventListener('scroll', this.handleScroll);
    this.checkMobile()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile);
    resizeObserver.disconnect();
    this.stopAutoSwitch();
    clearInterval(this.intervalIdSpunOut);
    clearInterval(this.intervalIdKilled);
    window.removeEventListener('scroll', this.handleScroll);
    this.resetCounting()
  },
  
};
</script>

<style lang="scss">
@import './assets/fonts/fonts.css';
@font-face {
  font-family: 'Aeonik1';
  src:url("../src/assets/font/AeonikTRIAL-Regular.otf") format("opentype");
  font-weight: 1000 !important;
  font-style: normal;
}
@font-face {
  font-family: 'Poppins';
  src:url("../src/assets/font/poppins.medium.ttf") format("opentype");
  font-style: normal;
}
</style>
<style>
/* //TOOLBAR */
.tBar {
  height: 80px !important;
  z-index: 100;
  width: 100%;
  padding-top: 0.6em;
  position: fixed; /* This should keep the toolbar fixed */
  color: #fffbe9 !important;
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
@media (min-width: 768px) {
  .menu-button {
    margin: 0 15px;
    transition: all 0.3s ease;
  }
  .menu-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px  #FFD700;
  }
}

/* //NAVIGATION DRAWER */
.mobile-nav {
  background-color: #f4ff49 !important;
}
.mobile-nav .v-list-item {
  color:black !important
}
.mobile-nav .v-list-item:hover {
  background-color: rgba(255, 105, 180, 0.1);
}
.fullscreen-drawer {
  width: 150vw; /* Full width */
  height: 100vh; /* Full height */
  background-color: #212021; /* Match the background color */
  z-index: 2000; /* Ensure it is above other elements */
  transform: translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d !important;
}
.fullscreen-drawer {
  transition: transform 0.3s ease;
}
.side-nav-link-home {
  border-bottom-style: solid;
  border-bottom-color: #0000;
  padding-bottom: 0;
  font-size: 18px;
  line-height: 32px;
}
.col.col-nav-top {
  flex: 1;
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
.side-nav-link-large {
  text-decoration: none; /* Remove underline */
  color: #333; /* Change text color */
  position: relative; /* Position relative for pseudo-element */
}
.side-nav-link-large:hover {
  color: #252423; /* Change text color on hover (optional) */
}
.side-nav-link-large::after {
  content: ''; /* Create a pseudo-element for the border */
  display: block; /* Make it a block element */
  width: 100%; /* Full width */
  height: 2px; /* Set height for the border */
  background-color: #252423; /* Border color */
  position: absolute; /* Position it absolutely */
  left: 0; /* Align to the left */
  bottom: 0; /* Position at the bottom */
  transform: scaleX(0); /* Initially scale to 0 (hidden) */
  transition: transform 0.3s ease; /* Smooth transition */
}
.side-nav-link-large:hover::after {
  transform: scaleX(1); /* Scale to full width on hover */
}

/* 1ST SECTION */
.hero-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
    width: 80%; /* Adjust width for mobile */
  }
  .v-app-bar {
    font-size: 1.2rem; /* Adjust font size for mobile */
  }
}
</style>