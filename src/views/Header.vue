<template>
  <v-app>
    <v-app-bar
      color="white"
      app
      flat
      fixed
      class="d-flex justify-center align-center"
    >
      <v-app-bar-items
        class="hidden-xs-only color ml-16 d-flex align-center justify-center"
      >
        <v-btn text><router-link to="/">INÍCIO</router-link></v-btn>

        <v-btn text
          ><router-link to="/Ambassador">Embaixada</router-link></v-btn
        >
        <!-- <v-btn text
          ><router-link to="/Serviços">Sobre Angola</router-link></v-btn
        > -->
        <v-btn text
          ><router-link to="/angola-citizen-services"
            >Serviços Consulares
          </router-link></v-btn
        >
        <v-btn text
          ><router-link to="/Descubra">Conheça Angola</router-link></v-btn
        >
        <v-btn text>
          <router-link to="/Contactos">Welwitschia Noticias</router-link>
        </v-btn>
        <v-btn text><router-link to="/Contactos">Contactos</router-link></v-btn>
      </v-app-bar-items>
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu color">
            <v-list-item>
              <v-list-item-title
                ><router-link to="/">a empresa</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/Services"
                  >nosso espaço</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/About"
                  >nosso Serviços
                </router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/Contacts"
                  >Galeria</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/Contactos"
                  >Contactos</router-link
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "Header-index",
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.headerr {
  display: flex;
  justify-content: space-between;
}
.color {
  a {
    color: black;
    text-decoration: none;
  }
}
</style>
