<template>
  <v-app :style="{ backgroundColor: isDarkMode ? 'white' : 'black' }">
    <div :style="{ backgroundColor: isDarkMode ? 'white' : 'black' }">
      <v-btn
        @click="toogle"
        class="dark-mode-toggle"
        icon
        :style="{ backgroundColor: isDarkMode ? 'white' : 'black' }"
      >
        <v-icon :style="{ color: isDarkMode ? 'black' : 'white' }">{{
          isDarkMode ? "mdi-weather-sunny" : "mdi-weather-night"
        }}</v-icon>
      </v-btn>

      <div
        style="z-index:1999;font-family:'Aeonik"
        v-if="showFloatingText"
        :class="isDarkMode ? 'floating-text' : 'floating-text1'"
        :style="{ left: floatingX + 'px', top: floatingY + 'px' }"
      >
        <span>{{
          hoveredMember.name ? hoveredMember.name : hoveredMember
        }}</span>
      </div>

      <transition name="fade">
        <v-toolbar
          v-show="isToolbarVisible"
          :color="isDarkMode ? '#252423' : '#fffbe9'"
          :class="fixedScroll == false ? 'tBar' : 'tBarFoxed'"
          class="tBar"
          style="z-index: 1999; background: transparent"
        >
          <v-toolbar-title
            v-on:click="handleMenuItemClick({ link: '#home' })"
            :style="{ color: isDarkMode ? 'white' : 'black' }"
          >
            COACH KIP</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <button
            :style="{
              background: isDarkMode ? 'white' : 'black',
              color: isDarkMode ? 'black' : 'white',
            }"
            @click.stop="drawer = !drawer"
            style="
              float: right;
              font-family: 'Aeonik1';
              border-bottom-color: #000;
              border-radius: 40px;
              padding: 8px 34px 10px;
              display: block;
            "
            class="mr-6 hidden-sm-and-down"
            @click="drawer = true"
          >
            Menu
          </button>
          <button
            :style="{
              background: isDarkMode ? 'white' : 'black',
              color: isDarkMode ? 'black' : 'white',
            }"
            @click.stop="drawer = !drawer"
            style="
              float: right;
              font-family: 'Aeonik1';
              border-bottom-color: #000;
              border-radius: 20px;
              padding: 2px 22px 3px;
              display: block;
            "
            class="mr-6 hidden-md-and-up mt-n1"
            @click="drawer = true"
          >
            Menu
          </button>
          <!-- <v-toolbar-items class="hidden-sm-and-down">
      <template v-for="(item, index) in menuItems" :key="index">
        <v-btn :style="{color:isDarkMode ? 'white' : 'black'}" flat :class="{ 'active-line': activeSection === item.link.substring(1) }"
          :color="activeSection === item.link.substring(1) ? '#FFD700' : '#FFFFFF'"
          class="menu-button" @click="handleMenuItemClick(item)">
          {{ item.text }}
        </v-btn>
      </template>
    </v-toolbar-items> -->
        </v-toolbar>
      </transition>

      <v-navigation-drawer
        style="z-index: 10000"
        location="right"
        v-model="drawer"
        fixed
        temporary
        class="mobile-nav fullscreen-drawer d-flex flex-column"
        width="490"
      >
        <v-card style="width: 50% !important"></v-card>

        <v-toolbar style="background-color: transparent" class="mt-1">
          <v-icon
            size="small"
            color="black"
            class="mb-n1 ml-5"
            v-on:click="handleMenuItemClick({ link: '#home' })"
            >mdi-arrow-left</v-icon
          >
          <a
            style="font-family: 'Aeonik1'; color: black"
            v-on:click="handleMenuItemClick({ link: '#home' })"
            class="side-nav-link-home"
            >Home</a
          >
          <v-spacer />
          <button
            :style="{
              background: isDarkMode ? 'black' : 'black',
              color: isDarkMode ? 'white' : 'white',
            }"
            @click.stop="drawer = !drawer"
            style="
              float: right;
              font-family: 'Aeonik1';
              border-bottom-color: #000;
              border-radius: 40px;
              padding: 8px 34px 10px;
              display: block;
            "
            class="mr-6 hidden-sm-and-down"
            @click="drawer = false"
          >
            Close
          </button>
          <button
            style="
              float: right;
              font-family: 'Aeonik1';
              background-color: #252423;
              color: #b7e3b6;
              border-radius: 20px;
              padding: 2px 22px 3px;
            "
            class="mr-6 mt-1 hidden-md-and-up"
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
                  class="side-nav-link-large"
                  style="
                    font-size: 36px;
                    font-family: 'Aeonik1';
                    line-height: 42px;
                  "
                  @click="handleMenuItemClick({ link: '#home' })"
                  >Home</a
                >
                <a
                  class="side-nav-link-large mt-n2"
                  style="
                    font-size: 36px;
                    font-family: 'Aeonik1';
                    line-height: 42px;
                  "
                  @click="handleMenuItemClick({ link: '#whatwedo' })"
                  >About</a
                >
                <a
                  class="side-nav-link-large mt-n2"
                  style="
                    font-size: 36px;
                    font-family: 'Aeonik1';
                    line-height: 42px;
                  "
                  @click="handleMenuItemClick({ link: '#kip' })"
                  >Kip</a
                >
                <a
                  class="side-nav-link-large mt-n2"
                  style="
                    font-size: 36px;
                    font-family: 'Aeonik1';
                    line-height: 42px;
                  "
                  @click="handleMenuItemClick({ link: '#milesran' })"
                  >Research</a
                >
                <!-- <a class="side-nav-link-large mt-n2" style="font-size: 36px; font-family: 'Aeonik1'; line-height: 42px" @click="handleMenuItemClick({ link: '#team' })">Team</a> -->
                <router-link
                  to="/workout-buddy"
                  class="side-nav-link-large mt-n2"
                  style="
                    font-size: 36px;
                    font-family: 'Aeonik1';
                    line-height: 42px;
                    text-decoration: none;
                    color: inherit;
                  "
                  >Workout Buddy</router-link
                >
                <a
                  class="side-nav-link-large mt-n2"
                  style="
                    font-size: 36px;
                    font-family: 'Aeonik1';
                    line-height: 42px;
                  "
                  @click="handleMenuItemClick({ link: '#contact' })"
                  >Contact</a
                >
              </ul>
            </nav>
          </v-col>
        </v-row>

        <v-row class="mt-8" style="padding: 10px">
          <v-col class="ml-3 mr-3">
            <ul class="side-nav-list" style="list-style-type: none; padding: 0">
              <li>
                <a
                  class="side-nav-link-large"
                  href="https://x.com"
                  target="_blank"
                  style="
                    font-family: 'Aeonik1';
                    font-size: 18px !important;
                    line-height: 25px !important;
                    color: black !important;
                  "
                >
                  <v-icon class="mr-1">mdi-twitter</v-icon>Twitter
                </a>
              </li>
              <li>
                <a
                  class="side-nav-link-large"
                  href="https://linkedin.com"
                  target="_blank"
                  style="
                    font-family: 'Aeonik1';
                    font-size: 18px !important;
                    line-height: 25px !important;
                    color: black !important;
                  "
                >
                  <v-icon class="mr-1">mdi-linkedin</v-icon>LinkedIn
                </a>
              </li>
              <li>
                <a
                  class="side-nav-link-large"
                  href="https://instagram.com"
                  target="_blank"
                  style="
                    font-family: 'Aeonik1';
                    font-size: 18px !important;
                    line-height: 25px !important;
                    color: black !important;
                  "
                >
                  <v-icon class="mr-1">mdi-instagram</v-icon>Instagram
                </a>
              </li>
              <li>
                <a
                  class="side-nav-link-large"
                  href="https://vimeo.com"
                  target="_blank"
                  style="
                    font-family: 'Aeonik1';
                    font-size: 18px !important;
                    line-height: 25px !important;
                    color: black !important;
                  "
                >
                  <v-icon class="mr-1">mdi-vimeo</v-icon>Vimeo
                </a>
              </li>
            </ul>
          </v-col>
        </v-row>

        <v-row
          style="
            position: fixed;
            bottom: 0;
            width: 105%;
            padding: 15px;
            background: transparent;
          "
        >
          <div
            style="
              display: flex;
              justify-content: space-between;
              width: 100%;
              align-items: center;
              background: transparent;
            "
          >
            <p
              class="b3 ml-4 mb-4"
              style="
                color: #7da07d;
                font-weight: 400;
                font-family: ChaletBook1;
                font-size: 13px;
                margin: 0;
              "
            >
              ©2025 McCarren Labs, LLC
            </p>
            <p
              @click="goToPrivacy()"
              class="b3 mr-4 mb-4"
              style="
                color: #7da07d;
                font-weight: 400;
                font-family: ChaletBook1;
                font-size: 13px;
                margin: 0;
                cursor: pointer;
              "
            >
              Privacy Policy
            </p>
          </div>
        </v-row>
      </v-navigation-drawer>

      <section
        href="#home"
        id="home"
        :style="{ minHeight: isMobile ? '50vh' : '100vh' }"
        style="position: relative; border-radius: 0% !important; z-index: 999"
      >
        <v-parallax
          :color="isDarkMode ? '#252423' : '#fffbe9'"
          style="position: relative; min-height: 100vh"
        >
          <div
            class="hero-content"
            :style="{ paddingTop: isMobile ? '4% !important' : '' }"
          >
            <div class="title-wrapper">
              <div class="main-title">
                <span
                  :style="{
                    fontWeight: 400,
                    fontFamily: 'Aeonik1, Arial , sans-serif',
                    fontSize: isMobile ? '48px' : '',
                    color: isDarkMode ? 'white' : 'black',
                    '--i': 0,
                  }"
                  class="word"
                  >COACH</span
                >
                <span
                  :style="{
                    fontWeight: 400,
                    fontFamily: 'Aeonik1, Arial , sans-serif',
                    fontSize: isMobile ? '48px' : '',
                    color: isDarkMode ? 'white' : 'black',
                    '--i': 3,
                  }"
                  class="word"
                  >&nbsp;</span
                >
                <span
                  :style="{
                    fontWeight: 400,
                    fontFamily: 'Aeonik1, Arial , sans-serif',
                    fontSize: isMobile ? '48px' : '',
                    color: isDarkMode ? 'white' : 'black',
                    '--i': 6,
                  }"
                  class="word"
                  >KIP</span
                >
              </div>
            </div>

            <div
              class="separator word"
              :style="{
                backgroundColor: isDarkMode ? '#887C5C' : 'black',
                '--i': 7,
              }"
            ></div>
            <!-- Workout Buddy Link removed from here -->
            <div
              v-if="!isMobile"
              class="form-container word"
              :style="{ '--i': 8 }"
            >
              <div class="input-form">
                <button
                  :class="isMobile ? 'join-button1' : 'join-button'"
                  @click="openTypeform()"
                >
                  Join Waitlist
                </button>
              </div>
              <div v-if="isMobile" class="social-icons">
                <v-row
                  no-gutters
                  class="social-row"
                  style="justify-content: center"
                >
                  <v-icon
                    @mousemove="handleMouseMove($event, 'Twitter')"
                    @mouseleave="handleMouseLeave"
                    size="x-large"
                    :style="{ color: !isDarkMode ? 'black' : '#e4dbcc' }"
                    class="mr-2 social-icon"
                    @click="gotoRoutesite('http://x.com')"
                    href="https://x.com/coachkip"
                  >
                    mdi-twitter
                  </v-icon>
                  <v-icon
                    @mousemove="handleMouseMove($event, 'Instagram')"
                    @mouseleave="handleMouseLeave"
                    size="x-large"
                    :style="{ color: !isDarkMode ? 'black' : '#e4dbcc' }"
                    class="mr-2 social-icon"
                    @click="gotoRoutesite('http://instagram.com')"
                    href="https://instagram.com/coachkip"
                  >
                    mdi-instagram
                  </v-icon>
                  <v-icon
                    @mousemove="handleMouseMove($event, 'Message')"
                    @mouseleave="handleMouseLeave"
                    size="x-large"
                    :style="{ color: !isDarkMode ? 'black' : '#e4dbcc' }"
                    class="ml-2 social-icon"
                    href="https://message.com/coachkip"
                    @click="gotoRoutesite('http://message.com')"
                  >
                    mdi-message
                  </v-icon>
                </v-row>
              </div>
            </div>
            <div v-else>
              <div class="form-container word" :style="{ '--i': 8 }">
                <div
                  class="input-form"
                  :style="{
                    marginBottom: isMobile ? '53%' : '',
                    paddingTop: isMobile ? '8% !important' : '',
                  }"
                >
                  <v-btn
                    :color="isDarkMode ? 'white' : 'black'"
                    variant="elevated"
                    style="
                      border-radius: 30px;
                      padding: 22px 32px;
                      font-size: 18px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    "
                    size="x-large"
                    @click="openTypeform()"
                    >Join Waitlist</v-btn
                  >
                  <v-row
                    no-gutters
                    class="social-row mt-2"
                    style="justify-content: center"
                  >
                    <v-icon
                      @mousemove="handleMouseMove($event, 'Twitter')"
                      @mouseleave="handleMouseLeave"
                      size="x-large"
                      :style="{ color: !isDarkMode ? 'black' : '#e4dbcc' }"
                      class="mr-2 social-icon"
                      @click="gotoRoutesite('http://x.com')"
                    >
                      mdi-twitter
                    </v-icon>
                    <v-icon
                      @mousemove="handleMouseMove($event, 'Instagram')"
                      @mouseleave="handleMouseLeave"
                      size="x-large"
                      :style="{ color: !isDarkMode ? 'black' : '#e4dbcc' }"
                      class="mr-2 social-icon"
                      @click="gotoRoutesite('http://instagram.com')"
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
      <section
        href="#home1"
        id="home1"
        :style="{ minHeight: isMobile ? '50vh' : '100vh' }"
        style="position: relative; border-radius: 0% !important; z-index: 999"
      >
        <v-parallax
          :color="isDarkMode ? '#252423' : '#fffbe9'"
          :style="{ minHeight: isMobile ? '50vh' : '100vh' }"
          style="position: relative; border-radius: 0% !important"
        >
          <v-container
            :class="!isMobile ? 'custom-padding' : 'custom-paddingMV'"
          >
            <v-row :class="isMobile ? 'mt-10' : 'mt-10'">
              <v-col
                :class="{
                  'col-8': !isMobile,
                  'col-m-10': !isMobile,
                  'col-xs-12': true,
                }"
                :style="paddingStyles"
              >
                <p
                  style="
                    font-weight: 400;
                    display: block;
                    margin-top: 1.5em;
                    margin-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '96px' : '38px',
                    lineHeight: 1.0,
                    paddingRight: '5%',
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    transition: 'font-size 0.5s ease-out',
                    opacity: sectionVisible.home1 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  Your AGI Running Coach.
                </p>
                <p
                  class="color-ivory"
                  style="
                    padding-right: 6% !important;
                    padding-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '32px' : '18px',
                    letterSpacing: '0.12px',
                    textAlign: 'left',
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    transition: 'font-size 0.5s ease-out',
                    opacity: sectionVisible.home1 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  Your always-on, ever-ready, voice-powered running assistant.
                  Kip guides you through your workouts to help you adjust in the
                  moment.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>
      <section
        href="#whatwedo"
        id="whatwedo"
        :style="{ minHeight: isMobile ? '20vh' : '100vh' }"
        style="position: relative; border-radius: 0% !important; z-index: 999"
        @mousemove="handleMouseMove($event, 'Who is Kip?')"
        @mouseleave="handleMouseLeave"
      >
        <v-parallax
          :color="isDarkMode ? '#252423' : '#fffbe9'"
          :style="{ minHeight: isMobile ? '20vh' : '100vh' }"
          style="position: relative; border-radius: 0% !important"
        >
          <v-container
            :class="!isMobile ? 'custom-padding' : 'custom-paddingMV'"
          >
            <v-row :class="isMobile ? 'mt-10' : 'mt-10'">
              <v-col
                :class="{
                  'col-8': !isMobile,
                  'col-m-10': !isMobile,
                  'col-xs-12': true,
                }"
                :style="
                  !isMobile
                    ? {
                        marginLeft: '15px',
                        paddingBottom: '5em',
                        paddingLeft: '0',
                        paddingRight: '15px',
                      }
                    : {}
                "
              >
                <p
                  style="
                    font-weight: 400;
                    display: block;
                    margin-top: 0.5em;
                    margin-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '48px' : '30px',
                    lineHeight: 1.15,
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    opacity: sectionVisible.whatwedo ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  Who is Kip?
                </p>
                <p
                  class="color-ivory"
                  style="
                    padding-right: 6% !important;
                    padding-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '32px' : '18px',
                    letterSpacing: '0.2px',
                    textAlign: 'left',
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    opacity: sectionVisible.whatwedo ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  Kip is your favorite workout instructor at the gym down the
                  street. He's that high-school coach that always got the best
                  out of you. She's your local running coach who guides your
                  Saturday morning runs. Except, they're all in your pocket.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>
      <section
        href="#kip"
        id="kip"
        :style="{ minHeight: isMobile ? '40vh' : '100vh' }"
        style="position: relative; border-radius: 0% !important; z-index: 999"
        @mousemove="handleMouseMove($event, 'How Kip Works')"
        @mouseleave="handleMouseLeave"
      >
        <v-parallax
          :color="isDarkMode ? '#252423' : '#fffbe9'"
          :style="{ minHeight: isMobile ? '40vh' : '100vh' }"
          style="position: relative; border-radius: 0% !important"
        >
          <v-container
            :class="!isMobile ? 'custom-padding' : 'custom-paddingMV'"
          >
            <v-row :class="isMobile ? 'mt-10' : 'mt-10'">
              <v-col
                :class="{
                  'col-8': !isMobile,
                  'col-m-10': !isMobile,
                  'col-xs-12': true,
                }"
                :style="
                  !isMobile
                    ? {
                        marginLeft: '15px',
                        paddingBottom: '5em',
                        paddingLeft: '0',
                        paddingRight: '15px',
                      }
                    : {}
                "
              >
                <p
                  style="
                    font-weight: 400;
                    display: block;
                    margin-top: 0.5em;
                    margin-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '48px' : '30px',
                    lineHeight: 1.15,
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    opacity: sectionVisible.kip ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  How Kip Works
                </p>
                <p
                  class="color-ivory"
                  style="
                    padding-right: 6% !important;
                    padding-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '32px' : '18px',
                    letterSpacing: '0.2px',
                    textAlign: 'left',
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    opacity: sectionVisible.kip ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  Open the app, upload your workout, and share your goals with
                  Kip. That's it. While you're running, Kip will be there to
                  help you along the way, either keeping you on pace or giving
                  you some motivation.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>

      <section
        href="#mission1"
        id="mission1"
        :style="{ minHeight: isMobile ? '70vh' : '90vh' }"
        style="position: relative; border-radius: 0% !important; z-index: 999"
      >
        <v-parallax
          :style="{ minHeight: isMobile ? '70vh' : '90vh' }"
          style="position: relative; border-radius: 0% !important"
          :color="isDarkMode ? '#252423' : '#fffbe9'"
        >
          <v-container
            :class="!isMobile ? 'custom-paddingdd' : 'custom-paddingMV'"
          >
            <v-row align="center" justify="center">
              <v-col
                cols="12"
                md="6"
                class="d-flex justify-center align-center"
              >
                <div
                  @mousemove="handleMouseMove($event, '01—Import Your Data')"
                  @mouseleave="handleMouseLeave"
                  ref="lottieContainer"
                  :class="{ 'dark-mode': !isDarkMode }"
                  :style="{
                    width: isMobile ? '300px' : '500px',
                    height: isMobile ? '300px' : '500px',
                    marginRight: isMobile ? '10%' : '',
                    opacity: sectionVisible.mission1 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                ></div>
              </v-col>
              <v-col cols="12" md="5" style="padding-right: 2% !important">
                <h4
                  class="section-title color-slate"
                  color="#e4dbcc"
                  style="
                    margin-top: 1.25em;
                    margin-bottom: 1.75em;
                    font-weight: 400;
                    line-height: 1.5;
                  "
                  :style="{
                    'font-size': !isMobile ? '32px' : '21px',
                    opacity: sectionVisible.mission1 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  01—Import Your Data
                </h4>
                <p
                  style="
                    font-weight: 400;
                    display: block;
                    margin-top: 0.5em;
                    margin-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '45px' : '30px',
                    lineHeight: 1.15,
                    letterSpacing: '0.1px',
                    paddingRight: '6%',
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    opacity: sectionVisible.mission1 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  Harness deeper, non-obvious insights locked within your apps.
                </p>
                <p
                  class="color-ivory"
                  style="
                    padding-right: 6% !important;
                    padding-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '21px' : '18px',
                    'border-bottom': isMobile
                      ? '1px solid #636363 !important'
                      : '',
                    letterSpacing: '0.2px',
                    textAlign: 'left',
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    opacity: sectionVisible.mission1 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  Runners are drowning in data-pace, distance, heart rate, sleep
                  scores, and more-but few of us can use this data
                  longitudinally to harness deeper, non-obvious insights locked
                  within these metrics.
                  <!-- The factors that drive our individual performance interact in complex ways; the first step is bringing them all together. -->
                  <!-- <a :style="{color: isDarkMode ? '#fffbe9' : '#252423' }"
              href="https://docs.google.com/forms/d/e/1FAIpQLSc_WUMqF_UeOE4F20NAGmEVtapyECjJfggwApu8uOWkWdea-Q/viewform"
              target="_blank">
              Sign up</a>
            to join our bi-weekly ideation sessions. -->
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>
      <section
        href="#mission2"
        id="mission2"
        :style="{ minHeight: isMobile ? '70vh' : '100vh' }"
        style="position: relative; border-radius: 0% !important; z-index: 999"
      >
        <v-parallax
          :style="{ minHeight: isMobile ? '70vh' : '100vh' }"
          style="position: relative; border-radius: 0% !important"
          :color="isDarkMode ? '#252423' : '#fffbe9'"
        >
          <v-container
            :class="!isMobile ? 'custom-paddingdd' : 'custom-paddingMV'"
          >
            <v-row align="center" justify="center">
              <v-col
                cols="12"
                md="6"
                class="d-flex justify-center align-center"
              >
                <div
                  @mousemove="
                    handleMouseMove(
                      $event,
                      '02—Advanced neural network modeling '
                    )
                  "
                  @mouseleave="handleMouseLeave"
                  ref="lottieContainer1"
                  :class="{ 'dark-mode': !isDarkMode }"
                  style="margin-bottom: -3em"
                  :style="{
                    width: isMobile ? '300px' : '500px',
                    height: isMobile ? '300px' : '500px',
                    marginRight: isMobile ? '10%' : '',
                    opacity: sectionVisible.mission2 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                ></div>
              </v-col>
              <v-col cols="12" md="5" style="padding-right: 2% !important">
                <h4
                  class="section-title color-slate"
                  color="#e4dbcc"
                  style="
                    margin-top: 1.25em;
                    margin-bottom: 1.75em;
                    font-weight: 400;
                    line-height: 1.5;
                  "
                  :style="{
                    'font-size': !isMobile ? '32px' : '21px',
                    opacity: sectionVisible.mission2 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  02—Advanced neural network modeling
                </h4>
                <p
                  style="
                    font-weight: 400;
                    display: block;
                    margin-top: 0.5em;
                    margin-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '45px' : '30px',
                    lineHeight: 1.15,
                    letterSpacing: '0.1px',
                    paddingRight: '6%',
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    opacity: sectionVisible.mission2 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  Inspired by the sophisticated signal optimization strategies
                  of top hedge funds.
                </p>
                <p
                  class="color-ivory"
                  style="
                    padding-right: 6% !important;
                    padding-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '21px' : '18px',
                    'border-bottom': isMobile
                      ? '1px solid #636363 !important'
                      : '',
                    letterSpacing: '0.2px',
                    textAlign: 'left',
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    opacity: sectionVisible.mission2 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  Kip applies advanced neural network modeling and a Large
                  Language Model (LLM) to each runner's data to model past,
                  current, and predicted performance.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>
      <section
        href="#mission3"
        id="mission3"
        :style="{ minHeight: isMobile ? '70vh' : '100vh' }"
        style="position: relative; border-radius: 0% !important; z-index: 999"
      >
        <v-parallax
          :style="{ minHeight: isMobile ? '70vh' : '100vh' }"
          style="position: relative; border-radius: 0% !important"
          :color="isDarkMode ? '#252423' : '#fffbe9'"
        >
          <v-container
            :class="!isMobile ? 'custom-paddingdd' : 'custom-paddingMV'"
          >
            <v-row align="center" justify="center">
              <v-col
                cols="12"
                md="6"
                class="d-flex justify-center align-center"
              >
                <div
                  @mousemove="
                    handleMouseMove($event, '03—Clear, Actionable Guidance')
                  "
                  @mouseleave="handleMouseLeave"
                  ref="lottieContainer2"
                  :class="{ 'dark-mode': !isDarkMode }"
                  style="margin-bottom: -3em"
                  :style="{
                    width: isMobile ? '300px' : '500px',
                    height: isMobile ? '300px' : '500px',
                    marginRight: isMobile ? '10%' : '',
                    opacity: sectionVisible.mission3 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                ></div>
              </v-col>
              <v-col cols="12" md="5" style="padding-right: 6% !important">
                <h4
                  class="section-title color-slate"
                  color="#e4dbcc"
                  style="
                    margin-top: 1.25em;
                    margin-bottom: 1.75em;
                    font-weight: 400;
                    line-height: 1.5;
                  "
                  :style="{
                    'font-size': !isMobile ? '32px' : '21px',
                    opacity: sectionVisible.mission3 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  03—Clear, Actionable Guidance
                </h4>
                <p
                  style="
                    font-weight: 400;
                    display: block;
                    margin-top: 0.5em;
                    margin-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '45px' : '30px',
                    lineHeight: 1.15,
                    letterSpacing: '0.1px',
                    paddingRight: '6%',
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    opacity: sectionVisible.mission3 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  Get an at-a-glance understanding of where you excel, where you
                  lag, and how to improve
                </p>
                <p
                  class="color-ivory"
                  style="
                    padding-right: 6% !important;
                    padding-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '21px' : '18px',
                    'border-bottom': isMobile
                      ? '1px solid #636363 !important'
                      : '',
                    letterSpacing: '0.2px',
                    textAlign: 'left',
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    opacity: sectionVisible.mission3 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  Kip tells you precisely what you need to increase your
                  performance. Get more sleep, take a day off, more Zone 2 work,
                  or more volume. Kip takes all of the guesswork out of your
                  training every week.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>
      <section
        href="#mission4"
        id="mission4"
        :style="{ minHeight: isMobile ? '70vh' : '100vh' }"
        style="position: relative; border-radius: 0% !important; z-index: 999"
      >
        <v-parallax
          :style="{ minHeight: isMobile ? '70vh' : '100vh' }"
          style="position: relative; border-radius: 0% !important"
          :color="isDarkMode ? '#252423' : '#fffbe9'"
        >
          <v-container
            :class="!isMobile ? 'custom-paddingdd' : 'custom-paddingMV'"
          >
            <v-row align="center" justify="center">
              <v-col
                cols="12"
                md="6"
                class="d-flex justify-center align-center"
              >
                <div
                  @mousemove="
                    handleMouseMove($event, '04—Fresh insights in real time')
                  "
                  @mouseleave="handleMouseLeave"
                  ref="lottieContainer3"
                  :class="{ 'dark-mode': !isDarkMode, 'mt-n6': isMobile }"
                  style="margin-bottom: -3em"
                  :style="{
                    width: isMobile ? '300px' : '500px',
                    height: isMobile ? '300px' : '500px',
                    marginRight: isMobile ? '10%' : '',
                    opacity: sectionVisible.mission4 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                ></div>
              </v-col>
              <v-col cols="12" md="5" style="padding-right: 6% !important">
                <h4
                  class="section-title color-slate"
                  color="#e4dbcc"
                  style="
                    margin-top: 1.25em;
                    margin-bottom: 1.75em;
                    font-weight: 400;
                    line-height: 1.5;
                  "
                  :style="{
                    'font-size': !isMobile ? '32px' : '21px',
                    opacity: sectionVisible.mission4 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  04—Fresh insights in real time
                </h4>
                <p
                  style="
                    font-weight: 400;
                    display: block;
                    margin-top: 0.5em;
                    margin-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '45px' : '30px',
                    lineHeight: 1.15,
                    letterSpacing: '0.1px',
                    paddingRight: '6%',
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    opacity: sectionVisible.mission4 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  Get actionable and understandable insights delivered to you on
                  a Daily & Weekly basis.
                </p>
                <p
                  class="color-ivory"
                  style="
                    padding-right: 6% !important;
                    padding-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '21px' : '18px',
                    'border-bottom': isMobile
                      ? '1px solid #636363 !important'
                      : '',
                    letterSpacing: '0.2px',
                    textAlign: 'left',
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    opacity: sectionVisible.mission4 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  No longer do you need a PHD in physics to understand your
                  workout metrics. Understand how your sleep last night affected
                  your run today AND how you should adjust tomorrow.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>
      <section
        href="#mission5"
        id="mission5"
        :style="{ minHeight: isMobile ? '70vh' : '100vh' }"
        style="position: relative; border-radius: 0% !important; z-index: 999"
      >
        <v-parallax
          :style="{ minHeight: isMobile ? '70vh' : '100vh' }"
          style="position: relative; border-radius: 0% !important"
          :color="isDarkMode ? '#252423' : '#fffbe9'"
        >
          <v-container
            :class="!isMobile ? 'custom-paddingdd' : 'custom-paddingMV'"
          >
            <v-row align="center" justify="center">
              <v-col
                cols="12"
                md="6"
                class="d-flex justify-center align-center"
              >
                <div
                  @mousemove="
                    handleMouseMove(
                      $event,
                      '05—Real-Time Voice Coaching (Beta)'
                    )
                  "
                  @mouseleave="handleMouseLeave"
                  ref="lottieContainer4"
                  :class="{ 'dark-mode': !isDarkMode, 'mt-n13': isMobile }"
                  style="margin-bottom: -3em"
                  :style="{
                    width: isMobile ? '300px' : '500px',
                    height: isMobile ? '300px' : '500px',
                    marginRight: isMobile ? '10%' : '',
                    opacity: sectionVisible.mission5 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                ></div>
              </v-col>
              <v-col cols="12" md="5" style="padding-right: 6% !important">
                <h4
                  class="section-title color-slate"
                  color="#e4dbcc"
                  style="
                    margin-top: 1.25em;
                    margin-bottom: 1.75em;
                    font-weight: 400;
                    line-height: 1.5;
                  "
                  :style="{
                    'font-size': !isMobile ? '32px' : '21px',
                    opacity: sectionVisible.mission5 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  05—Real-Time Voice Coaching (Beta)
                </h4>
                <p
                  style="
                    font-weight: 400;
                    display: block;
                    margin-top: 0.5em;
                    margin-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '45px' : '30px',
                    lineHeight: 1.15,
                    letterSpacing: '0.1px',
                    paddingRight: '6%',
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    opacity: sectionVisible.mission5 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  Your always-on, ever-ready, voice-powered running assistant.
                  Never look at your watch again.
                </p>
                <p
                  class="color-ivory"
                  style="
                    padding-right: 6% !important;
                    padding-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '21px' : '18px',
                    'border-bottom': isMobile
                      ? '1px solid #636363 !important'
                      : '',
                    letterSpacing: '0.2px',
                    textAlign: 'left',
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    opacity: sectionVisible.mission5 ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  Using a real-time generative AI voice-to-voice model, Kip
                  guides you through your workouts to help you adjust in the
                  moment.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>

      <section
        id="milesran"
        style="position: relative; z-index: 999"
        :style="{ minHeight: isMobile ? '50vh' : '100vh' }"
      >
        <v-parallax
          style="position: relative; border-radius: 0% !important"
          :style="{ minHeight: isMobile ? '50vh' : '100vh' }"
          :color="isDarkMode ? '#252423' : '#fffbe9'"
        >
          <v-container
            :class="!isMobile ? 'custom-padding' : 'custom-paddingMV'"
          >
            <v-row :class="isMobile ? 'mt-15' : 'mt-10'">
              <v-col
                :class="{
                  'col-8': !isMobile,
                  'col-m-10': !isMobile,
                  'col-xs-12': true,
                }"
                :style="
                  !isMobile
                    ? {
                        marginLeft: '15px',
                        paddingBottom: '5em',
                        paddingLeft: '0',
                        paddingRight: '15px',
                      }
                    : {}
                "
              >
                <p
                  style="
                    font-weight: 400;
                    display: block;
                    margin-top: 0.5em;
                    margin-bottom: 1em;
                    font-family: 'Aeonik1';
                    color: #fffbe9 !important;
                  "
                  :style="{
                    'font-size': !isMobile ? '48px' : '30px',
                    lineHeight: 1.15,
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    transition: 'font-size 0.5s ease-out',
                  }"
                >
                  The Research
                </p>
              </v-col>
            </v-row>

            <v-row :class="isMobile ? 'mt-n2 ' : ''">
              <v-col
                cols="12"
                md="6"
                class="d-flex flex-column justify-end align-start"
                style="height: 100%"
              >
                <h1
                  class="text-h1 large-number"
                  v-if="!isMobile"
                  :style="{
                    opacity: sectionVisible.milesran ? 1 : 0,
                    transition: 'opacity 1s ease',
                    paddingRight: isMobile ? '0' : '3%',
                    paddingLeft: isMobile ? '0' : '3%',
                  }"
                  v-text="countIdeasSpunOut"
                  style="margin-bottom: 0.1em"
                ></h1>
                <h1
                  class="text-h1 large-numberMV"
                  v-if="isMobile"
                  :style="{
                    opacity: sectionVisible.milesran ? 1 : 0,
                    transition: 'opacity 1s ease',
                    paddingRight: isMobile ? '0' : '3%',
                    paddingLeft: isMobile ? '0' : '3%',
                  }"
                  v-text="countIdeasSpunOut"
                  style="margin-bottom: 0.1em"
                ></h1>
                <h3
                  :style="{
                    opacity: sectionVisible.milesran ? 1 : 0,
                    transition: 'opacity 1s ease',
                    fontSize: isMobile ? '34px' : '48px',
                    marginTop: '.5em',
                    marginBottom: '1em',
                    fontWeight: 400,
                    lineHeight: 1.625,
                    paddingRight: isMobile ? '0' : '3%',
                    paddingLeft: isMobile ? '0' : '3%',
                    fontFamily: 'Aeonik1',
                  }"
                  class="color-ivory"
                  style="margin-bottom: 0.5em"
                >
                  Runners modeled
                </h3>
                <p
                  :style="{
                    opacity: sectionVisible.milesran ? 1 : 0,
                    transition: 'opacity 1s ease',
                    letterSpacing: '0.2px',
                    fontSize: isMobile ? '18px' : '21px',
                    fontWeight: 400,
                    lineHeight: 1.625,
                    paddingRight: isMobile ? '0' : '3%',
                    paddingLeft: isMobile ? '0' : '3%',
                    fontFamily: 'Aeonik1',
                  }"
                >
                  Our models have been fine-tuned on data of over 18k runners to
                  glean to most accurate insights
                </p>
              </v-col>

              <v-col
                cols="12"
                md="6"
                class="d-flex flex-column justify-end align-start"
                style="height: 100%"
              >
                <h1
                  class="text-h1 large-number ml-4"
                  v-if="!isMobile"
                  :style="{
                    opacity: sectionVisible.milesran ? 1 : 0,
                    transition: 'opacity 1s ease',
                    paddingRight: isMobile ? '0' : '3%',
                    paddingLeft: isMobile ? '0' : '3%',
                  }"
                  v-text="countIdeasKilled"
                  style="margin-bottom: 0.1em"
                ></h1>
                <h1
                  class="text-h1 large-numberMV ml-4"
                  v-if="isMobile"
                  :style="{
                    opacity: sectionVisible.milesran ? 1 : 0,
                    transition: 'opacity 1s ease',
                    paddingRight: isMobile ? '0' : '3%',
                    paddingLeft: isMobile ? '0' : '3%',
                  }"
                  v-text="countIdeasKilled"
                  style="margin-bottom: 0.1em"
                ></h1>
                <h3
                  :style="{
                    opacity: sectionVisible.milesran ? 1 : 0,
                    transition: 'opacity 1s ease',
                    fontSize: isMobile ? '34px' : '48px',
                    marginTop: '.5em',
                    marginBottom: '1em',
                    fontWeight: 400,
                    lineHeight: 1.625,
                    paddingRight: isMobile ? '0' : '3%',
                    paddingLeft: isMobile ? '0' : '3%',
                    fontFamily: 'Aeonik1',
                  }"
                  class="color-ivory ml-4"
                  style="margin-bottom: 0.5em"
                >
                  New Personal Records
                </h3>
                <p
                  class="ml-4"
                  :style="{
                    opacity: sectionVisible.milesran ? 1 : 0,
                    transition: 'opacity 1s ease',
                    letterSpacing: '0.2px',
                    fontSize: isMobile ? '18px' : '21px',
                    fontWeight: 400,
                    lineHeight: 1.15,
                    paddingRight: isMobile ? '0' : '3%',
                    paddingLeft: isMobile ? '0' : '3%',
                    fontFamily: 'Aeonik1',
                  }"
                >
                  In early testing, our research and modeling have accounted for
                  PRs for more than 70% of our alpha users.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>
      <section
        class="shadow-bottom"
        :class="!isMobile ? 'BottomMargin' : ' '"
        id="partners"
        style="position: relative; z-index: 999"
        :style="{ minHeight: isMobile ? '40vh' : '70vh' }"
      >
        <v-parallax
          style="position: relative; border-radius: 0% !important"
          :style="{ minHeight: isMobile ? '40vh' : '70vh' }"
          :color="isDarkMode ? '#252423' : '#fffbe9'"
        >
          <v-container
            :class="!isMobile ? 'custom-padding' : 'custom-paddingMV'"
          >
            <v-row :class="isMobile ? 'mt-15' : 'mt-10'">
              <v-col
                :class="{
                  'col-8': !isMobile,
                  'col-m-10': !isMobile,
                  'col-xs-12': true,
                }"
                :style="
                  !isMobile
                    ? {
                        marginLeft: '15px',
                        paddingBottom: '5em',
                        paddingLeft: '0',
                        paddingRight: '15px',
                      }
                    : {}
                "
              >
                <p
                  style="
                    font-weight: 400;
                    display: block;
                    margin-top: 0.5em;
                    margin-bottom: 1em;
                    font-family: 'Aeonik1';
                  "
                  :style="{
                    fontSize: !isMobile ? '48px' : '30px',
                    lineHeight: 1.15,
                    color: isDarkMode ? '#fffbe9' : '#252423',
                    opacity: sectionVisible.partners ? 1 : 0,
                    transition: 'opacity 1s ease',
                  }"
                >
                  Partners
                </p>
              </v-col>
            </v-row>

            <v-row
              class="logo-container"
              :style="{
                opacity: sectionVisible.partners ? 1 : 0,
                transition: 'opacity 1s ease',
                whiteSpace: isMobile ? 'nowrap' : 'normal',
                flexWrap: isMobile ? 'nowrap' : 'wrap',
                marginBottom: isMobile ? '10px' : '',
              }"
            >
              <transition-group
                name="fade"
                tag="div"
                class="d-flex align-center"
              >
                <v-col
                  v-for="(logo, index) in logos"
                  :key="index"
                  cols="auto"
                  class="d-flex justify-center align-center"
                  :style="{
                    display: isMobile ? 'inline-block' : 'flex',
                    minWidth: isMobile ? '120px' : '150px',
                  }"
                  :class="isDarkMode ? 'logo-item' : 'logo-item1'"
                >
                  <center>
                    <img
                      :class="isMobile ? 'ml-n5' : 'ml-n2'"
                      :src="logo"
                      :style="{
                        maxWidth: isMobile
                          ? '100px'
                          : '210px' /* Set a consistent max width */,
                        height: 'auto' /* Maintain aspect ratio */,
                      }"
                    />
                  </center>
                </v-col>
              </transition-group>
            </v-row>
          </v-container>
        </v-parallax>
      </section>

      <footer
        style="
          background: #b7e3b6;
          width: 100%;
          position: fixed;
          bottom: 0;
          top: 0;
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
        "
        v-if="!isMobile"
        id="contact"
      >
        <div
          class="mt-1"
          style="
            display: flex;
            justify-content: space-between;
            align-items: left;
            width: 100%;
            padding-left: 15px;
          "
        >
          <div style="flex: 1">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
          <div style="flex: 1; text-align: left">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
          <div style="flex: 1; text-align: left">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
        </div>
        <div
          class="mt-1"
          style="
            display: flex;
            justify-content: space-between;
            align-items: left;
            width: 100%;
            padding-left: 15px;
          "
        >
          <div style="flex: 1">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              CONTACT
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
          <div style="flex: 1; text-align: left">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              ADDRESS
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
          <div style="flex: 1; text-align: left">
            <p
              style="
                line-height: 1.15;
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              KIP HEADQUARTERS
            </p>
            <p
              style="
                line-height: 1.15;
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              1 N 4 Pl.
            </p>
            <p
              style="
                line-height: 1.15;
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              Brooklyn, NY 11249
            </p>
            <p
              style="
                line-height: 1.15;
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              United States
            </p>
            <p
              style="
                line-height: 1.15;
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              <a
                style="
                  text-decoration-thickness: 1px;
                  line-height: 1.15;
                  transition: font-size 0.5s ease-out;
                  font-family: 'ChaletBook1';
                  font-size: clamp(14px, 1.3vw, 24px);
                  color: black;
                "
                href="https://maps.app.goo.gl/XiNdKjy83swH1nWu5"
                target="_blank"
                class="map-link"
              >
                Map
                <v-icon size="x-small" class="ml-n1"
                  >mdi-arrow-top-right</v-icon
                >
              </a>
            </p>
          </div>
        </div>
        <hr
          width="100%"
          style="border: 0.2px solid #7da07d !important; margin-left: 33.33%"
        />
        <div
          class="mt-8"
          style="
            display: flex;
            justify-content: space-between;
            align-items: left;
            width: 100%;
          "
        >
          <div style="flex: 1">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
          <div style="flex: 1; text-align: left">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              INQUIRIES
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
          <div style="flex: 1; text-align: left">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
              href="tel:+1 770-569-3220"
              target="_blank"
              class="map-link"
            >
              <a
                style="
                  text-decoration-thickness: 1px;
                  line-height: 1.15;
                  transition: font-size 0.5s ease-out;
                  font-family: 'ChaletBook1';
                  font-size: clamp(14px, 1.3vw, 24px);
                  color: black;
                "
                href="tel:+1 770-569-3220"
                target="_blank"
                class="map-link"
              >
                +1 770 569 3220
                <v-icon size="x-small" class="ml-n1"
                  >mdi-arrow-top-right</v-icon
                >
              </a>
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
        </div>
        <hr
          width="100%"
          style="border: 0.2px solid #7da07d !important; margin-left: 33.33%"
          class="mt-n14"
        />
        <div
          class="mt-8"
          style="
            display: flex;
            justify-content: space-between;
            align-items: left;
            width: 100%;
          "
        >
          <div style="flex: 1">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
          <div style="flex: 1; text-align: left">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              INFO
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
          <div style="flex: 1; text-align: left">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
              href="mailto:hello@coach.kip"
              target="_blank"
              class="map-link"
            >
              <a
                style="
                  text-decoration-thickness: 1px;
                  line-height: 1.15;
                  transition: font-size 0.5s ease-out;
                  font-family: 'ChaletBook1';
                  font-size: clamp(14px, 1.3vw, 24px);
                  color: black;
                "
                href="tel:+1 770-569-3220"
                target="_blank"
                class="map-link"
              >
                hello(at)kip.coach
                <v-icon size="x-small" class="ml-n1"
                  >mdi-arrow-top-right</v-icon
                >
              </a>
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
        </div>
        <hr
          width="100%"
          style="border: 0.2px solid #7da07d !important; margin-left: 33.33%"
          class="mt-n14"
        />
        <div
          class="mt-8"
          style="
            display: flex;
            justify-content: space-between;
            align-items: left;
            width: 100%;
          "
        >
          <div style="flex: 1">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
          <div style="flex: 1; text-align: left">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              FOLLOW US
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
          <div style="flex: 1; text-align: left">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
              href="https://linkedin.com"
              target="_blank"
              class="map-link"
            >
              <a
                style="
                  text-decoration-thickness: 1px;
                  line-height: 1.15;
                  transition: font-size 0.5s ease-out;
                  font-family: 'ChaletBook1';
                  font-size: clamp(14px, 1.3vw, 24px);
                  color: black;
                "
                href="tel:+1 770-569-3220"
                target="_blank"
                class="map-link"
              >
                LinkedIn
                <v-icon size="x-small" class="ml-n1"
                  >mdi-arrow-top-right</v-icon
                >
              </a>
              <a
                style="
                  text-decoration-thickness: 1px;
                  line-height: 1.15;
                  transition: font-size 0.5s ease-out;
                  font-family: 'ChaletBook1';
                  font-size: clamp(14px, 1.3vw, 24px);
                  color: black;
                "
                href="tel:+1 770-569-3220"
                target="_blank"
                class="map-link ml-5"
              >
                Instagram
                <v-icon size="x-small" class="ml-n1"
                  >mdi-arrow-top-right</v-icon
                >
              </a>
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
        </div>
        <hr
          width="100%"
          style="border: 0.2px solid #7da07d !important; margin-left: 33.33%"
          class="mt-n8 mb-4"
        />
        <div
          class="mt-1"
          style="
            display: flex;
            justify-content: space-between;
            align-items: left;
            width: 100%;
          "
        >
          <div style="flex: 1">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
          <div style="flex: 1; text-align: left">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              WISHLIST
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: clamp(14px, 1.3vw, 24px);
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
          <div style="flex: 1; text-align: left">
            <v-row>
              <v-col cols="6">
                <p
                  style="
                    transition: font-size 0.5s ease-out;
                    font-family: 'ChaletBook1';
                    font-size: clamp(14px, 1.3vw, 24px);
                    color: black;
                  "
                  class="map-link1"
                >
                  <input
                    placeholder="Email Address"
                    style="border: none; outline: none"
                    v-model="email"
                  />
                  <svg
                    class="mt-n10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 290.78 5.31"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Design_System" data-name="Design System">
                        <path
                          d="M290.48,0a5,5,0,0,1-5,5H5.31a5,5,0,0,1-5-5"
                          fill="none"
                          stroke="#000"
                          stroke-miterlimit="10"
                          stroke-width="0.61"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </p>
              </v-col>
              <v-col class="mt-4">
                <v-icon
                  @click="sendEmail()"
                  class="ml-n4"
                  size="x-small"
                  style="
                    transition: font-size 0.5s ease-out;
                    font-family: 'ChaletBook1';
                    font-size: clamp(14px, 1.3vw, 24px);
                    color: black;
                  "
                  >mdi-circle</v-icon
                >
                <span
                  @click="sendEmail()"
                  class="mr-6"
                  style="
                    transition: font-size 0.5s ease-out;
                    font-family: 'ChaletBook1';
                    font-size: clamp(14px, 1.3vw, 24px);
                    color: black;
                  "
                  >SUBMIT</span
                >
              </v-col>
            </v-row>
          </div>
        </div>

        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: left;
            width: 100%;
            margin-bottom: 20px;
            padding-left: 15px;
          "
        >
          <div style="flex: 1">
            <div class="marquee mb-1">
              <v-row>
                <v-col>
                  <div class="marquee-container mb-3">
                    <div class="marquee-container">
                      <span v-if="!isMobile" class="marquee-label"
                        >CURRENTLY WORKING IN:</span
                      >
                      <div class="marquee-content">
                        <div class="ticker">
                          <span class="item-collection-1">
                            <span class="item2"
                              >PARIS ({{ this.seattleTime }}),
                            </span>
                            <span class="item2"
                              >SFO ({{ this.sfoTime }}),
                            </span>
                            <span class="item2"
                              >CHICAGO ({{ this.chicagoTime }}),
                            </span>
                            <span class="item2"
                              >AUSTIN ({{ this.austinTime }}),
                            </span>
                            <span class="item2"
                              >NYC ({{ this.nycTime }}),
                            </span>
                            <span class="item2"
                              >LONDON ({{ this.londonTime }}),
                            </span>
                          </span>
                          <span class="item-collection-2">
                            <span class="item2"
                              >PARIS ({{ this.seattleTime }}),
                            </span>
                            <span class="item2"
                              >SFO ({{ this.sfoTime }}),
                            </span>
                            <span class="item2"
                              >CHICAGO ({{ this.chicagoTime }}),
                            </span>
                            <span class="item2"
                              >AUSTIN ({{ this.austinTime }}) ,</span
                            >
                            <span class="item2"
                              >NYC ({{ this.nycTime }}) ,</span
                            >
                            <span class="item2"
                              >LONDON ({{ this.londonTime }}) ,</span
                            >
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
            <!-- Discreet footer link -->
            <div
              style="position: absolute; bottom: 5px; right: 15px; opacity: 0.6"
            >
              <router-link
                to="/workout-buddy"
                style="
                  color: #666;
                  font-family: 'ChaletBook1';
                  font-size: 11px;
                  text-decoration: none;
                  transition: opacity 0.3s ease;
                "
                @mouseover="$event.target.style.opacity = '1'"
                @mouseleave="$event.target.style.opacity = '0.6'"
                @click="trackWorkoutBuddyClick()"
              >
                Workout Buddy
              </router-link>
            </div>
          </div>
        </div>
      </footer>

      <!-- MOBILE FOOTER -->
      <footer
        style="
          background: #b7e3b6;
          position: fixed;
          bottom: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
        "
        v-if="isMobile"
        id="contact"
      >
        <!-- First section: Address -->
        <div
          class="mt-1"
          style="
            margin-top: 20% !important;
            display: flex;
            justify-content: space-between;
            align-items: left;
            width: 100%;
            margin-bottom: 20px;
            padding-left: 15px;
            padding-top: 18px;
          "
        >
          <div style="flex: 1">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>

          <div style="flex: 1; text-align: left">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>
        </div>

        <div
          class="mt-1"
          style="
            padding: 14px 0 20px 0;
            margin-top: 16% !important;
            display: flex;
            justify-content: space-between;
            align-items: left;
            width: 100%;
            margin-bottom: 20px;
            padding-left: 15px;
            padding-top: 18px;
          "
        >
          <div style="flex: 1">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              ADDRESS
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              &nbsp;
            </p>
          </div>

          <div style="flex: 1; text-align: left">
            <p
              style="
                line-height: 1.15;
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              KIP HEADQUARTERS
            </p>
            <p
              style="
                line-height: 1.15;
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              1 N 4 Pl.
            </p>
            <p
              style="
                line-height: 1.15;
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              Brooklyn, NY 11249
            </p>
            <p
              style="
                line-height: 1.15;
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              United States
            </p>
            <p
              style="
                line-height: 1.15;
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              <a
                style="
                  text-decoration-thickness: 1px;
                  line-height: 1.15;
                  transition: font-size 0.5s ease-out;
                  font-family: 'ChaletBook1';
                  font-size: 14px;
                  color: black;
                "
                href="https://maps.app.goo.gl/XiNdKjy83swH1nWu5"
                target="_blank"
                class="map-link"
              >
                Map
                <v-icon size="x-small" class="ml-n1"
                  >mdi-arrow-top-right</v-icon
                >
              </a>
            </p>
          </div>
        </div>
        <hr
          width="1000vw"
          class="mt-n8 mb-6"
          style="border: 0.5px solid #7da07d"
        />
        <div
          style="
            padding: 14px 0 20px 0;
            display: flex;
            justify-content: space-between;
            align-items: left;
            width: 100%;
            margin-bottom: 20px;
            padding-left: 15px;
          "
        >
          <div style="flex: 1">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              INQUIRIES
            </p>
          </div>
          <div style="flex: 1; text-align: left">
            <a
              style="
                text-decoration-thickness: 1px;
                line-height: 1.15;
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
              href="tel:+1 770-569-3220"
              target="_blank"
              class="map-link"
            >
              +1 770 569 3220
              <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon>
            </a>
          </div>
        </div>
        <hr
          width="1000vw"
          class="mt-n6 mb-6"
          style="border: 0.5px solid #7da07d"
        />
        <div
          style="
            padding: 14px 0 20px 0;
            display: flex;
            justify-content: space-between;
            align-items: left;
            width: 100%;
            margin-bottom: 20px;
            padding-left: 15px;
          "
        >
          <div style="flex: 1">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              INFO
            </p>
          </div>
          <div style="flex: 1; text-align: left">
            <a
              style="
                text-decoration-thickness: 1px;
                line-height: 1.15;
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
              href="mailto:hello@kip.coach"
              target="_blank"
              class="map-link"
            >
              hello(at)kip.coach
              <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon>
            </a>
          </div>
        </div>
        <hr
          width="1000vw"
          class="mt-n6 mb-6"
          style="border: 0.5px solid #7da07d"
        />
        <div
          style="
            padding: 14px 0 20px 0;
            display: flex;
            justify-content: space-between;
            align-items: left;
            width: 100%;
            margin-bottom: 20px;
            padding-left: 15px;
          "
        >
          <div style="flex: 1">
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              FOLLOW US
            </p>
          </div>
          <div style="flex: 1; text-align: left">
            <a
              style="
                text-decoration-thickness: 1px;
                line-height: 1.15;
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
              href="https://linkedin.com"
              target="_blank"
              class="map-link"
            >
              LinkedIn
              <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon>
            </a>
            <a
              style="
                text-decoration-thickness: 1px;
                line-height: 1.15;
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
              href="https://instagram.com"
              target="_blank"
              class="map-link"
            >
              Instagram
              <v-icon size="x-small" class="ml-n1">mdi-arrow-top-right</v-icon>
            </a>
          </div>
        </div>
        <hr
          width="1000vw"
          class="mt-n6 mb-6"
          style="border: 0.5px solid #7da07d"
        />
        <div
          style="
            padding: 14px 0 20px 0;
            display: flex;
            justify-content: space-between;
            align-items: left;
            width: 100%;
            margin-bottom: 20px;
            padding-left: 15px;
          "
          class="mt-n6"
        >
          <div style="flex: 1.6">
            <p
              class="mt-n2 mb-3"
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              WISHLIST
            </p>
            <input
              v-model="email"
              placeholder="Email Address"
              style="border: none; outline: none"
            />
            <svg
              class="mt-n10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 290.78 5.31"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Design_System" data-name="Design System">
                  <path
                    d="M290.48,0a5,5,0,0,1-5,5H5.31a5,5,0,0,1-5-5"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="0.61"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div
            style="flex: 1; text-align: left"
            class="ml-n10"
            @click="sendEmail()"
          >
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              &nbsp;
            </p>
            <p
              style="
                transition: font-size 0.5s ease-out;
                font-family: 'ChaletBook1';
                font-size: 14px;
                color: black;
              "
            >
              &nbsp;
            </p>
            <v-icon class="ml-16" size="x-small">mdi-circle</v-icon> SUBMIT
          </div>
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: left;
            width: 100%;
            margin-bottom: 26px !important;
            padding-left: 15px;
          "
        >
          <div style="flex: 1">
            <div class="marquee mb-2">
              <v-row>
                <span v-if="isMobile" class="marquee-label1 mt-n3 ml-1">
                  WORKING IN:</span
                >
                <v-col>
                  <div class="ticker-wrap">
                    <div class="ticker">
                      <span class="item-collection-1">
                        <span class="item"
                          >PARIS ({{ this.seattleTime }}),</span
                        >
                        <span class="item">SFO ({{ this.sfoTime }}),</span>
                        <span class="item"
                          >CHICAGO ({{ this.chicagoTime }}),</span
                        >
                        <span class="item"
                          >AUSTIN ({{ this.austinTime }}),</span
                        >
                        <span class="item">NYC ({{ this.nycTime }}),</span>
                        <span class="item"
                          >LONDON ({{ this.londonTime }}),</span
                        >
                      </span>
                      <span class="item-collection-2">
                        <span class="item"
                          >PARIS ({{ this.seattleTime }}),</span
                        >
                        <span class="item">SFO ({{ this.sfoTime }}),</span>
                        <span class="item"
                          >CHICAGO ({{ this.chicagoTime }}),</span
                        >
                        <span class="item"
                          >AUSTIN ({{ this.austinTime }}),</span
                        >
                        <span class="item">NYC ({{ this.nycTime }}),</span>
                        <span class="item"
                          >LONDON ({{ this.londonTime }}),</span
                        >
                      </span>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
            <!-- Discreet mobile footer link -->
            <div
              style="position: absolute; bottom: 5px; right: 15px; opacity: 0.5"
            >
              <router-link
                to="/workout-buddy"
                style="
                  color: #666;
                  font-family: 'ChaletBook1';
                  font-size: 10px;
                  text-decoration: none;
                "
                @click="trackWorkoutBuddyClick()"
              >
                Workout Buddy
              </router-link>
            </div>
          </div>
        </div>
      </footer>

      <div class="overlay" v-if="loading == true" style="z-index: 1050">
        <div class="loader"></div>
      </div>
    </div>
  </v-app>
</template>
<script>
import { useHead } from "@vueuse/head";
import Swal from "sweetalert2";
import lottie from "lottie-web";
import emailjs from "emailjs-com";

export default {
  setup() {
    useHead({
      meta: [
        { title: "Kip Coach | AGI Running Coach" },
        {
          name: "keywords",
          content:
            "Kip Coach, running coach, AGI coach, personalized training, running insights, fitness, marathon training, performance analysis",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
    });
  },
  data() {
    return {
      loading: false,
      seattleTime: "",
      sfoTime: "",
      chicagoTime: "",
      austinTime: "",
      nycTime: "",
      londonTime: "",
      sectionVisible: {
        home1: false,
        whatwedo: false,
        mission: false,
        kip: false,
        listofgrid: false,
        mission1: false,
        mission2: false,
        mission3: false,
        mission4: false,
        mission5: false,
        milesran: false,
        partners: false,
        team: false,
      },
      fadeup: false,
      paddingValues: {
        desktop: {
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingBottom: "5em",
        },
        mobile: {
          paddingLeft: "5px",
          paddingRight: "5px",
          paddingBottom: "2em",
        },
      },
      isToolbarVisible: true,
      lastScrollY: 0,
      ColorFooter: "#b7e3b6",
      hasStartedCounting: false,
      isDarkMode: false,
      logos: [
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3v6YP0NhqqL5Gr47yfglqOd7NMD9dgtj1jvu2gJntAGe_nUpJ-9R749OiUn48HMe_xV1wABa_JvGTL7CJYS9-P-QAIgKYYZKReLHlwx15gs3wBdS0-0XTfHa-1utH2SafjxHo_w/s1600/18-B-0001-Strava-Logotype-Brand-Assets-V1_Strava_wordmark_black_medium.png",
        "https://singaporecycling.org.sg/cdn/shop/files/trainingpeaks_logo_vertical_2-color.png?v=1703918725&width=1500",
        "https://www.golfworld.com.au/assets/images/Garmin.png",
      ],
      showFirstSet: true,
      intervalId: null,
      forLoading: false,
      drawer: false,
      menuItems: [
        { text: "HOME", link: "#home" },
        { text: "Mission", link: "#whatwedo" },
        { text: "KIP", link: "#kip" },
        { text: "ABOUT", link: "#milesran" },
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
        (v) =>
          (v && v.length >= 10) || "Message must be at least 10 characters",
      ],
      teamMembers: [],
      activeSection: "home",
      isDragging: false,
      startX: 0,
      scrollLeft: 0,
      currentIndex: 0,
      sponsorsPerPage: 3,
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
      fixedScroll: false,
      TickerText: "",
    };
  },
  computed: {
    displayedLogos() {
      return [this.logos[this.currentIndex]];
    },
    paddingStyles() {
      return this.isMobile
        ? this.paddingValues.mobile
        : this.paddingValues.desktop;
    },
    footerTitleFontSize() {
      return this.isMobile ? "2.5vw" : "1.5vw";
    },
    addressDetailsFontSize() {
      return this.isMobile ? "2.2vw" : "1.2vw";
    },
    marqueeTextFontSize() {
      return this.isMobile ? "2.2vw" : "1.2vw";
    },
    marqueeLabelFontSize() {
      return this.isMobile ? "2.2vw" : "1.2vw";
    },
    floatingX() {
      return this.cursorX - 76;
    },
    floatingY() {
      return this.cursorY - 56;
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
    goToPrivacy() {
      // Navigate to the static HTML file in public folder
      window.location.href = "/Privacy.html";
    },
    sendEmail() {
      this.loading = true;
      if (this.validateEmail(this.email)) {
        emailjs
          .send("service_tkswldt", "template_6b1b21r", {
            email: this.email, // This should match the variable in your template
          })
          .then((response) => {
            emailjs.send("service_tkswldt", "template_axf817f", {
              email: this.email, // This should match the variable in your template
            });
            console.log(
              "Email sent successfully!",
              response.status,
              response.text
            );
            Swal.fire({
              toast: true,
              position: "center",
              icon: "success",
              title: "Thank you for joining the waitlist!",
              showConfirmButton: false,
              timer: 1500,
            });
            this.email = "";
            this.loading = false;
          })
          .catch((error) => {
            console.error("Error sending email:", error);
            Swal.fire({
              toast: true,
              position: "center",
              icon: "warning",
              title: "Failed to send email. Please try again later.",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      } else {
        Swal.fire({
          toast: true,
          position: "center",
          icon: "error",
          title: "Please enter a valid email address",
          showConfirmButton: false,
          timer: 1500,
        });
        this.loading = false;
      }
    },
    openTypeform() {
      // Track the button click via GTM dataLayer
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "custom_event",
          event_category: "waitlist",
          event_label: "join_waitlist_typeform",
          value: 1,
        });
      }

      window.open("https://form.typeform.com/to/ABgYil78", "_blank");
    },

    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    },
    gotoRoutesite(item) {
      let ftp = item;
      window.open(ftp, "_blank");
    },
    updateTimes() {
      const now = new Date();

      const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };

      this.sfoTime = new Intl.DateTimeFormat("en-US", {
        ...options,
        timeZone: "America/Los_Angeles",
      }).format(now);
      this.chicagoTime = new Intl.DateTimeFormat("en-US", {
        ...options,
        timeZone: "America/Chicago",
      }).format(now);
      this.austinTime = new Intl.DateTimeFormat("en-US", {
        ...options,
        timeZone: "America/Chicago",
      }).format(now);
      this.nycTime = new Intl.DateTimeFormat("en-US", {
        ...options,
        timeZone: "America/New_York",
      }).format(now);
      this.londonTime = new Intl.DateTimeFormat("en-GB", {
        ...options,
        timeZone: "Europe/London",
      }).format(now);
      this.seattleTime = new Intl.DateTimeFormat("en-US", {
        ...options,
        timeZone: "America/Los_Angeles",
      }).format(now);

      // Update the ticker text directly
      this.TickerText =
        "PARIS ( " +
        this.seattleTime +
        " ), " +
        "SFO ( " +
        this.sfoTime +
        " ), " +
        "CHICAGO ( " +
        this.chicagoTime +
        " ), " +
        "AUSTIN ( " +
        this.austinTime +
        " ), " +
        "NYC ( " +
        this.nycTime +
        " ), " +
        "LONDON ( " +
        this.londonTime +
        " ),  ";
      // `
      // PARIS (${this.seattleTime}),
      // SFO (${this.sfoTime}),
      // CHICAGO (${this.chicagoTime}),
      // AUSTIN (${this.austinTime}),
      // NYC (${this.nycTime}),
      // LONDON (${this.londonTime}),`;
    },
    formatTime(date, offset) {
      const localTime = new Date(date.getTime() + offset * 60 * 60 * 1000);
      return localTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    },
    startLogoRotation() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.logos.length;
      }, 3000); // Change logo every 3 seconds
    },
    toogle() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem("isDarkMode", this.isDarkMode);
    },
    checkDarkMode() {
      const darkModePreference = localStorage.getItem("isDarkMode");
      if (darkModePreference !== null) {
        this.isDarkMode = JSON.parse(darkModePreference);
      }
    },
    handleMouseMove(event, member) {
      this.cursorX = event.clientX;
      this.cursorY = event.clientY;
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
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
          } else {
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
      this.isMobile = window.innerWidth <= 501;
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
              const textElements = entry.target.querySelectorAll(".fade-up");
              textElements.forEach((el) => el.classList.add("visible"));
              if (entry.isIntersecting) {
                this.sectionVisible[sectionId] = true;
              } else {
                this.sectionVisible[sectionId] = false;
              }
              if (sectionId === "milesran" && !this.hasStartedCounting) {
                this.countIdeasSpunOut = 0;
                this.countIdeasKilled = 0;
                this.startCounting();
                this.hasStartedCounting = true;
              } else {
                this.ColorFooter = "#b7e3b6";
              }
            } else {
              const textElements = entry.target.querySelectorAll(".fade-up");
              textElements.forEach((el) => el.classList.remove("visible"));
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
      document.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
      });
    },
    resetCounting() {
      localStorage.removeItem("countingStarted");
    },
    submitForm() {
      if (this.$refs.form.validate()) {
        console.log("Form submitted:", {
          name: this.name,
          email: this.email,
          message: this.message,
        });
        this.$refs.form.reset();
      }
    },
    loadLottieAnimation() {
      this.animationInstance = lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://cdn.prod.website-files.com/5d2f74fb3cba1f3a752e2046/5d916146d12b5b7a3da48d14_Ideation.json",
      });
    },
    loadLottieAnimation1() {
      this.animationInstance = lottie.loadAnimation({
        container: this.$refs.lottieContainer1,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://cdn.prod.website-files.com/5d2f74fb3cba1f3a752e2046/5d9161c9cb36a49d93d6b9e8_Validation.json",
      });
    },
    loadLottieAnimation2() {
      this.animationInstance = lottie.loadAnimation({
        container: this.$refs.lottieContainer2,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://cdn.prod.website-files.com/5d2f74fb3cba1f3a752e2046/5d916201124e0776f419828f_Creation.json",
      });
    },
    loadLottieAnimation3() {
      this.animationInstance = lottie.loadAnimation({
        container: this.$refs.lottieContainer3,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://cdn.prod.website-files.com/5d2f74fb3cba1f3a752e2046/5d9161c97115f97b9bd4a04d_SpinOut.json",
      });
    },
    loadLottieAnimation4() {
      this.animationInstance = lottie.loadAnimation({
        container: this.$refs.lottieContainer4,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://cdn.prod.website-files.com/5d2f74fb3cba1f3a752e2046/5d9161c9e6be583f1654f247_ScaleUp.json",
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
      const duration = 1000;
      const startTime = performance.now();
      const initialSpunOut = this.countIdeasSpunOut;
      const initialKilled = this.countIdeasKilled;
      this.maxSpunOut = 18000;
      this.maxKilled = 70;
      const updateCount = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        this.countIdeasSpunOut = Math.round(
          initialSpunOut + (this.maxSpunOut - initialSpunOut) * progress
        );
        this.countIdeasKilled = Math.round(
          initialKilled + (this.maxKilled - initialKilled) * progress
        );
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          this.countIdeasSpunOut = this.maxSpunOut;
          this.countIdeasKilled = this.maxKilled;
          this.updateDisplay();
        }
      };
      requestAnimationFrame(updateCount);
    },
    updateDisplay() {
      const spunOutDisplay = `${this.countIdeasSpunOut / 1000}k+\u00A0\u00A0`;
      this.countIdeasSpunOut = spunOutDisplay;
      const killedDisplay = `>${this.countIdeasKilled}%`;
      this.countIdeasKilled = killedDisplay;
      document.getElementById("spunOutDisplay").innerText = spunOutDisplay;
      document.getElementById("killedDisplay").innerText = killedDisplay;
    },
    handleScroll() {
      const currentScrollY = window.scrollY;
      const contactSection = document.getElementById("contact");
      const contactSectionTop = contactSection.offsetTop;
      const contactSectionHeight = contactSection.offsetHeight;
      const viewportHeight = window.innerHeight;

      if (currentScrollY > this.lastScrollY && currentScrollY > 0) {
        if (this.activeSection !== "contact") {
          this.isToolbarVisible = false;
        } else {
          this.isToolbarVisible = true;
        }
      } else {
        this.isToolbarVisible = true;
      }

      if (currentScrollY + viewportHeight >= document.body.offsetHeight) {
        this.isToolbarVisible = true;
        if (this.activeSection === "contact") {
          this.fixedScroll = true;
          console.log(
            "You are now viewing the contact section and have scrolled to the bottom of the page"
          );
        }
      } else {
        this.fixedScroll = false;
      }

      this.lastScrollY = currentScrollY;
    },
    trackWorkoutBuddyClick() {
      // Track workout buddy page navigation via GTM dataLayer
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "custom_event",
          event_category: "navigation",
          event_label: "workout_buddy_footer_link",
          value: 1,
        });
      }
    },
  },
  created() {
    this.checkDarkMode();
  },
  mounted() {
    emailjs.init("Z1rlaTLQEjhrWQFY8"); //API keys
    this.updateTimes();
    setInterval(this.updateTimes, 1000);
    this.startLogoRotation();
    const resizeObserver = new ResizeObserver((entries) => {
      const isMobile = entries[0].contentRect.width < 480;
      this.setCustomCursor(isMobile ? "white" : "dark");
    });
    localStorage.setItem("isDarkMode", this.isDarkMode);
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
    this.intervalId = setInterval(() => {
      this.showFirstSet = !this.showFirstSet;
    }, 1500);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile);
    resizeObserver.disconnect();
    this.stopAutoSwitch();
    clearInterval(this.intervalIdSpunOut);
    clearInterval(this.intervalIdKilled);
    clearInterval(this.intervalId);
    window.removeEventListener("scroll", this.handleScroll);
    this.resetCounting();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>
<style lang="scss">
@import "../assets/fonts/fonts.css";
@font-face {
  font-family: "Aeonik1";
  src: url("../assets/font/AeonikTRIAL-Regular.otf") format("opentype");
  font-weight: 1000 !important;
  font-style: normal;
}
@font-face {
  font-family: "ChaletBook1";
  src: url("../assets/font/poppins.medium.ttf") format("opentype");
  font-style: normal;
}
@font-face {
  font-family: "ChaletBook";
  src: url("../assets/font/ChaletBookBold.ttf") format("opentype");
  font-style: normal;
}
@font-face {
  font-family: "ChaletBook1";
  src: url("../assets/font/ChaletBookOriginal.woff2") format("opentype");
  font-weight: 800 !important;
  color: black !important;
  font-style: normal;
}
</style>

<style scoped>
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
  0% {
    transform: rotateY(0) scale(1);
  }
  50% {
    transform: rotateY(360deg) scale(1.05);
  }
  100% {
    transform: rotateY(360deg) scale(1);
  }
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
  background-color: #b7e3b6 !important;
}

.mobile-nav .v-list-item {
  color: black !important;
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
  padding: 8px 18px;
  color: #ffd700;
  font-size: 20px;
  transform-origin: center bottom;
  animation: fadeIn 0.2s ease-out;
  display: inline-flex;
  gap: 2px;
  border-radius: 4px; /* Optional: Add some border radius */
}
.floating-text1 {
  position: fixed;
  pointer-events: none;
  z-index: 999;
  padding: 8px 18px;
  color: black;
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
    box-shadow: 0 5px 15px #ffd700;
  }
}

.image-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  transform: translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d !important;
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
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -5px; /* Adjust as needed */
  height: 2px; /* Line thickness */
  background-color: #ffd700; /* Line color */
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
/* #team {
      margin-bottom: 1000px; 
  } */
#partners {
  margin-bottom: 500px;
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
  animation: marquee 40s linear infinite;
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

#app {
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
  animation: marquee 40s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.custom-paddingMV {
  padding-left: 8% !important;
  padding-right: 7% !important;
  text-align: left;
}

/* //LIST GRID */
.services-grid {
  color: #636363 !important;
  padding-top: 0.25em !important;
  padding-bottom: 0.25em !important;
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
.services-containerMV {
  height: 100%;
  padding: 9% !important;
  font-size: 14px !important;
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
    font-size: 18px;
    line-height: 1.5;
  }
}

.large-number {
  font-size: 145px !important;
  font-weight: bold !important;
  text-align: left; /* Align text to the left */
  /* -webkit-text-stroke: 1px #fffbe9; */
  /* color: #0000;  */
  margin-bottom: 0.25em;
  padding-bottom: 0.2em;
  padding-right: 0.2em;
  /* font-family: Aeonik, Arial, sans-serif; */
  line-height: 1.15;
  border-bottom: 1px solid #636363 !important;
}
.large-numberMV {
  font-size: 130px !important;
  font-weight: bold !important;
  text-align: left; /* Align text to the left */
  /* -webkit-text-stroke: 1px #fffbe9; */
  /* color: #0000;  */
  margin-bottom: 0.25em;
  padding-bottom: 0.2em;
  padding-right: 0.2em;
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

a:active,
a:hover {
  outline: 0;
}

.side-nav-link-large {
  text-decoration: none; /* Remove underline */
  color: black !important; /* Change text color */
  position: relative; /* Position relative for pseudo-element */
}

.side-nav-link-large:hover {
  color: #252423; /* Change text color on hover (optional) */
}

.side-nav-link-large::after {
  content: ""; /* Create a pseudo-element for the border */
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
  a,
  a:hover {
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

a:active,
a:hover {
  outline: 0;
}
.side-nav-link-home {
  border-bottom-style: solid;
  border-bottom-color: #0000;
  padding-bottom: 0;
  font-size: 18px;
  line-height: 32px;
}

.section-title1 {
  font-size: 15px !important;
  font-family: "ChaletBook1" !important;
  font-weight: 200;
}
.section-title2 {
  font-size: 26px !important;
  font-family: "ChaletBook" !important;
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
  font-size: 12px !important;
  font-family: "ChaletBook1";
}

.address-content1 {
  line-height: 1.5;
  font-size: 18px !important;
  /* font-weight: 300 !important; */
  font-family: "ChaletBook1";
}
.marquee-content {
  overflow: hidden;
  flex: 1;
}

.marquee-text {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 20s linear infinite;
  font-size: 2.9vw !important;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
.shadow-bottom {
  position: relative; /* Ensure the shadow is positioned relative to the section */
}

.shadow-bottom {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0; /* Position at the bottom */
  height: 10px; /* Adjust height as needed */
  background: rgba(0, 0, 0, 0.5) !important; /* Shadow color */
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5) !important; /* Shadow effect */
  z-index: -1; /* Ensure it stays behind the content */
}

.address-content p {
  font-size: 18px !important; /* Adjust the size as needed */
  white-space: nowrap; /* Prevents line breaks */
}

.address-content p,
.section-title1 {
  font-size: 18px; /* Default for larger screens */
}
@media (max-width: 768px) {
  /* Adjust for mobile */
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
  padding-top: 1% !important;
}

.footer {
  font-size: 1.2vw;
  transition: all 0.5s ease; /* Add transition for smooth font size change */
}

.address-details p {
  font-size: 1.2vw;
  transition: all 0.5s ease; /* Add transition for smooth font size change */
}

.marquee-text {
  font-family: "ChaletBook1" !important;
  transition: all 0.5s ease;
  font-weight: 200 !important;
}

.marquee-container {
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
}

.marquee-label {
  font-family: "ChaletBook1" !important;
  font-size: 1.3vw;
  margin-right: 4px;
  transition: all 0.5s ease; /* Add transition for smooth font size change */
  font-weight: 200px !important;
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
  font-size: 5vw;
  font-family: "ChaletBook1" !important;
  transition: all 0.5s ease;
}

/* .logo-item {
      transition: all 400ms cubic-bezier(0.7, 0, 0.3, 1);
    }
  
    .logo-item.fade-enter-from {
      transform: translateY(30px);
      opacity: 0;
    } */

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
  color: white !important;
}
.rounded-input1 {
  padding: 15px;
  border-radius: 30px; /* Rounded corners */
  width: 280px; /* Adjust width */
}

.join-button {
  margin-top: 10px;
  padding: 12px 40px;
  border-radius: 30px;
  background-color: black; /* Blue color */
  color: white;
  border: none;
  cursor: pointer;
  width: 300px;
  letter-spacing: 3px;
  font-size: 22px;
  font-weight: 500;
}
.join-button1 {
  margin-top: 10px;
  padding: 18px 28px;
  border-radius: 30px;
  background-color: black; /* Blue color */
  color: white;
  border: none;
  cursor: pointer;
  width: 250px;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 12px 40px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 300px;
  letter-spacing: 3px;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
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
.footer-desktop {
  background-color: #b7e3b6; /* Background color */
  color: black !important; /* Text color */
  padding: 1% !important; /* Padding */
  min-height: 92vh !important;
  bottom: 0;
  left: 0;
  top: 0;
  position: fixed;
  width: 100%; /* Full width */
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
.contact__information__detail__form__input {
  border: none !important;
}
input[type="email" i] {
  padding-block: 1px;
  padding-inline: 2px;
  border: none !important;
}

/* //03 - 20 */
p {
  font-size: 96px;
}
/* Adjust font size for smaller screens */

.footer-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.footer-grid :nth-child(3),
.footer-grid :nth-child(4) {
  border-top: 1px solid #000;
  padding-top: 20px;
}

.footer-grid :nth-child(5),
.footer-grid :nth-child(6) {
  border-top: 1px solid #000;
  padding-top: 20px;
}
section {
  transition: opacity 0.5s ease;
}
.responsive-text {
  font-family: "ChaletBook1";
  font-size: 3.5vw;
  transition: all 0.5s ease;
  letter-spacing: 0.1;
}
.marquee-container {
  overflow: hidden;
  position: relative;
  height: 48px;
}
.marquee-text1 {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 20s linear infinite;
  font-size: 6vw;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
.team-image {
  width: 100%; /* Make the image take the full width of its container */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Cover the container while maintaining aspect ratio */
  max-height: 900px; /* Set a maximum height for larger screens */
}

.logo-item1.fade-enter-active {
  transition: all 400ms cubic-bezier(0.7, 0, 0.3, 1);
}

.logo-item1.fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.logo-item1.fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.logo-item1.fade-leave-active {
  transition: all 400ms cubic-bezier(0.7, 0, 0.3, 1);
}

.logo-item1.fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
.logo-item1 {
  transition: all 400mscubic-bezier(0.7, 0, 0.3, 1);
  transform: translateY(30px);
}
.logo-item1 img {
  transition: filter 0.3s ease-in-out;
}

.logo-item1:hover img {
  filter: none;
}

.header-text {
  font-family: "ChaletBook1", sans-serif;
  font-size: 3.8vw;
  color: black;
  transition: font-size 0.5s ease-out;
}

.map-link {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
  color: inherit;
  text-decoration-color: #849f80;
}
.header-text {
  font-family: "ChaletBook1";
  font-size: 3.8vw;
  color: black;
  transition: font-size 0.5s ease-out;
  font-weight: 400;
}

.map-link1 {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
  color: inherit;
  text-decoration-color: #849f80;
  width: 90% !important;
}

.marquee {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(183, 227, 182, 0.8);
}
.footer-container {
  background: #b7e3b6;
  min-height: 100vh;
  position: fixed;
  width: 100%;
  padding: 5% 2%;
}

.footer-header {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-link {
  text-decoration: none;
  color: black;
}

.footer-input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 18px;
}

.footer-input::placeholder {
  color: #ccc;
}
footer {
  width: 100%;
  position: relative;
  bottom: 0;
  background: #b7e3b6;
  box-sizing: border-box;
}

v-row {
  margin: 0;
  padding: 0;
}

v-col {
  padding: 5px;
}

.header-text {
  font-size: 3vw;
  margin-bottom: 5px;
}

a {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
  color: inherit;
}

input[type="email"] {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid black;
}

.marquee {
  margin-top: 10px;
}

.marquee-container {
  overflow: hidden;
  white-space: nowrap;
}

.marquee-text {
  display: inline-block;
  animation: marquee 40s linear infinite;
}

footer {
  position: relative;
  background: #b7e3b6;
  box-sizing: border-box;
  z-index: 1;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  z-index: 1;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  p {
    font-size: 64px;
  }
}
@media (max-width: 768px) {
  p {
    font-size: 38px;
  }
}
@media (max-width: 480px) {
  p {
    font-size: 28px;
  }
}
@media (min-width: 1850px) {
  .custom-padding {
    padding-left: 17%;
    padding-right: 17%;
  }
}
@media (min-width: 1280px) {
  .custom-padding {
    padding-left: 10%;
    padding-right: 10%;
  }
}
@media (max-width: 958px) {
  .custom-padding {
    padding-left: 10%;
    padding-right: 10%;
  }
  .custom-paddingdd {
    padding-left: 3%;
    padding-right: 3%;
  }
}
@media (max-width: 480px) {
  .custom-padding {
    padding-left: 5%;
    padding-right: 5%;
  }
}
@media (max-width: 1024px) {
  .responsive-text {
    font-size: 4vw;
    line-height: 1;
  }
}
@media (max-width: 768px) {
  .responsive-text {
    font-size: 3vw;
    line-height: 1;
  }
}
@media (max-width: 480px) {
  .responsive-text {
    font-size: 4vw;
    line-height: 1;
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

#partners {
  flex: 1;
  overflow-y: auto;
}
footer {
  flex: 0 0 70px;
}
.BottomMargin {
  margin-bottom: 850px !important;
}
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

@media (min-width: 500px) {
  footer {
    height: 100vh;
    font-size: 14px;
  }
  #partners {
    margin-bottom: calc(75vh - 60px);
  }
}

@media (max-width: 480px) {
  footer {
    height: 100vh;
    font-size: 14px;
  }
  #partners {
    margin-bottom: calc(75vh - 60px);
  }
}

@media (max-width: 479px) {
  #mobile-footer {
    display: block; /* Show only on screens 479px or smaller */
  }
}

/* //DESKTOP FOOTER */
.marquee-container {
  overflow: hidden;
  position: absolute;
  bottom: 0;
  height: 48px;
  background-color: #b7e3b6;
  z-index: 9;
}
.marquee-content {
  overflow: hidden;
  flex: 0 0 100%;
}
.marquee-text {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 35s linear infinite;
  font-size: 6vw;
  font-family: "ChaletBook1" !important;
}
@keyframes marquee {
  0% {
    transform: translateX(15);
  }
  100% {
    transform: translateX(-70%);
  } /* Changed from -100% to -50% */
}
/* //MOBILE FOOTER */
.marquee-container1 {
  overflow: hidden;
  position: absolute;
  bottom: 0;
  height: 48px;
  background-color: #b7e3b6;
  z-index: 9;
}

.marquee-content1 {
  overflow: hidden;
  flex: 0 0 100%;
}

.marquee-text1 {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 35s linear infinite;
  font-size: 6vw;
  font-family: "ChaletBook1" !important;
}

@keyframes marquee1 {
  0% {
    transform: translateX(15);
  }
  100% {
    transform: translateX(-70%);
  }
}
.ticker-wrap {
  width: 100%;
  height: 80px;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  position: fixed;
  bottom: 0;
  height: 3.1rem;
  background-color: #b7e3b6;
}
.ticker {
  display: inline-block;
  margin-top: 5px;
  animation: marquee 35s linear infinite;
}
.item-collection-1 {
  position: relative;
  animation: swap 35s linear infinite;
}

.item {
  display: inline-block;
  padding: 0 0.4rem;
  margin-top: 5px !important;
  font-size: 6vw;
  color: black;
  font-weight: 20;
  font-family: sans-serif;
}
.item2 {
  display: inline-block;
  font-size: 3vw;
  color: black;
  font-weight: 20;
  font-family: sans-serif;
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes swap {
  0%,
  50% {
    left: 0%;
  }
  50.01%,
  100% {
    left: 100%;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 1, 0.379);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.loader {
  position: relative;
  border-style: solid;
  box-sizing: border-box;
  border-width: 40px 60px 30px 60px;
  border-color: #3a3d42 #96ddfc #96ddfc #36bbf7;
  animation: envFloating 1s ease-in infinite alternate;
}

.loader:after {
  content: "";
  position: absolute;
  right: 62px;
  top: -40px;
  height: 70px;
  width: 50px;
  background-image: linear-gradient(#fff 45px, transparent 0),
    linear-gradient(#fff 45px, transparent 0),
    linear-gradient(#fff 45px, transparent 0);
  background-repeat: no-repeat;
  background-size: 30px 4px;
  background-position: 0px 11px, 8px 35px, 0px 60px;
  animation: envDropping 0.75s linear infinite;
}

@keyframes envFloating {
  0% {
    transform: translate(-2px, -5px);
  }

  100% {
    transform: translate(0, 5px);
  }
}

@keyframes envDropping {
  0% {
    background-position: 100px 11px, 115px 35px, 105px 60px;
    opacity: 1;
  }

  50% {
    background-position: 0px 11px, 20px 35px, 5px 60px;
  }

  60% {
    background-position: -30px 11px, 0px 35px, -10px 60px;
  }

  75%,
  100% {
    background-position: -30px 11px, -30px 35px, -30px 60px;
    opacity: 0;
  }
}
</style>
