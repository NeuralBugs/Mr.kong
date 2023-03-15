<template>
  <v-app id="inspire">
    <template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="../src/assets/Neural.png"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, #FFFFFF,#212121"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <!-- <v-app-bar-title>Title</v-app-bar-title> -->

      <v-spacer></v-spacer>

      <v-btn icon>
        <i class="fa-brands fa-instagram"></i>
      </v-btn>

      <v-btn icon>
        <i class="fa-brands fa-github"></i>
      </v-btn>

      <v-btn icon>
        <i class="fa-brands fa-facebook"></i>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Home</v-tab>
          <v-tab>Education</v-tab>
          <v-tab>Services</v-tab>
          <v-tab>About</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;">
        dhshshshhsh
      </v-container>
    </v-sheet>
    <carrousel />
  </v-card>
  <router-view></router-view>
  <v-footer absolute>
    <Footer />
  </v-footer>

</template>

    <v-app-bar prominent flat max-height="65">
      <Header />
    </v-app-bar>



    <router-view></router-view>

    <!-- <v-footer absolute> -->
    <Footer />
    <!-- </v-footer> -->
  </v-app>
</template>

<script>
// import Header from "./views//Header";
import Footer from "./views/Footer";
import carrousel from './components/carrousel'

export default {
  name: "App",
  data() {
    return {
      items: [
        {
          src: require("./assets/Neural.png"),
        },
        {
          src: require("./assets/Neural.png"),
        },
        {
          src: require("./assets/Neural.png"),
        },
      ],
    };
  },

  components: {
    carrousel
    // Header,
    // Footer,
  },

  // data: () => ({}),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Spirax&display=swap");

html {

  body {
    scroll-behavior: smooth;
    a {
      color: black;
    }
  }
  body::-webkit-scrollbar {
    display: none !important;
  }
  li {
    color: black;
    a {
      color: black;
    }
  }
}
</style>
