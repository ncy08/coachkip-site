
<template>
  <v-app >
    <div>
      <v-btn   @click="toogle"  class="dark-mode-toggle"  icon
      :style="{ backgroundColor: isDarkMode ? 'white' : 'black', }"
    >
      <v-icon :style="{ color: isDarkMode ? 'black' : 'white', }">{{ isDarkMode ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>
      <!-- Floating Text Overlay -->
      <div style="z-index:1999;font-family:'Aeonik"  v-if="showFloatingText"
        class="floating-text"  :style="{ left: floatingX + 'px', top: floatingY + 'px' }">
        <span>{{ hoveredMember.name ? hoveredMember.name : hoveredMember }}</span>
      </div>
      <transition name="fade">
      <v-toolbar v-show="isToolbarVisible" :color="isDarkMode ? '#252423' : '#fffbe9'" class="tBar" style="z-index: 1999">
        <v-toolbar-title v-on:click="handleMenuItemClick({ link: '#home' })" :style="{color : isDarkMode ? 'white' : 'black'}">COACH KIP</v-toolbar-title>
        <v-spacer></v-spacer>
        <button :style="{background:isDarkMode ? 'white' : 'black', color:isDarkMode ? 'black' : 'white'}" @click.stop="drawer = !drawer" style="float: right; font-family: 'Aeonik1'; border-bottom-color: #000; border-radius: 20px; padding: 2px 22px 3px; display: block;" class="mr-6 hidden-sm-and-up mt-n1" @click="drawer = true"> Menu
        </button>
        <v-toolbar-items class="hidden-sm-and-down">
          <template v-for="(item, index) in menuItems" :key="index">
            <v-btn :style="{color:isDarkMode ? 'white' : 'black'}" flat :class="{ 'active-line': activeSection === item.link.substring(1) }"
              :color="activeSection === item.link.substring(1) ? '#FFD700' : '#FFFFFF'"
              class="menu-button" @click="handleMenuItemClick(item)">
              {{ item.text }}
            </v-btn>
          </template>
        </v-toolbar-items>
      </v-toolbar>
      </transition>
  <v-navigation-drawer style="z-index: 10000"  location="right" v-model="drawer"
        fixed  temporary  class="mobile-nav fullscreen-drawer" width="490"
      >
        <v-card style="width: 50% !important"></v-card>
        <v-toolbar style="background-color: transparent" class="mt-1">
          <v-icon
            size="small "
            color="black"
            class="mb-n1 ml-5"
            v-on:click="handleMenuItemClick({ link: '#home' })"
            >mdi-arrow-left</v-icon
          >
          <a
            style="font-family: 'Aeonik1'"
            v-on:click="handleMenuItemClick({ link: '#home' })"
            data-w-id="4a4302b6-6981-f1fa-9bee-92d7404c033a"
            class="side-nav-link-home"
            >Home</a
          >
          <v-spacer />
          <button
            style="
              float: right;
              font-family: 'Aeonik1';
              background-color: #252423;
              color: #b7e3b6 ;
              border-bottom-style: none;
              border-bottom-color: #000;
              border-radius: 20px;
              padding: 2px 22px 3px;
              display: block;
            "
            class="mr-6 mt-1"
            @click="drawer = false"
          >
            Close
          </button>
        </v-toolbar>
        <v-row>
          <v-col class="ml-3 mr-3">
            <nav
              class="col col-nav-top w-clearfix"
              style="padding-left: 2% !important"
              aria-label="Main Navigation"
            >
              <ul class="side-nav-list">
                <a
                  style="font-size: 36px; font-family: 'Aeonik1'; line-height: 42px"
                  @click="handleMenuItemClick({ link: '#home' })"
                  class="side-nav-link-large"
                  >Home</a
                >
                <a
                  style="font-size: 36px; font-family: 'Aeonik1'; line-height: 42px"
                  @click="handleMenuItemClick({ link: '#mission' })"
                  class="side-nav-link-large mt-n2"
                  >Mission</a
                >
                <a
                  style="font-size: 36px; font-family: 'Aeonik1'; line-height: 42px"
                  @click="handleMenuItemClick({ link: '#kip' })"
                  class="side-nav-link-large mt-n2"
                  >Kip</a
                >
                <a
                  style="font-size: 36px; font-family: 'Aeonik1'; line-height: 42px"
                  @click="handleMenuItemClick({ link: '#about' })"
                  class="side-nav-link-large mt-n2"
                  >About</a
                >
                <a
                  style="font-size: 36px; font-family: 'Aeonik1'; line-height: 42px"
                  @click="handleMenuItemClick({ link: '#team' })"
                  class="side-nav-link-large mt-n2"
                  >Team</a
                >
                <a
                  style="font-size: 36px; font-family: 'Aeonik1'; line-height: 42px"
                  @click="handleMenuItemClick({ link: '#contact' })"
                  class="side-nav-link-large mt-n2"
                  >Contact</a
                >
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
                  style="
                    font-family: 'Aeonik1';
                    font-size: 16px !important;
                    line-height: 25px !important;
                    color: black !important;
                  "
                  target="_blank"
                  ><v-icon class="mr-1">mdi-twitter</v-icon>Twitter</a
                >
              </li>
              <li>
                <a
                  class="side-nav-link-large"
                  style="
                    font-family: 'Aeonik1';
                    font-size: 16px !important;
                    line-height: 25px !important;
                    color: black !important;
                  "
                  target="_blank"
                  ><v-icon class="mr-1">mdi-linkedin</v-icon>LinkedIn</a
                >
              </li>
              <li>
                <a
                  class="side-nav-link-large"
                  style="
                    font-family: 'Aeonik1';
                    font-size: 16px !important;
                    line-height: 25px !important;
                    color: black !important;
                  "
                  target="_blank"
                  ><v-icon class="mr-1">mdi-instagram</v-icon>Instagram</a
                >
              </li>
              <li>
                <a
                  class="side-nav-link-large"
                  style="
                    font-family: 'Aeonik1';
                    font-size: 16px !important;
                    line-height: 25px !important;
                    color: black !important;
                  "
                  target="_blank"
                  ><v-icon class="mr-1">mdi-vimeo</v-icon>Vimeo</a
                >
              </li>
            </ul>
          </v-col>
        </v-row>
   </v-navigation-drawer>

<!-- TITLE -->
<section style="position: relative; min-height: 100vh; z-index: 999;" id="home">
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
        <input
          class="input-field"
          type="email"
          placeholder="Enter Email"
          :class="isMobile ? 'rounded-input1' : 'rounded-input'"
          :style="{
            border: !isDarkMode ? '1px solid black' : '1px solid #ccc',
            color: isDarkMode ? 'white' : 'black !important' // Change text color based on isDarkMode
          }"
/>
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
        <v-text-field rounded placeholder="Enter email" :width="isMobile ? '205px' : '280px'" hide-details  :style="{
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

<!-- FOLLOWING PAGE -->
<section :style="{ minHeight: isMobile ? '50vh' : '100vh'}"  style=" position: relative; border-radius: 0% !important ;z-index: 999;">
  <v-parallax  :color="isDarkMode ? '#252423' : '#fffbe9'"  :style="{ minHeight: isMobile ? '50vh' : '100vh'}"  style="position: relative; border-radius: 0% !important;">
    <v-container :class="!isMobile ? 'custom-padding' : ''">
      <v-row :class="isMobile ? 'mt-10' : 'mt-10'">
        <v-col  :class="{ 'col-8': !isMobile, 'col-m-10': !isMobile, 'col-xs-12': true }"
          :style="  !isMobile ? { marginLeft: '15px', paddingBottom: '5em',
               paddingLeft: '0',paddingRight: '15px',}: {}">
               <p  style="  font-weight: 400;  display: block;  margin-top: 1.5em;margin-bottom: 1em;
                  font-family: 'Aeonik1';  color: #fffbe9 !important; "
                  :style="{ 'font-size': !isMobile ? '96px' : '38px', lineHeight: 1.00,paddingRight: '5%',
                     color:isDarkMode ? '#fffbe9' : '#252423'
                      }" >
                     A new model for building companies.
                   </p>
                   <p  class="color-ivory" style="padding-right: 6% !important;  padding-bottom: 1em;
                    font-family: 'Aeonik1'; color: #fffbe9 !important; "
                  :style="{
                    'font-size': !isMobile ? '32px' : '16px',
                    letterSpacing: '0.10px',textAlign: 'left',  color:isDarkMode ? '#fffbe9' : '#252423'}" >
                    
                    We work with world-class entreprenuers in the Pacific Northwest to turn
                    the best ideas into market-defining, venture-funded companies with rapid
                    customer adoption.
                </p>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</section>
      <!-- 1ST SECTION : WHAT WE DO -->
<section :style="{ minHeight: isMobile ? '20vh' : '100vh'}" style="  position: relative;  border-radius: 0% !important;z-index: 999; "
        id="mission" @mousemove="handleMouseMove($event, 'What we do')" @mouseleave="handleMouseLeave">
        <v-parallax :color="isDarkMode ? '#252423' : '#fffbe9'" :style="{ minHeight: isMobile ? '20vh' : '100vh'}" style="position: relative; border-radius: 0% !important;">
          <v-container :class="!isMobile ? 'custom-padding' : ''">
            <v-row :class="isMobile ? 'mt-10' : 'mt-10'">
              <v-col   :class="{ 'col-8': !isMobile, 'col-m-10': !isMobile, 'col-xs-12': true }"
                :style=" !isMobile   ? {  marginLeft: '15px',  paddingBottom: '5em',  paddingLeft: '0',
                paddingRight: '15px', }  : {}">
                  <p  style="  font-weight: 400;  display: block;  margin-top: 0.5em;margin-bottom: 1em;
                       font-family: 'Aeonik1';  color: #fffbe9 !important; "
                     :style="{ 'font-size': !isMobile ? '48px' : '30px', lineHeight: 1.15,
                        color:isDarkMode ? '#fffbe9' : '#252423'
                      }" >
                     What we do
                   </p>
                   <p  class="color-ivory" style="padding-right: 6% !important;  padding-bottom: 1em;
                    font-family: 'Aeonik1'; color: #fffbe9 !important; "
                  :style="{
                    'font-size': !isMobile ? '32px' : '16px',
                    letterSpacing: '0.2px',textAlign: 'left',  color:isDarkMode ? '#fffbe9' : '#252423'}" >
                    
                    We are your dream swiss-army-knife co-founder. We design and build a
                    fantastic product, solve the toughest data science problems, and
                    navigate the way to finding strong customer pull through rigorous
                    validation and digital marketing. We bring experience raising billions
                    of dollars of capital. Oh, and we'll manage the books, legal, and HR. We
                    invest everything we have in your success.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
</section>
      <!-- //2ND SECTON : LIST OF THINGS -->
<section  :style="{ minHeight: isMobile ? '70vh' : '100vh'}" style=" position: relative;
        border-radius: 0% !important;z-index: 999;">
        <v-parallax :color="isDarkMode ? '#252423' : '#fffbe9'"  :style="{ minHeight: isMobile ? '70vh' : '100vh'}" 
          style="position: relative; border-radius: 0% !important; " >
          <v-container  fluid :class="!isMobile ? 'services-container' : ''"
            :style=" !isMobile  ? {  marginLeft: '10px',  paddingBottom: '5em', paddingLeft: '8%',
              paddingRight: '15px',}: { paddingTop: '5em' } ">
            <div :style="{'grid-template-columns': isMobile ? '' : 'repeat(2, minmax(250px, 1fr))',
                lineHeight: isMobile ? 2 : 1.5, font : isMobile ? '16px' :'32px'}" class="services-grid" :class="{ 'no-gap': isMobile }">
              <div style="font-family:'Aeonik1">Market Research</div>
              <div style="font-family:'Aeonik1">Recruiting</div>
              <div style="font-family:'Aeonik1">Concept Validation</div>
              <div style="font-family:'Aeonik1">Fundraising</div>
              <div style="font-family:'Aeonik1">Engineering</div>
              <div style="font-family:'Aeonik1">Marketing</div>
              <div style="font-family:'Aeonik1">Company Formation</div>
              <div style="font-family:'Aeonik1">Data Science</div>
              <div style="font-family:'Aeonik1">Go-To-Market</div>
              <div style="font-family:'Aeonik1">Finance</div>
              <div style="font-family:'Aeonik1">Visual & UX Design</div>
              <div style="font-family:'Aeonik1">Operations</div>
              <div style="font-family:'Aeonik1">Product Management</div>
              <div style="font-family:'Aeonik1">Legal & HR</div>
            </div>
          </v-container>
        </v-parallax>
 </section>
      <!-- //HOW WE DO IT SECTION -->
<section :style="{ minHeight: isMobile ? '40vh' : '100vh'}"
        style=" position: relative;  border-radius: 0% !important;z-index: 999;"
        id="kip" @mousemove="handleMouseMove($event, 'How we do it')"  @mouseleave="handleMouseLeave">
        <v-parallax :color="isDarkMode ? '#252423' : '#fffbe9'" :style="{ minHeight: isMobile ? '40vh' : '100vh'}"  style="position: relative; border-radius: 0% !important; " >
          <v-container :class="!isMobile ? 'custom-padding' : ''">
            <v-row :class="isMobile ? 'mt-10' : 'mt-10'">
              <v-col :class="{ 'col-8': !isMobile, 'col-m-10': !isMobile, 'col-xs-12': true }"
                :style="  !isMobile ? { marginLeft: '15px',  paddingBottom: '5em',
                        paddingLeft: '0', paddingRight: '15px', } : {} ">
                        <p  style="  font-weight: 400;  display: block;  margin-top: 0.5em;margin-bottom: 1em;
                       font-family: 'Aeonik1';  color: #fffbe9 !important; "
                     :style="{ 'font-size': !isMobile ? '48px' : '30px', lineHeight: 1.15,
                        color:isDarkMode ? '#fffbe9' : '#252423'
                      }" >
                     How we do it
                   </p>
                   <p  class="color-ivory" style="padding-right: 6% !important;  padding-bottom: 1em;
                    font-family: 'Aeonik1'; color: #fffbe9 !important; "
                  :style="{
                    'font-size': !isMobile ? '32px' : '16px',
                    letterSpacing: '0.2px',textAlign: 'left',  color:isDarkMode ? '#fffbe9' : '#252423'}" >
                    
                    Building a great startup is hard. Really hard. It requires domain
                    expertise, uncommon talent, great execution, great timing, and a little
                    luck. It also requires the ever-elusive great idea. Our team has
                    developed the playbook on how to rapidly validate, refine, and build new
                    businesses.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
</section>


      <!-- //1 - IDEA SECTION -->
<section id="mission"  :style="{ minHeight: isMobile ? '80vh' : '100vh'}" style="  position: relative;  border-radius: 0% !important;
          z-index: 999;  " >
        <v-parallax :style="{ minHeight: isMobile ? '80vh' : '100vh'}" style="position: relative; border-radius: 0% !important;"
        :color="isDarkMode ? '#252423' : '#fffbe9'" >
          <v-container fluid class="fade-up">
            <v-row align="center" justify="center">
              <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <div 
                  @mousemove="handleMouseMove($event, '01—Ideation')" 
                  @mouseleave="handleMouseLeave"
                  ref="lottieContainer" 
                  :class="{'dark-mode': !isDarkMode}" 
                  :style="{width: isMobile ? '300px' : '450px', height: isMobile ? '300px' : '450px'}"
                ></div>
              </v-col>
              <v-col cols="12" md="5" style="padding-right: 2% !important">
                <h4  class="section-title color-slate"  color="#e4dbcc"
                  style="margin-top: 1.25em; margin-bottom: 1.75em'  ;
                  font-weight: 400; line-height: 1.5;"
                  :style="{ 'font-size': !isMobile ? '32px' : '21px' }">
                  01—Ideation
                </h4>
                <p  
                  style="   font-weight: 400;  display: block;  margin-top: 0.5em;
                    margin-bottom: 1em;  font-family: 'Aeonik1'; color: #fffbe9 !important; "
                  :style="{ 'font-size': !isMobile ? '48px' : '30px', 
                  lineHeight: 1.15 , letterSpacing: '0.1px',  paddingRight: '6%',
                  color:isDarkMode ? '#fffbe9' : '#252423'  }">
                  It could be our idea. It could be your idea.
                </p>
                <p class="color-ivory"
                  style="padding-right: 6% !important;  padding-bottom: 1em;
                    font-family: 'Aeonik1'; color: #fffbe9 !important; "
                  :style="{
                    'font-size': !isMobile ? '21px' : '16px',
                    'border-bottom': isMobile ? '1px solid #636363 !important' : '',
                    letterSpacing: '0.2px',textAlign: 'left',
                    color:isDarkMode ? '#fffbe9' : '#252423' }" >
                    Either way, we put it through the ringer: determining if it can be a
                    world-changing, venture-scale company that customers love.
                  <a
                    style="{color:isDarkMode ? '#fffbe9' : '#252423' }"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc_WUMqF_UeOE4F20NAGmEVtapyECjJfggwApu8uOWkWdea-Q/viewform"
                    target="_blank"
                  >
                    Sign up</a
                  >
                  to join our bi-weekly ideation sessions.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
</section>
      <!-- //2 - VALIDATION SECTION -->
<section  id="mission" :style="{ minHeight: isMobile ? '80vh' : '100vh'}" style="  position: relative;  border-radius: 0% !important;
          z-index: 999;  " >
        <v-parallax :style="{ minHeight: isMobile ? '80vh' : '100vh'}" style="position: relative; border-radius: 0% !important;"
        :color="isDarkMode ? '#252423' : '#fffbe9'" >
          <v-container fluid class="fade-up">
            <v-row align="center" justify="center">
              <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <div 
                  @mousemove="handleMouseMove($event, '02—Validation')" 
                  @mouseleave="handleMouseLeave"
                  ref="lottieContainer1" 
                  :class="{'dark-mode': !isDarkMode}" 
                  style="margin-bottom: -3em" 
                  :style="{width: isMobile ? '300px' : '450px', height: isMobile ? '300px' : '450px'}"
                ></div>
              </v-col>
              <v-col cols="12" md="5" style="padding-right: 2% !important">
                <h4  class="section-title color-slate"  color="#e4dbcc"
                  style="margin-top: 1.25em; margin-bottom: 1.75em'  ;
                  font-weight: 400; line-height: 1.5;"
                  :style="{ 'font-size': !isMobile ? '32px' : '21px' }">
                  02—Validation
                </h4>
                <p  
                  style="   font-weight: 400;  display: block;  margin-top: 0.5em;
                    margin-bottom: 1em;  font-family: 'Aeonik1'; color: #fffbe9 !important; "
                  :style="{ 'font-size': !isMobile ? '48px' : '30px', 
                  lineHeight: 1.15 , letterSpacing: '0.1px',  paddingRight: '6%',
                  color:isDarkMode ? '#fffbe9' : '#252423'  }">
                                      Every idea we work on sounds good at first. But nine out of ten aren't.

                </p>
                <p class="color-ivory"
                  style="padding-right: 6% !important;  padding-bottom: 1em;
                    font-family: 'Aeonik1'; color: #fffbe9 !important; "
                  :style="{
                    'font-size': !isMobile ? '21px' : '16px',
                    'border-bottom': isMobile ? '1px solid #636363 !important' : '',
                    letterSpacing: '0.2px',textAlign: 'left',
                    color:isDarkMode ? '#fffbe9' : '#252423' }" >
                    We know this because we track it. We put an idea through its paces,
                    testing customer demand, technical feasibility, business model, unit
                    economics, market dynamics, investor interest, and more. We benchmark
                    every idea against the performance of our past ideas to determine if
                    it's worth our time—and yours.  
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
</section>
      <!-- //03 -  CREATION -->
<section id="mission"  :style="{ minHeight: isMobile ? '80vh' : '100vh'}" style="  position: relative;  border-radius: 0% !important;
          z-index: 999;  " >
        <v-parallax :style="{ minHeight: isMobile ? '80vh' : '100vh'}" style="position: relative; border-radius: 0% !important;"
        :color="isDarkMode ? '#252423' : '#fffbe9'"  >
          <v-container fluid class="fade-up">
            <v-row align="center" justify="center">
              <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <div 
                  @mousemove="handleMouseMove($event, '03—Creation')" 
                  @mouseleave="handleMouseLeave"
                  ref="lottieContainer2" 
                  :class="{'dark-mode': !isDarkMode}" 
                  style="margin-bottom: -3em" 
                  :style="{width: isMobile ? '300px' : '450px', height: isMobile ? '300px' : '450px'}"
                ></div>
              </v-col>
              <v-col cols="12" md="5" style="padding-right: 6% !important">
                <h4  class="section-title color-slate"  color="#e4dbcc"
                  style="margin-top: 1.25em; margin-bottom: 1.75em'  ;
                  font-weight: 400; line-height: 1.5;"
                  :style="{ 'font-size': !isMobile ? '32px' : '21px' }">
                  03—Creation
                </h4>
                <p  
                  style="   font-weight: 400;  display: block;  margin-top: 0.5em;
                    margin-bottom: 1em;  font-family: 'Aeonik1'; color: #fffbe9 !important; "
                  :style="{ 'font-size': !isMobile ? '48px' : '30px', 
                  lineHeight: 1.15 , letterSpacing: '0.1px',  paddingRight: '6%',
                  color:isDarkMode ? '#fffbe9' : '#252423'  }">
                  When an idea is a good one, it’s time to move. Fast.
                </p>
                <p  class="color-ivory" style="padding-right: 6% !important;  padding-bottom: 1em;
                    font-family: 'Aeonik1'; color: #fffbe9 !important; "
                  :style="{
                    'font-size': !isMobile ? '21px' : '16px',
                    'border-bottom': isMobile ? '1px solid #636363 !important' : '',
                    letterSpacing: '0.2px',textAlign: 'left',
                    color:isDarkMode ? '#fffbe9' : '#252423'}" >
                  Our team of designers, engineers, data scientists, marketers, and
                  company builders turn a validated concept into a real product in market.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
</section>
      <!-- //04 - SPINOUT -->
<section  id="mission" :style="{ minHeight: isMobile ? '80vh' : '100vh'}" style="  position: relative;  border-radius: 0% !important;
          z-index: 999;  " >
        <v-parallax :style="{ minHeight: isMobile ? '80vh' : '100vh'}" style="position: relative; border-radius: 0% !important;"
        :color="isDarkMode ? '#252423' : '#fffbe9'"  >
          <v-container fluid class="fade-up">
            <v-row align="center" justify="center">
              <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <div 
                  @mousemove="handleMouseMove($event, '04—Spinout')" 
                  @mouseleave="handleMouseLeave"
                  ref="lottieContainer3" 
                  :class="{'dark-mode': !isDarkMode, 'mt-n6': isMobile}" 
                  style="margin-bottom: -3em" 
                  :style="{width: isMobile ? '300px' : '450px', height: isMobile ? '300px' : '450px'}"
                ></div>
              </v-col>
              <v-col cols="12" md="5" style="padding-right: 6% !important">
                <h4  class="section-title color-slate"  color="#e4dbcc"
                  style="margin-top: 1.25em; margin-bottom: 1.75em'  ;
                  font-weight: 400; line-height: 1.5;"
                  :style="{ 'font-size': !isMobile ? '32px' : '21px' }">
                  04—Spinout
                </h4>
                <p  
                  style="   font-weight: 400;  display: block;  margin-top: 0.5em;
                    margin-bottom: 1em;  font-family: 'Aeonik1'; color: #fffbe9 !important; "
                  :style="{ 'font-size': !isMobile ? '48px' : '30px', 
                  lineHeight: 1.15 , letterSpacing: '0.1px',  paddingRight: '6%',
                  color:isDarkMode ? '#fffbe9' : '#252423'  }">
                  Great companies require extraordinary people and smart capital.
                </p>
                <p  class="color-ivory" style="padding-right: 6% !important;  padding-bottom: 1em;
                    font-family: 'Aeonik1'; color: #fffbe9 !important; "
                  :style="{
                    'font-size': !isMobile ? '21px' : '16px',
                    'border-bottom': isMobile ? '1px solid #636363 !important' : '',
                    letterSpacing: '0.2px',textAlign: 'left',
                    color:isDarkMode ? '#fffbe9' : '#252423'}" >
                  Our spinout process is the best method we know of to get a company off
                  the ground, staffed up, and funded by great venture investors as fast as
                  humanly possible.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
</section>
      <!-- //05 - SCALE UP -->
<section id="mission" :style="{ minHeight: isMobile ? '80vh' : '100vh'}" style="  position: relative;  border-radius: 0% !important;
          z-index: 999;  " >
        <v-parallax :style="{ minHeight: isMobile ? '80vh' : '100vh'}" style="position: relative; border-radius: 0% !important;"
        :color="isDarkMode ? '#252423' : '#fffbe9'"  >
          <v-container fluid class="fade-up">
            <v-row align="center" justify="center">
              <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <div 
                  @mousemove="handleMouseMove($event, '05—Scale Up')" 
                  @mouseleave="handleMouseLeave"
                  ref="lottieContainer4" 
                  :class="{'dark-mode': !isDarkMode, 'mt-n13': isMobile}"  
                  style="margin-bottom: -3em" 
                  :style="{width: isMobile ? '300px' : '450px', height: isMobile ? '300px' : '450px'}"
                ></div>
              </v-col>
              <v-col cols="12" md="5" style="padding-right: 6% !important">
                <h4  class="section-title color-slate"  color="#e4dbcc"
                  style="margin-top: 1.25em; margin-bottom: 1.75em'  ;
                  font-weight: 400; line-height: 1.5;"
                  :style="{ 'font-size': !isMobile ? '32px' : '21px' }">
                  05—Scale Up
                </h4>
                <p  
                  style="   font-weight: 400;  display: block;  margin-top: 0.5em;
                    margin-bottom: 1em;  font-family: 'Aeonik1'; color: #fffbe9 !important; "
                  :style="{ 'font-size': !isMobile ? '48px' : '30px', 
                  lineHeight: 1.15 , letterSpacing: '0.1px',  paddingRight: '6%',
                  color:isDarkMode ? '#fffbe9' : '#252423'  }">
                  We’ll take care of the boring stuff.
                </p>

                <p  class="color-ivory" style="padding-right: 6% !important;  padding-bottom: 1em;
                    font-family: 'Aeonik1'; color: #fffbe9 !important; "
                  :style="{
                  'font-size': !isMobile ? '21px' : '16px',
                  'border-bottom': isMobile ? '1px solid #636363 !important' : '',
                  letterSpacing: '0.2px',textAlign: 'left', color:isDarkMode ? '#fffbe9' : '#252423'}" >
                  Focus is the lifeblood of an early-stage company. Our recruiting, legal,
                  and finance teams, along with our relationships with top service
                  providers, allow founders to keep their eyes squarely on building the
                  business.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
</section>
      <!-- //RESULTS SECTION -->
<section id="about" style="position: relative; z-index: 999; min-height: 50vh">
  <v-parallax style="position: relative; border-radius: 0% !important; min-height: 50vh" 
      :color="isDarkMode ? '#252423' : '#fffbe9'">
      <v-container :class="!isMobile ? 'custom-padding' : ''" class="fade-up">
          <v-row :class="isMobile ? 'mt-15' : 'mt-10'">
              <v-col   :class="{ 'col-8': !isMobile, 'col-m-10': !isMobile, 'col-xs-12': true }"
                :style=" !isMobile   ? {  marginLeft: '15px',  paddingBottom: '5em',  paddingLeft: '0',
                paddingRight: '15px', }  : {}">
                  <p  style="  font-weight: 400;  display: block;  margin-top: 0.5em;margin-bottom: 1em;
                       font-family: 'Aeonik1';  color: #fffbe9 !important; "
                     :style="{ 'font-size': !isMobile ? '48px' : '30px', lineHeight: 1.15,
                        color:isDarkMode ? '#fffbe9' : '#252423'
                      }" >
                      Miles Ran
                   </p>
              </v-col>
          </v-row>

          <v-row :class="isMobile ? 'mt-n2 ' : ''">
              <v-col cols="12" md="6" class="d-flex flex-column justify-end align-start" style="height: 100%">
                  <h1 class="text-h1 large-number" 
                      :style="{ paddingRight: isMobile ? '0' : '3%', paddingLeft: isMobile ? '0' : '3%' }" 
                      v-text="countIdeasSpunOut" style="margin-bottom: 0.1em"  >
                  </h1>
                  <h3 :style="{ fontSize: isMobile ? '34px' : '48px', marginTop: '.5em', marginBottom: '1em', fontWeight: 400, lineHeight: 1.625, paddingRight: isMobile ? '0' : '3%', paddingLeft: isMobile ? '0' : '3%', fontFamily: 'Aeonik1' }" 
                      class="color-ivory" style="margin-bottom: 0.5em"    >
                      Ideas Spun Out
                  </h3>
                  <p :style="{  letterSpacing: '0.2px', fontSize: isMobile ? '18px' : '21px', fontWeight: 400, lineHeight: 1.625, paddingRight: isMobile ? '0' : '3%',
                   paddingLeft: isMobile ? '0' : '3%', fontFamily: 'Aeonik1' }">
                      In the rarest of cases, a startup idea has great timing, true customer demand, and the market is enormous.
                  </p>
              </v-col>

              <v-col cols="12" md="6" class="d-flex flex-column justify-end align-start" style="height: 100%">
                  <h1 class="text-h1 large-number" 
                      :style="{ paddingRight: isMobile ? '0' : '3%', paddingLeft: isMobile ? '0' : '3%' }" 
                      v-text="countIdeasKilled" style="margin-bottom: 0.1em" >
                  </h1>
                  <h3 :style="{  fontSize: isMobile ? '34px' : '48px', marginTop: '.5em', marginBottom: '1em', fontWeight: 400, lineHeight: 1.625, paddingRight: isMobile ? '0' : '3%', paddingLeft: isMobile ? '0' : '3%', fontFamily: 'Aeonik1' }" 
                      class="color-ivory" style="margin-bottom: 0.5em"    >
                      Ideas Killed
                  </h3>
                  <p :style="{ letterSpacing: '0.2px', fontSize: isMobile ? '18px' : '21px', fontWeight: 400, lineHeight: 1.15, paddingRight: isMobile ? '0' : '3%',
                   paddingLeft: isMobile ? '0' : '3%', fontFamily: 'Aeonik1' }">
                      More often than not, an idea isn't a viable business. Our learnings from our failures make us more confident in the ideas that we love.
                  </p>
              </v-col>
          </v-row>
      </v-container>
  </v-parallax>
</section>
      <!-- //SPONSORS SECTION -->
  <section id="sponsor" style="position: relative; z-index: 999; min-height: 70vh">
  <v-parallax style="position: relative; border-radius: 0% !important; min-height: 70vh" 
      :color="isDarkMode ? '#252423' : '#fffbe9'">
      <v-container :class="!isMobile ? 'custom-padding' : ''" class="fade-up">
            <v-row :class="isMobile ? 'mt-15' : 'mt-10'">
              <v-col   :class="{ 'col-8': !isMobile, 'col-m-10': !isMobile, 'col-xs-12': true }"
                :style=" !isMobile   ? {  marginLeft: '15px',  paddingBottom: '5em',  paddingLeft: '0',
                paddingRight: '15px', }  : {}">
                  <p  style="  font-weight: 400;  display: block;  margin-top: 0.5em;margin-bottom: 1em;
                       font-family: 'Aeonik1';  color: #fffbe9 !important; "
                     :style="{ 'font-size': !isMobile ? '48px' : '30px', lineHeight: 1.15,
                        color:isDarkMode ? '#fffbe9' : '#252423'
                      }" >
                      Partners
                   </p>
              </v-col>
            </v-row>
            <v-row :class="isMobile ? 'mt-n3' : ''" class="logo-container">
                <transition-group name="fade">
                    <v-col v-for="(logo, index) in displayedLogos" :key="index" 
                        cols="12" md="4" class="d-flex justify-center align-center" 
                        :class="isDarkMode ? 'logo-item' : ''">
                        <img :src="logo.src" alt="Logo" 
                            :style="{ maxWidth: isMobile ? '60%' : '100%', height: 'auto' }" />
                    </v-col>
                </transition-group>
            </v-row>
        </v-container>
    </v-parallax>
</section>

      <!-- //TEAM SECTION -->
<section id="team" class="shadow-bottom" style="position: relative; z-index: 999; min-height: 70vh">
<v-card :color="isDarkMode ? '#252423' : '#fffbe9'" style="position: relative; border-radius: 0% !important; min-height: 70vh">
  <v-container :class="!isMobile ? 'custom-padding' : ''" class="fade-up">
    <v-row :class="isMobile ? 'mt-15' : 'mt-10'">
              <v-col   :class="{ 'col-8': !isMobile, 'col-m-10': !isMobile, 'col-xs-12': true }"
                :style=" !isMobile   ? {  marginLeft: '15px',  paddingBottom: '5em',  paddingLeft: '0',
                paddingRight: '15px', }  : {}">
                  <p  style="  font-weight: 400;  display: block;  margin-top: 0.5em;margin-bottom: 1em;
                       font-family: 'Aeonik1';  color: #fffbe9 !important; "
                     :style="{ 'font-size': !isMobile ? '48px' : '30px', lineHeight: 1.15,
                        color:isDarkMode ? '#fffbe9' : '#252423'
                      }" >
                      Team
                   </p>
              </v-col>
            </v-row>
    <div class="team-members-container mt-n15"  ref="teamMembersContainer" @mousedown="startDrag" 
         @mouseup="stopDrag"  @mouseleave="stopDrag"      @mousemove="drag"
         :style="{ overflowX: isMobile ? 'auto' : 'hidden', whiteSpace: 'nowrap' }">
      <div class="team-members-row" style="display: flex; flex-direction: row;">
        <v-col v-for="member in teamMembers" :key="member.id" :cols="isMobile ? 9 : 5" class="d-flex flex-column align-center fade-up">
          <v-img  :src="member.image" class="team-image" :height="isMobile ? 470 : 670" :width="isMobile ? 400 : 550" 
              @mousemove="handleMouseMove($event, member.name)" @mouseleave="handleMouseLeave" />
          <h3 style="font-family: 'Aeonik1'" :class="isDarkMode ? 'text-white' : 'text-black'">{{ member.name }}</h3>
          <!-- <p color="black" style="font-family: 'Aeonik1'" :class="isDarkMode ? 'text-white' : 'text-black'">{{ member.position }}</p> -->
        </v-col>
      </div>
    </div>
  </v-container>
</v-card>
</section>

<!-- Footer Section -->
<footer id="contact" class="footer-mobile footer" v-if="isMobile">
  <div class="footer-row1 mb-2" style="margin-top:45% !important">
          <div class="address-section1" :style="{ flex: isMobile ? '0.6' : '0.5', textAlign: 'left' }">
            <div style="font-size:14px !important" class="address-details1">ADDRESS</div>
            <div style="font-size:14px !important" class="address-details1">&nbsp;</div>
            <div style="font-size:14px !important" class="address-details1">
              <p style="font-family:'ChaletBook'">PARKER STUDIO</p>
              <p style="font-family:'ChaletBook'">5325 Ballard Ave NW</p>
              <p style="font-family:'ChaletBook'">Unit 213</p>
              <p style="font-family:'ChaletBook'">Seattle, WA 98107</p>
              <p style="font-family:'ChaletBook'">United States</p>
              <p style="font-family:'ChaletBook'">
                <u>Map
                  <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon>
                </u>
              </p>
            </div>
          </div>
          <div class="address-section1 ml-4" :style="{ flex: isMobile ? '0.6' : '0.5', textAlign: 'left' }">
            <div style="font-size:14px !important" class="address-details1"></div>
            <div style="font-size:14px !important" class="address-details1">&nbsp;</div>
            <div style="font-size:14px !important" class="address-details1">&nbsp;</div>
            <div style="font-size:14px !important" class="address-details1">
              <p style="font-family:'ChaletBook'">PARKER STUDIO</p>
              <p style="font-family:'ChaletBook'">5325 Ballard Ave NW</p>
              <p style="font-family:'ChaletBook'">Unit 213</p>
              <p style="font-family:'ChaletBook'">Seattle, WA 98107</p>
              <p style="font-family:'ChaletBook'">United States</p>
              <p style="font-family:'ChaletBook'">
                <u>Map
                  <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon>
                </u>
              </p>
        </div>
        </div>
        </div>
        <v-divider style="width: 100vw; border-color: black; border:0.1em solid black"  class="mt-2 contact__information__detail__line"/>
        <div class="footer-row1 mb-2" style="margin-top:3% !important">
          <div class="address-section1" :style="{ flex: isMobile ? '0.6' : '0.5', textAlign: 'left' }">
            <div style="font-size:14px !important" class="address-details1">INQUIRIES</div>
            <div style="font-size:14px !important" class="address-details1">&nbsp;</div>
            <div style="font-size:14px !important" class="address-details1">
              <a style="color:black" href="tel:+1 206 395 9662" target="_blank" rel="noopener noreferrer" class="b2">
                <span >+1 206 395 9662 <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon></span> </a>
            </div>
          </div>
          <div class="address-section1 ml-4" :style="{ flex: isMobile ? '0.6' : '0.5', textAlign: 'left' }">
            <div style="font-size:14px !important" class="address-details1"></div>
            <div style="font-size:14px !important" class="address-details1">&nbsp;</div>
            <div style="font-size:14px !important" class="address-details1">&nbsp;</div>
            <div style="font-size:14px !important" class="address-details1">
                <a style="color:black" href="mailto:hello@parker.studio" target="_blank" rel="noopener noreferrer" class="b2">
                  <span >hello(at)parker.studio <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon></span> </a>
        </div>
        </div>
        </div>

        <v-divider style="width: 100vw; border-color: black; border:0.1em solid black"  class="mt-2 contact__information__detail__line"/>
        <div class="footer-row1 mb-2" style="margin-top:3% !important">
          <div class="address-section1" :style="{ flex: isMobile ? '0.6' : '0.5', textAlign: 'left' }">
            <div style="font-size:14px !important" class="address-details1">CAREERS INTERNSHIPS</div>
            <div style="font-size:14px !important" class="address-details1">&nbsp;</div>
            <div style="font-size:14px !important" class="address-details1">
              <a style="color:black" href="mailto:worker@parker.studio" target="_blank" rel="noopener noreferrer" class="b2">
                <span >worker(at)parker.studio <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon></span> </a>
            </div>
          </div>
          <div class="address-section1 ml-4" :style="{ flex: isMobile ? '0.6' : '0.5', textAlign: 'left' }">
            <div style="font-size:14px !important" class="address-details1"></div>
            <div style="font-size:14px !important" class="address-details1">&nbsp;</div>
            <div style="font-size:14px !important" class="address-details1">&nbsp;</div>
            <div style="font-size:14px !important" class="address-details1">
                <a style="color:black" href="mailto:intern@parker.studio" target="_blank" rel="noopener noreferrer" class="b2">
                  <span >intern(at)parker.studio <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon></span> </a>
        </div>
        </div>
        </div>
        <v-divider style="width: 100vw; border-color: black; border:0.1em solid black"  class="mt-2 contact__information__detail__line"/>
        <div class="footer-row1 mb-2" style="margin-top:3% !important">
          <div class="address-section1" :style="{ flex: isMobile ? '0.6' : '0.5', textAlign: 'left' }">
            <div style="font-size:14px !important" class="address-details1">FOLLOW US</div>
            <div style="font-size:14px !important" class="address-details1">&nbsp;</div>
            <div style="font-size:14px !important" class="address-details1">
              <a style="color:black" href="mailto:worker@parker.studio" target="_blank" rel="noopener noreferrer" class="b2">
                <span >Instagram <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon></span> </a>
            </div>
          </div>
          <div class="address-section1 ml-4" :style="{ flex: isMobile ? '0.6' : '0.5', textAlign: 'left' }">
            <div style="font-size:14px !important" class="address-details1"></div>
            <div style="font-size:14px !important" class="address-details1">&nbsp;</div>
            <div style="font-size:14px !important" class="address-details1">&nbsp;</div>
            <div style="font-size:14px !important" class="address-details1">
                <a style="color:black" href="mailto:intern@parker.studio" target="_blank" rel="noopener noreferrer" class="b2">
                  <span >Tumblr <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon></span> </a>
        </div>
        </div>
        </div>
        <v-divider style="width: 100vw; border-color: black; border:0.1em solid black"  class="mt-2 contact__information__detail__line"/>
        <div class="footer-row1 mb-2" style="margin-top:3% !important">
          <div class="address-section1" :style="{ flex: isMobile ? '2' : '0.5', textAlign: 'left' }">
            <div style="font-size:14px !important" class="address-details1">NEWSLETTER</div>
            <div style="font-size:14px !important" class="address-details1">&nbsp;</div>
            <div style="font-size:14px !important" class="address-details1">
              <div class="contact__information__detail__form__input"><input type="email" placeholder="Email address"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290.78 5.31"><g id="Layer_2" data-name="Layer 2"><g id="Design_System" data-name="Design System"><path d="M290.48,0a5,5,0,0,1-5,5H5.31a5,5,0,0,1-5-5" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="0.61"></path></g></g></svg></div>    
            </div>
          </div>
          <div class="address-section1 ml-4" :style="{ flex: isMobile ? '0.6' : '0.5', textAlign: 'left' }">
            <div style="font-size:14px !important" class="address-details1"></div>
            <div style="font-size:14px !important" class="address-details1">&nbsp;</div>
            <div style="font-size:14px !important" class="address-details1">&nbsp;</div>
            <div style="font-size:14px !important" class="address-details1">
              <button class="b2 decoration active green">Submit</button>
        </div>
        </div>
        </div>
        <div
          class="marquee"
          style="
            position: absolute;
            bottom: 0;
            width: 100%;
            background-color: rgba(183, 227, 182, 0.8);
          "
        >
          <v-row>
            <v-col>
              <div class="marquee-container" >
                <span v-if="!isMobile" class="marquee-label1">Currently Working in:</span>
                <span v-else class="marquee-label1" ><span class="ml-1 mr-1 mt-1 mb-1">WORKING IN:</span></span>
                <div class="marquee-content1">
                  <div class="marquee-text1">
                    SEATTLE <span> (21:07:21),</span> SFO
                    <span> (02:07:21),</span> CHICAGO <span> (23:07:21),</span> AUSTIN
                    <span> (23:07:21),</span> NYC <span> (00:07:21),</span> LONDON
                    <span> (00:07:21),</span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
</footer>
<v-footer
        v-if="!isMobile"
        :color="ColorFooter"
        id="contact"
        style="
         min-height: 100vh;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          z-index:2
        "
      >
        <!-- First Row -->
        <div
          class="footer-row"
          :style="{
            marginTop: isMobile ? '30px' : '85px',
            marginBottom: isMobile ? '7px' : '10px',
          }"
        >
          <div v-if="!isMobile" class="address-section contact-title">
            <div class="footer">Contact</div>
          </div>

          <div v-if="!isMobile" class="address-section address-title">
            <div class="footer">ADDRESS</div>
          </div>

          <div
            class="address-section"
            :style="{ flex: isMobile ? '0.6' : '0.3', textAlign: 'left' }"
          >
            <div class="address-details">
              <p>PARKER STUDIO</p>
              <p><u>5325 Ballard Ave NW</u></p>
              <p>Unit 213</p>
              <p>Seattle, WA 98107</p>
              <p>United States</p>
              <p>
                <u
                  >Maps
                  <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon></u
                >
              </p>
            </div>
          </div>

          <div
            class="address-section"
            :style="{ flex: isMobile ? '0.6' : '0.3', textAlign: 'left' }"
          >
            <div v-if="isMobile" class="footer">&nbsp</div>

            <div class="address-details">
              <p>PARKER STORE</p>
              <p><u>5325 Ballard Ave NW</u></p>
              <p>Unit 213</p>
              <p>Seattle, WA 98107</p>
              <p>United States</p>
              <p>
                <u
                  >Maps
                  <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon></u
                >
              </p>
            </div>
          </div>
        </div>
        <v-divider
          style="width: 100vw; border-color: black; margin-left: 50% !important"
        ></v-divider>

        <div
          class="footer-row"
          :style="{
            marginTop: isMobile ? '10px' : '45px',
            marginBottom: isMobile ? '7px' : '15px',
          }"
        >
          <div v-if="!isMobile" class="address-section contact-title">
            <div class="footer"></div>
          </div>

          <div v-if="!isMobile" class="address-section address-title">
            <div class="footer">INQURIES</div>
          </div>

          <div
            class="address-section"
            :style="{ flex: isMobile ? '0.6' : '0.3', textAlign: 'left' }"
          >
            <div v-if="isMobile" class="footer">INQUIRIES</div>
            <div v-if="isMobile" class="footer">&nbsp</div>
            <div class="address-details">
              <p>
                <u
                  >+1 206 395 9662<v-icon size="x-small" class="ml-n1"
                    >mdi-arrow-top-right</v-icon
                  ></u
                >
              </p>
            </div>
          </div>

          <div
            class="address-section"
            :style="{ flex: isMobile ? '0.6' : '0.3', textAlign: 'left' }"
          >
            <div v-if="isMobile" class="footer">&nbsp</div>
            <div v-if="isMobile" class="footer">&nbsp</div>
            <div class="address-details">
              <p>
                <u
                  >+1 206 395 9662
                  <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon></u
                >
              </p>
            </div>
          </div>
        </div>
        <v-divider
          style="width: 100vw; border-color: black; margin-left: 54% !important"
        ></v-divider>

        <div
          class="footer-row"
          :style="{
            marginTop: isMobile ? '10px' : '45px',
            marginBottom: isMobile ? '7px' : '15px',
          }"
        >
          <div v-if="!isMobile" class="address-section contact-title">
            <div class="footer"></div>
          </div>

          <div v-if="!isMobile" class="address-section address-title">
            <div class="footer">CAREER INTERNSHIPS</div>
          </div>

          <div
            class="address-section"
            :style="{ flex: isMobile ? '0.6' : '0.3', textAlign: 'left' }"
          >
            <div v-if="isMobile" class="footer">CAREER INTERNSHIPS</div>
            <div v-if="isMobile" class="footer">&nbsp</div>
            <div class="address-details">
              <p>
                <u
                  >work(at)parker.studio
                  <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon></u
                >
              </p>
            </div>
          </div>

          <div
            class="address-section"
            :style="{ flex: isMobile ? '0.6' : '0.3', textAlign: 'left' }"
          >
            <div v-if="isMobile" class="footer">&nbsp</div>
            <div v-if="isMobile" class="footer">&nbsp</div>
            <div class="address-details">
              <p>
                <u
                  >intern(at)parker.studio
                  <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon></u
                >
              </p>
            </div>
          </div>
        </div>
        <v-divider
          style="width: 100vw; border-color: black; margin-left: 54% !important"
        ></v-divider>

        <div
          class="footer-row"
          :style="{
            marginTop: isMobile ? '10px' : '45px',
            marginBottom: isMobile ? '7px' : '15px',
          }"
        >
          <div v-if="!isMobile" class="address-section contact-title">
            <div class="footer"></div>
          </div>

          <div v-if="!isMobile" class="address-section address-title">
            <div class="footer">FOLLOW US</div>
          </div>

          <div
            class="address-section"
            :style="{ flex: isMobile ? '0.6' : '0.3', textAlign: 'left' }"
          >
            <div v-if="isMobile" class="footer">FOLLOW US</div>
            <div v-if="isMobile" class="footer">&nbsp</div>
            <div class="address-details">
              <p>
                <u
                  >Instagram<v-icon size="x-small" class="ml-n1"
                    >mdi-arrow-top-right</v-icon
                  ></u
                >
              </p>
            </div>
          </div>

          <div
            class="address-section"
            :style="{ flex: isMobile ? '0.6' : '0.3', textAlign: 'left' }"
          >
            <div v-if="isMobile" class="footer">&nbsp</div>
            <div v-if="isMobile" class="footer">&nbsp</div>
            <div class="address-details">
              <p>
                <u
                  >Tumblr
                  <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon></u
                >
              </p>
            </div>
          </div>
        </div>
        <v-divider
          style="width: 100vw; border-color: black; margin-left: 54% !important"
        ></v-divider>

        <div
          class="footer-row"
          :style="{
            marginTop: isMobile ? '10px' : '45px',
            marginBottom: isMobile ? '7px' : '15px',
          }"
        >
          <div v-if="!isMobile" class="address-section contact-title">
            <div class="footer"></div>
          </div>

          <div v-if="!isMobile" class="address-section address-title">
            <div class="footer">NEWS LETTER</div>
          </div>

          <div
            class="address-section"
            :style="{ flex: isMobile ? '0.6' : '0.3', textAlign: 'left' }"
          >
            <div v-if="isMobile" class="footer">NEWS LETTER</div>
            <div v-if="isMobile" class="footer">&nbsp</div>
            <div class="address-details">
              <v-text-field variant="underlined" placeholder="Email" />
            </div>
          </div>

          <div
            class="address-section"
            :style="{ flex: isMobile ? '0.6' : '0.3', textAlign: 'left' }"
          >
            <div v-if="isMobile" class="footer">&nbsp</div>
            <div v-if="isMobile" class="footer">&nbsp</div>
            <div class="address-details">
              <p>Submit</p>
            </div>
          </div>
        </div>

        <div
          class="marquee"
          style="
            position: absolute;
            bottom: 0;
            width: 100%;
            background-color: rgba(183, 227, 182, 0.8);
          "
        >
          <v-row>
            <v-col>
              <div class="marquee-container">
                <span v-if="!isMobile" class="marquee-label">Currently Working in:</span>
                <span v-else class="marquee-label"> Working in:</span>
                <div class="marquee-content">
                  <div class="marquee-text">
                    SEATTLE <span> (21:07:21),</span> SFO
                    <span> (02:07:21),</span> CHICAGO <span> (23:07:21),</span> AUSTIN
                    <span> (23:07:21),</span> NYC <span> (00:07:21),</span> LONDON
                    <span> (00:07:21),</span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
</v-footer>
    </div>
  </v-app>
</template>

<script>
  import lottie from "lottie-web";
  export default {
    data() {
      return {
        isToolbarVisible: true,
        lastScrollY: 0,
        ColorFooter:'#b7e3b6',
        hasStartedCounting:false,
        isDarkMode:false,
        logos: [
          { src:
              "https://cdn.prod.website-files.com/63ef52716f3c2cb3c5525f21/63ef63b75aac697bb4b17e81_client-06.svg",
          },
          { src:
              "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e78784f08679efe2756_SnapShotDark.svg",
          },
          {src:
              "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12d83d99315176ef82659_GenZDark.svg",
          },
          {src:
              "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12ebafce2edf7ddb8cf58_VolumeDark.svg",
          },
          {src:
              "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73563dba154dad_SitemarkDark.svg",
          },
          {src:
              "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12ec2e784a68c2fbf43fc_WavelessDark.svg",
          },
        ],
        showFirstSet: true,
        intervalId: null,
        forLoading: false,
        drawer: false,
        menuItems: [
          { text: "HOME", link: "#home" },
          { text: "Mission", link: "#mission" },
          { text: "KIP", link: "#kip" },
          { text: "ABOUT", link: "#about" },
          { text: "TEAM", link: "#team" },
          { text: "CONTACT", link: "#contact" },
        ],
        hoveredMember: null,
        isMobile: false,
        hoveredCard: null,
        cursorX: 0,
        cursorY: 0,
        showFloatingText: false,
        valid: true,
        name: "",
        email: "",
        message: "",
        emailRules: [
          (v) => !!v || "Email is required",
          (v) => /.+@.+\..+/.test(v) || "Email must be valid",
        ],
        messageRules: [
          (v) => !!v || "Message is required",
          (v) => (v && v.length >= 10) || "Message must be at least 10 characters",
        ],
        teamMembers: [
          {
            id: 1,
            name: "James Jackson",
            position: "",
            image:
              "https://img.freepik.com/premium-photo/3d-cartoon-business-character_776674-532471.jpg",
            details:
              "James has over 20 years of experience in the tech industry and has led multiple successful startups.",
          },
          {
            id: 4,
            name: "Nick Yebra",
            position: "",
            image:
              "https://img.freepik.com/premium-photo/cartoon-character-with-contract-hands-3d-illustration_839035-120672.jpg",
            details:
              "Nick is a marketing guru with a knack for creating compelling brand stories.",
          },
          {
            id: 5,
            name: "John Fritz",
            position: "",
            image:
              "https://img.freepik.com/premium-photo/cartoon-boy-with-brown-hair-blue-jacket-looking-up-generative-ai_900833-38976.jpg?w=360",
            details: "Fritz has a strong experience in web programming",
          },
        ],
        activeSection: "home",
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
        lastScrollPosition: 0,
      };
    },
    computed: {
      displayedLogos() {
        if (this.showFirstSet) {
          return this.logos.slice(0, 3);
        } else {
          return this.logos.slice(3);
        }
      },
      footerTitleFontSize() {
        return this.isMobile ? "2.5vw" : "1.5vw"; // Adjust font size based on screen size
      },
      addressDetailsFontSize() {
        return this.isMobile ? "2.2vw" : "1.2vw"; // Adjust font size based on screen size
      },
      marqueeTextFontSize() {
        return this.isMobile ? "2.2vw" : "1.2vw"; // Adjust font size based on screen size
      },
      marqueeLabelFontSize() {
        return this.isMobile ? "2.2vw" : "1.2vw"; // Adjust font size based on screen size
      },
      floatingX() {
        return this.cursorX - 66; // Adjusts the X position to center the text above the cursor
      },
      floatingY() {
        return this.cursorY - 56; // Adjusts the Y position to place the text above the cursor
      },
      cardHeight() {
        return this.isMobile ? "45vh" : "86vh";
      },
     
      floatingText() {
        return this.hoveredCard ? this.hoveredCard.text : "";
      },
      displayedSponsors() {
        return this.sponsors.slice(
          this.currentIndex,
          this.currentIndex + this.sponsorsPerPage
        );
      },
    },
    methods: {
      toogle() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('isDarkMode', this.isDarkMode); // Save the state in localStorage
      },
      checkDarkMode() {
        const darkModePreference = localStorage.getItem('isDarkMode');
        if (darkModePreference !== null) {
          this.isDarkMode = JSON.parse(darkModePreference); // Load the state from localStorage
        }
      },
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
      handleSponsorClick(sponsor) {
        console.log(sponsor);
      },
      setCustomCursor(type) {
        const cursorUrl =
          type === "dark"
            ? 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="gold"/></svg>'
            : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="white"/></svg>';
        document.body.style.cursor = `url('${cursorUrl}') 10 10, auto`;
      },
      handleMenuItemClick(item) {
        if (item.link.startsWith("#")) {
          const section = document.querySelector(item.link);
          if (section) {
            if (item.link === "#contact") {
              // Scroll to bottom of page
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
            } else {
              // For other sections, use existing behavior
              section.scrollIntoView({ behavior: "smooth" });
            }

            section.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          this.drawer = false;
        }
        this.drawer = false;
      },
      checkMobile() {
        this.isMobile = window.innerWidth < 480;
        // this.countIdeasSpunOut = 0;
        // this.countIdeasKilled = 0;
        // this.startCounting();
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
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.id;
              this.activeSection = sectionId;

              console.log(sectionId,' HAHA')

              // Add visible class to text elements
              const textElements = entry.target.querySelectorAll(".fade-up");
              textElements.forEach((el) => el.classList.add("visible"));
              console.log(sectionId);
              
              // Existing logic for counting
              if (sectionId === "about" && !this.hasStartedCounting) {
                console.log('ey');
                
                this.countIdeasSpunOut = 0;
                this.countIdeasKilled = 0;
                this.startCounting();
                this.hasStartedCounting = true; // Set the flag to true
              }
              if (sectionId === "mission" && this.isDarkMode == true){
                  this.ColorFooter = '#252423'
                  console.log('ey')
              }
              if (sectionId === "mission" && this.isDarkMode == false){
                  this.ColorFooter = 'white'
              }
              if (sectionId === "results" && this.isDarkMode == true){
                  this.ColorFooter = '#252423'
                  console.log('ey')
              }
              if (sectionId === "results" && this.isDarkMode == false){
                  this.ColorFooter = 'white'
              }
              
              else{
                  this.ColorFooter = '#b7e3b6'
              }
            } else {
              // Remove visible class when out of view
              const textElements = entry.target.querySelectorAll(".fade-up");
              textElements.forEach((el) => el.classList.remove("visible"));
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
      // Observe all sections
      document.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
      });
    },
      resetCounting() {
        localStorage.removeItem("countingStarted");
      },
      submitForm() {
        if (this.$refs.form.validate()) {
          // Handle form submission
          console.log("Form submitted:", {
            name: this.name,
            email: this.email,
            message: this.message,
          });

          // Reset form
          this.$refs.form.reset();
        }
      },
      loadLottieAnimation() {
        this.animationInstance = lottie.loadAnimation({
          container: this.$refs.lottieContainer,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path:
            "https://cdn.prod.website-files.com/5d2f74fb3cba1f3a752e2046/5d916146d12b5b7a3da48d14_Ideation.json",
        });
      },
      loadLottieAnimation1() {
        this.animationInstance = lottie.loadAnimation({
          container: this.$refs.lottieContainer1,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path:
            "https://cdn.prod.website-files.com/5d2f74fb3cba1f3a752e2046/5d9161c9cb36a49d93d6b9e8_Validation.json",
        });
      },
      loadLottieAnimation2() {
        this.animationInstance = lottie.loadAnimation({
          container: this.$refs.lottieContainer2,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path:
            "https://cdn.prod.website-files.com/5d2f74fb3cba1f3a752e2046/5d916201124e0776f419828f_Creation.json",
        });
      },
      loadLottieAnimation3() {
        this.animationInstance = lottie.loadAnimation({
          container: this.$refs.lottieContainer3,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path:
            "https://cdn.prod.website-files.com/5d2f74fb3cba1f3a752e2046/5d9161c97115f97b9bd4a04d_SpinOut.json",
        });
      },
      loadLottieAnimation4() {
        this.animationInstance = lottie.loadAnimation({
          container: this.$refs.lottieContainer4,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path:
            "https://cdn.prod.website-files.com/5d2f74fb3cba1f3a752e2046/5d9161c9e6be583f1654f247_ScaleUp.json",
        });
      },
      startDrag(event) {
        this.isDragging = true;
        this.startX = event.pageX - this.$refs.teamMembersContainer.offsetLeft;
        this.scrollLeft = this.$refs.teamMembersContainer.scrollLeft;
        this.$refs.teamMembersContainer.classList.add("dragging");
        event.preventDefault();
      },

      stopDrag() {
        this.isDragging = false;
        this.$refs.teamMembersContainer.classList.remove("dragging");
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
          this.countIdeasSpunOut = Math.round(
            initialSpunOut + (this.maxSpunOut - initialSpunOut) * progress
          );
          this.countIdeasKilled = Math.round(
            initialKilled + (this.maxKilled - initialKilled) * progress
          );

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
      const currentScrollY = window.scrollY;

      if (currentScrollY > this.lastScrollY) {
        this.isToolbarVisible = false; // Hide toolbar on scroll down
      } else {
        this.isToolbarVisible = true; // Show toolbar on scroll up
      }
      this.lastScrollY = currentScrollY; // Update last scroll position
    },
    },
    created() {
      this.checkDarkMode(); // Check dark mode preference on component creation
    },
    mounted() {
      const resizeObserver = new ResizeObserver((entries) => {
        const isMobile = entries[0].contentRect.width < 768;
        this.setCustomCursor(isMobile ? "white" : "dark");
      });
      localStorage.setItem('isDarkMode', this.isDarkMode);
      window.addEventListener("resize", this.checkMobile);
      resizeObserver.observe(document.body);
      this.createIntersectionObserver();
      this.setCustomCursor("dark");
      this.loadLottieAnimation();
      this.loadLottieAnimation1();
      this.loadLottieAnimation2();
      this.loadLottieAnimation3();
      this.loadLottieAnimation4();
      window.addEventListener("scroll", this.handleScroll);
      this.checkMobile();
      // this.intervalId = setInterval(() => {
      //   this.showFirstSet = !this.showFirstSet;
      // }, 1500);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.checkMobile);
      resizeObserver.disconnect();
      this.stopAutoSwitch();
      clearInterval(this.intervalIdSpunOut);
      clearInterval(this.intervalIdKilled);
      window.removeEventListener("scroll", this.handleScroll);
      this.resetCounting();
    },
    beforeUnmount() {
      clearInterval(this.intervalId); // Clean up the interval when the component is destroyed
    },
  };
</script>
<style lang="scss">
  @import "./assets/fonts/fonts.css";
  // body {
  //   font-family: 'Aeonik', Arial, sans-serif; /* Fallback to Arial and sans-serif */
  // }
  @font-face {
    font-family: "Aeonik1";
    src: url("../src/assets/font/AeonikTRIAL-Regular.otf") format("opentype");
    font-weight: 1000 !important;
    font-style: normal;
  }
  @font-face {
    font-family: "Poppins";
    src: url("../src/assets/font/poppins.medium.ttf") format("opentype");
    // font-weight: 1000 !important;
    font-style: normal;
  }
  @font-face {
    font-family: "ChaletBook";
    src: url("../src/assets/font/ChaletBookBold.ttf") format("opentype");
    // font-weight: 1000 !important;
    font-style: normal;
  }
  @font-face {
    font-family: "ChaletBook1";
    src: url("../src/assets/font/ChaletBookRegular.ttf") format("opentype");
    // font-weight: 1000 !important;
    font-style: normal;
  }
</style>

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
  padding-top: 0.6em;
  position: fixed;
  top: 0; /* Ensure it starts at the top */
  left: 0;
  right: 0;
  transition: transform 0.3s ease, opacity 0.3s ease; /* Add transition for smooth sliding */
}

.tBar.hidden {
  transform: translateY(-100%); /* Slide up out of view */
  opacity: 0; /* Optional: Fade out */
}

.tBar.visible {
  transform: translateY(0); /* Slide back into view */
  opacity: 1; /* Optional: Fade in */
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
  background-color: #b7e3b6  !important;
}

.mobile-nav .v-list-item {
  color:black !important

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
  color:  #FFD700  ;
  font-size: 20px;
  transform-origin: center bottom;
  animation: fadeIn 0.2s ease-out;
  display: inline-flex;
  gap: 2px;
  border-radius: 4px; /* Optional: Add some border radius */
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
    box-shadow: 0 5px 15px  #FFD700;
  }
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


/* SECOND SECTION */


@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr; /* Single column for small screens */
  }
}

/* 4TH SECTION */
.svg-animation {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-animation {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Right Column - PSL Typography */
.ideation-text {
  color: white;
  text-align: left;
  max-width: 600px;
  display: block;
  line-height: 1.15;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.section-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 23px;
  font-weight: 400;
  line-height: 1.625;
}

@media (max-width: 768px) {
  .card-hover:hover::before {
    opacity: 0.7;
  }
  .enhanced-button:hover {
    transform: scale(1.05);
  }
}
.card-hover {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

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
.color-slate {
    color: #636363 !important;
    font-family: Aeonik, Arial, sans-serif !important;
}
@media (max-width: 768px) {
  .section {
    height: 200vh; /* Set height to 200vh for mobile */
  }
}

.team-members-container {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 20px 0;
  position: relative;
}

.team-members-container::-webkit-scrollbar {
  display: none;
}

.team-members-row {
  display: inline-flex;
  padding: 0 40px; 
}

.team-image {
  transition: transform 0.3s ease;
  margin: 0 10px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
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

.visible-content {
  display: flex;
  flex-direction: column;
}

.active-line {
  position: relative;
}

.active-line::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -5px; /* Adjust as needed */
  height: 2px; /* Line thickness */
  background-color: #FFD700; /* Line color */
  transition: all 0.3s ease; /* Smooth transition */
}


@media only screen and (min-width: 480px) {
    footer {
        z-index: 4;
    }
}
footer {
    position: relative;
}

footer {
    display: block;
    unicode-bidi: isolate;
}
style attribute {
    --vh-resize: 12.66px;
    --vh: 12.66px;
}
/* Team Section */
.team-section {
    position: relative; /* Ensure it can be layered above the footer */
  }
#team {
    margin-bottom: 1000px; 
}
.my-custom-row {
    min-height: 95px !important; /* Adjust as needed */
}
/* Currently Working In Section */

.marquee-container {
  overflow: hidden;
  position: relative;
  height: 48px; /* Adjust based on your design */
}

.contact__marquee__ticker__inner {
  display: flex;
  animation: marquee 15s linear infinite;
}

@keyframes marquee {
  0% {
      transform: translateX(100%);
  }
  100% {
      transform: translateX(-100%);
  }
}

/* Responsive Styles for Mobile */
@media (max-width: 768px) {
  .marquee-container {
      height: 40px; /* Adjust height for mobile */
  }

  .contact__marquee__ticker__inner h3 {
      font-size: 1.2rem; /* Adjust font size for mobile */
  }
} 
@media (max-width: 768px) {
  .contact__marquee__ticker__inner h5 {
      font-size: 1rem; /* Adjust font size for mobile */
      white-space: nowrap; /* Prevent line breaks */
  }
}
@media (max-width: 768px) {
  #results {
      display: block; /* Ensure it is visible */
      height: auto; /* Adjust height if necessary */
  }
}#app {
min-height: 100vh;
margin: 0;
display: flex;
flex-direction: column;
}

main {
flex-grow: 1;
}

footer {
margin-top: auto;
position: relative;
}

.marquee-container {
overflow: hidden;
position: absolute;
bottom: 0;
width: 100%;
height: 48px;
background-color: #b7e3b6;
z-index: 9;
}

.contact__marquee__ticker__inner {
display: flex;
animation: marquee 15s linear infinite;
}

@keyframes marquee {
0% { transform: translateX(100%); }
100% { transform: translateX(-100%); }
}

/* //HOW WE DO */
.custom-padding {
  padding-left: 14% !important; /* Use !important if necessary */
  padding-right: 14% !important; /* Use !important if necessary */
  display: block;
  font-weight: 400 !important;
}

/* //LIST GRID */
.services-grid {
  color: #636363 !important;
  padding-top: .25em !important;
  padding-bottom: .25em !important;
  flex-basis: 66.67%;
  max-width: 66.6667%;
  flex: 1;
  margin-bottom: 0;
  padding-left: 2% !important;
  padding-right: 15px;
  clear: none;
  text-align: left;
  position: static;
  display: grid;
  
  gap: 12px; 
  column-gap: 1px !important;
  justify-items: start;
}

/* Mobile Styles */
@media (max-width: 600px) { 
  .services-grid {
      padding-left: 0; /* Adjust padding as needed */
      padding-right: 0; /* Adjust padding as needed */
  }
}

.services-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; 
  padding: 4% !important; 
  font-size: 34px !important;
  line-height: 3px;
}

.p-large {
  font-family: Aeonik, Arial, sans-serif !important;
  font-weight: 400 !important;
  line-height: 1.625 !important;
  clear: none;
  text-align: left;
  line-height: 1.5;
  color: #fffbe9 !important;
  /* font-family: Aeonik, Arial, sans-serif; */
}
@media screen and (max-width: 767px) {
  .p-large {
      font-size: 16px;
      line-height: 1.5;
  }
}

.large-number {
  font-size: 180px !important;
  font-weight: bold !important;
  text-align: left; /* Align text to the left */
  /* -webkit-text-stroke: 1px #fffbe9; */
  /* color: #0000;  */
  margin-bottom: .25em;
  padding-bottom: .2em;
  padding-right: .2em;
  /* font-family: Aeonik, Arial, sans-serif; */
  line-height: 1.15;
  border-bottom: 1px solid #636363 !important;
}

.no-gap {
  gap: 0 !important; /* Remove gap */
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
.col.col-nav-top {
  flex: 1;
}
.row.row-buffer {
  justify-content: center;
  padding-top: 2.5vw;
  padding-bottom: 2.5vw;
  position: relative;
}
.row.row-buffer.row-nav {
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
}
/* a:hover {
  border-bottom-style: solid;
  border-bottom-color: #0000;
  display: inline-block;
} */

a:active, a:hover {
  outline: 0;
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

@media screen and (max-width: 479px) {
  a, a:hover {
      display: inline;
  }
}

body {
transform: scale(0.8);
transform-origin: top left;
width: 125%; /* Adjust width to compensate for scaling */
}
.section-title {
font-size: 1.25rem;
/* font-weight: 600; */
}



@media screen and (max-width: 960px) {
.section-title {
  font-size: 1rem;
}
}
.address-content u {
text-decoration: underline;
text-decoration-style: dotted;
text-decoration-thickness: 1px;
}
.flex-grow-1 {
  margin-right: 120px; /* Adjust the value as needed */
}

.flex-grow-1:last-child {
  margin-right: 0; /* Remove margin from the last item */
}
a:hover {
  border-bottom-style: solid;
  border-bottom-color: #0000;
  display: inline-block;
}

a:active, a:hover {
  outline: 0;
}
.side-nav-link-home {
  border-bottom-style: solid;
  border-bottom-color: #0000;
  padding-bottom: 0;
  font-size: 18px;
  line-height: 32px;
}

.section-title1{
font-size: 15px !important;
/* line-height: 15px !important; */
font-family: 'ChaletBook1' !important;
font-weight: 200;
}
.section-title2{
font-size: 26px !important;
/* line-height: 15px !important; */
font-family: 'ChaletBook' !important;
font-weight: 200;
}

.address-content,
.inquiries-content,
.email-content,
.career-content,
.internship-content,
.social-content,
.blog-content {
line-height: 1.5;
font-size:12px !important; 
/* font-weight: 300 !important; */
font-family: 'Poppins';
}

.address-content1{
line-height: 1.5;
font-size:18px !important; 
/* font-weight: 300 !important; */
font-family: 'Poppins';
}
.marquee-content {
overflow: hidden;
flex: 1;
}

.marquee-text {
display: inline-block;
white-space: nowrap;
animation: marquee 20s linear infinite;
padding-left: 100%;
}

@keyframes marquee {
0% { transform: translateX(0); }
100% { transform: translateX(-100%); }
}
.shadow-bottom {
  position: relative; /* Ensure the shadow is positioned relative to the section */
}

.shadow-bottom::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0; /* Position at the bottom */
  height: 10px; /* Adjust height as needed */
  background: rgba(0, 0, 0, 0.5); /* Shadow color */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5); /* Shadow effect */
  z-index: -1; /* Ensure it stays behind the content */
}

.address-content p {
  font-size: 16px !important; /* Adjust the size as needed */
  white-space: nowrap; /* Prevents line breaks */
}

.address-content p,
.section-title1 {
  font-size: 18px; /* Default for larger screens */
}
@media (max-width: 768px) { /* Adjust for mobile */
  .address-content p,
  .section-title1 {
    font-size: 14px !important; /* Smaller font for mobile */
  }
}
.address-content {
  margin-bottom: 1rem; /* Adjust spacing as needed */
}

.footer-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .address-section {
    flex: 0.3;
    text-align: left;
  }

  .footer {
    font-size: 1.5vw;
    transition: all 0.5s ease; /* Add transition for smooth font size change */
  }

  .address-details p {
    font-size: 1.2vw;
    transition: all 0.5s ease; /* Add transition for smooth font size change */
  }

  .marquee-text {
    font-family: "Poppins" !important;
    font-size: 1.2vw;
    transition: all 0.5s ease; /* Add transition for smooth font size change */
  }

  .marquee-container {
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
  }

  .marquee-label {
    font-family: "Poppins" !important;
    font-size: 1.2vw;
    margin-right: 4px;
    transition: all 0.5s ease; /* Add transition for smooth font size change */
  }
  .footer-text {
    font-weight: 400;
    font-family: "ChaletBook" !important; /* Ensure this font is loaded in your project */
    font-size: 18rem; /* Set font size to 18rem */
    line-height: 1.15; /* Set line height to 1.15 */
    letter-spacing: normal; /* Set letter spacing to normal */
    color: #000; /* Optional: Set a default text color */
  }

  /* ADDED 03-07 MOBILE */
  .footer1 {
    font-family: "ChaletBook1" !important;
    font-size: 4vw;
    transition: all 0.5s ease; /* Add transition for smooth font size change */
  }
  .footer-row1 {
    font-family: "ChaletBook1" !important;
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-weight: normal !important;
  }

  .address-section1 {
    flex: 0.3;
    text-align: left;
    font-family: "ChaletBook1" !important;
  }

  .address-details1 p {
    font-family: "ChaletBook1" !important;
    font-size: 14px !important;
    transition: all 0.5s ease;
    line-height: 10px !important; 
    margin-bottom: 3% !important;
    font-weight: 400 !important;
  }
 
  .marquee-container1 {
    overflow: hidden;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 48px;
    background-color: #b7e3b6;
    z-index: 9;
  }
  .marquee-container1 {
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
  }
  .marquee-label1 {
    font-family: "ChaletBook1" !important;
    font-size: 3.5vw;
    margin-right: 4px;
    transition: all 0.5s ease; /* Add transition for smooth font size change */
    
  }
  .marquee-content1 {
    overflow: hidden;
    flex: 1;
  }
  @keyframes marquee1 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .marquee-text1 {
    display: inline-block;
    white-space: nowrap;
    animation: marquee 20s linear infinite;
    padding-left: 100%;
    font-size: 5vw;
    font-family: "ChaletBook1" !important;
    transition: all 0.5s ease;
  }

  .logo-item {
    transition: all 400ms cubic-bezier(0.7, 0, 0.3, 1);
  }

  .logo-item.fade-enter-from {
    transform: translateY(30px);
    opacity: 0;
  }

  .logo-item.fade-enter-active {
    transition: all 400ms cubic-bezier(0.7, 0, 0.3, 1);
  }

  .logo-item.fade-enter-to {
    transform: translateY(0);
    opacity: 1;
  }

  .logo-item.fade-leave-from {
    transform: translateY(0);
    opacity: 1;
  }

  .logo-item.fade-leave-active {
    transition: all 400ms cubic-bezier(0.7, 0, 0.3, 1);
  }

  .logo-item.fade-leave-to {
    transform: translateY(30px);
    opacity: 0;
  }
  .logo-item {
    transition: all 400mscubic-bezier(0.7, 0, 0.3, 1);
    transform: translateY(30px);
  }
  .logo-item img {
    filter: brightness(0%) invert(100%);
    transition: filter 0.3s ease-in-out;
  }

  .logo-item:hover img {
    filter: none;
  }
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  
  .rounded-input {
    padding: 20px;
    border-radius: 30px; /* Rounded corners */
    border: 1px solid #ccc;
    width: 300px; /* Adjust width */
    color:white !important;
  }
  .rounded-input1 {
    padding: 15px;
    border-radius: 30px; /* Rounded corners */
    width: 280px; /* Adjust width */
  }

  .join-button {
    margin-top: 10px;
    padding: 20px 10px 22px 15px;
    border-radius: 30px;
    background-color: black; /* Blue color */
    color: white;
    border: none;
    cursor: pointer;
    width: 200px;
    letter-spacing: 3px;
  }
  .join-button1 {
    margin-top: 10px;
    padding: 10px 10px;
    border-radius: 30px;
    background-color: black; /* Blue color */
    color: white;
    border: none;
    cursor: pointer;
    width: 150px;
    letter-spacing: 1px;
  }

  /* Optional animation for button on hover */
  .join-button:hover {
    transition: background-color 1.3s ease;
    background-color: #ffd700;
    color: rgb(3, 3, 3) !important;
  }
  .dark-mode {
    filter: invert(1); /* Inverts the colors */
  } 
  .title-wrapper {
  margin-top: 10vh; /* Push the title down */
  font-size: 3.5rem; /* Smaller title size */
  font-weight: 100;
  letter-spacing: 1px;
  text-transform: uppercase;
  animation: fadeIn 2s ease-in-out;
  text-align: center;
}

.main-title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.word3 {
  animation: wordAnim 3s ease-in-out;
  position: relative;
}

.separator {
  width: 50%;
  height: 2px;
  margin: 40px auto; /* Space between the title and the form */
}
.form-container {
  margin-top: 20px;
  text-align: center;
}

.input-form {
  margin-top: 20px;
}

.input-field {
  padding: 15px;
  font-size: 1.2rem;
  border-radius: 30px;
  outline: none;
  border: 1px solid #ccc;
  transition: 0.3s ease-in-out;
  width: 80%;
  max-width: 400px;
  margin-bottom: 20px;
}

.input-field:focus {
  border-color: #e2bdb9;
  box-shadow: 0 0 5px rgba(210, 194, 192, 0.6);
}

.join-button {
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.join-button:hover {
  background-color: #ffd700;
  transform: scale(1.05);
}
.social-icons {
  margin-top: 30px;
}

.social-icon {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.social-icon:hover {
  transform: scale(1.2);
}

/* Animation for fading in title */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Animation for the word elements */
@keyframes wordAnim {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}

/* Add mobile responsiveness */
@media (max-width: 600px) {
  .title-wrapper {
    font-size: 2.5rem; /* Smaller title for mobile */
  }

  .input-field {
    width: 70%;
    max-width: 100%;
  }

  .separator {
    width: 80%;
  }
}
.dark-mode-toggle {
  position: fixed;
  bottom: 20px; /* Adjust as needed */
  right: 20px; /* Adjust as needed */
  z-index: 1000; /* Ensure it is above other elements */
  border-radius: 50%; /* Make it circular */
  width: 56px; /* Adjust size */
  height: 56px; /* Adjust size */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Optional shadow */
}

.v-parallax {
will-change: transform;
transform: translateZ(0);
}

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
.footer-row1 {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.address-section1 {
  flex: 0.3;
  text-align: left;
}

.footer1 {
  font-size: 1.5rem; /* Adjust as needed */
}

.footer-mobile {
  background-color: #b7e3b6; /* Background color */
  color: black !important; /* Text color */
  padding: 20px; /* Padding */
  text-align: center; /* Center text */
  position: fixed; /* Fix the position */
  left: 0; /* Align to the left */
  bottom: 0; /* Align to the bottom */
  width: 100%; /* Full width */
  z-index: 2; /* Ensure it is above other content */
  height: 100vh !important; /* Full height */
  font-size: 1rem; /* Default font size */
}

/* Responsive font size adjustments */
@media (max-width: 768px) {
  .footer-mobile {
    font-size: 14px; /* Minimum font size for mobile */
  }
}

@media (min-width: 769px) {
  .footer-mobile {
    font-size: 1.5rem; /* Adjust font size for larger screens */
  }
}

@media (min-width: 1024px) {
  .footer-mobile {
    font-size: 2rem; /* Further adjust for larger screens */
  }
}
@media (max-width: 768px) {
  /* Ensure sections have a solid background color */
  section {
    background-color: #252423; /* Match this to your footer color */
  }
}
</style>
