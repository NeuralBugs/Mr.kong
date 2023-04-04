<template>
    <div class="inspire">
    <v-app-bar color="white" app prominent fixed  class="d-flex justify-space-around">
      <!-- <v-img
        max-width="40"
        src="../assets/Embaixada-Black.png"
        class="align-start"
      ></v-img> -->
      <img src="../assets/Embaixada-Black.png" alt="">
        <!-- <v-tabs centered class="ml-n9" color="red">
          <v-tab v-for="link in links" :key="link">
            {{ link }}
          </v-tab>
        </v-tabs> -->

      <v-app-bar-items class="hidden-xs-only color ml-16">
        <v-btn text><router-link to="/">Inicio</router-link><i class="fa-solid fa-angle-down ml-2"></i></v-btn>

        <v-btn text
          ><router-link to="/About">Consulado</router-link><i class="fa-solid fa-angle-down ml-2"></i></v-btn
        >
        <v-btn text
          ><router-link to="/Services">Angola</router-link><i class="fa-solid fa-angle-down ml-2"></i></v-btn
        >
        <v-btn text><router-link to="/Contacts">Contactos</router-link></v-btn>
        <v-btn text><router-link to="/Contacts">Welwitchia</router-link></v-btn>
      </v-app-bar-items>
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <!-- <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template> -->
          <v-list class="responsiveMenu color">
            <v-list-item>
              <v-list-item-title
                ><router-link to="/">Home</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/Services"
                  >Education</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/About"
                  > Services
                </router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/Contacts"
                  >Contact us</router-link
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="icon">
               <div class="navtitle">
          <h2 class="text-h4 font-weight-black">
          </h2>
        </div>
        <div class="navlog .d-flex justify-end">
          <v-btn icon class="mr-2">
            <i class="fa-brands fa-instagram"></i>
          </v-btn>

          <v-btn icon class="mr-2">
            <i class="fa-brands fa-facebook"></i>
          </v-btn>
          <v-btn icon class="mr-2"><i class="fa-brands fa-twitter"></i></v-btn>
          </div>
        </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header-index",
  data: () => ({
    // links: ["Dashboard", "Messages", "Profile", "Updates"],
  }),
};
</script>

<style lang="scss" scoped>
// .inspire{
//   text-align: center;
// }

img {
      width: 460px;

}
span {
  a {
    color: black;
  }
}
.router-link-active{
  color: black;
}

   a{
      text-decoration: none;
      color: black;   
    }
    i {
      color: black;
      font-size: 18px;
    }
@media screen and (min-width: 80rem) {
  .container {
    width: 100%;
    a{
      text-decoration: none;
    }
  }
}
.tou {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%) !important;
    .flex{
      display: flex;
      align-items: center;
      a{
        text-decoration: none;
        display: none;
      }
    }
  .menutab {
    max-width: 890px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    color: black;
    a {
      text-decoration: none;
      color: black;
    }
    i {
      margin-left: 8px;
      color: black;
      font-size: 17px;
    }
  }
}
.navb {
  padding: 20px;
  .navtitle {
    h2 {
      text-transform: uppercase;
    }
  }
  display: flex;
  align-items: center;
  justify-content: space-around;
  .navlog {
    i {
      color: red;
      font-size: 25px;
    }
  }
}
</style>
