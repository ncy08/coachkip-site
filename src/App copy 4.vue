<template>
  <v-app  :style="{ backgroundColor: isDarkMode ? 'white' : 'black', }">
    <div  :style="{ backgroundColor: isDarkMode ? 'white' : 'black', }">

      <v-btn   @click="toogle"  class="dark-mode-toggle"  icon  :style="{ backgroundColor: isDarkMode ? 'white' : 'black'}">
        <v-icon :style="{ color: isDarkMode ? 'black' : 'white', }">{{ isDarkMode ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>


      <transition name="fade">
      <v-toolbar v-show="isToolbarVisible" :color="isDarkMode ? '#252423' : '#fffbe9'" :class="fixedScroll == false ? 'tBar' : 'tBarFoxed'" class="tBar" style="z-index: 1999">
        <v-toolbar-title v-on:click="handleMenuItemClick({ link: '#home' })" :style="{color : isDarkMode ? 'white' : 'black'}"> 
          COACH KIP</v-toolbar-title>
        <v-spacer></v-spacer>
        <button :style="{background:isDarkMode ? 'white' : 'black', color:isDarkMode ? 'black' : 'white'}" 
          @click.stop="drawer = !drawer" style="float: right; font-family: 'Aeonik1'; border-bottom-color: #000; border-radius: 20px; padding: 2px 22px 3px; display: block;" 
          class="mr-6 hidden-md-and-up mt-n1" @click="drawer = true"> Menu
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

    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
          { text: "HOME", link: "#home" },
          { text: "Mission", link: "#whatwedo" },
          { text: "KIP", link: "#kip" },
          { text: "ABOUT", link: "#milesran" },
          { text: "CONTACT", link: "#contact" },
      ],
      drawer:false,
      isDarkMode:false,
      fixedScroll:false,
      isToolbarVisible:true,
      
    }
  },
  methods: {
    toogle() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('isDarkMode', this.isDarkMode); 
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
  },

}
</script>

<style scoped>

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
  opacity: 0;
}

.tBar.visible {
  transform: translateY(0); 
  opacity: 1;
}
</style>