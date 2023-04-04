<template>
  <v-app id="inspire">
    <v-app-bar flat max-height="65" fixed>
      <Header />
    </v-app-bar>

    <router-view></router-view>

      <Footer />
      
  </v-app>
</template>


<script>
import Header from "./views//Header";
import Footer from "./views/Footer";
// import carrousel from './components/carrousel'

export default {
  name: "App",
  data() {
    return {
    
    };
  },

  components: {
    Header,
    Footer,
  },

  // data: () => ({}),
};
</script>

<style lang="scss">
// s

html {
  min-height: 100vh;

  body {
    scroll-behavior: smooth;
    font-family: "Google Sans",arial,sans-serif;
    text-decoration: none;
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
