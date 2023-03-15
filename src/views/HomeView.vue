<style lang="scss" scoped>
.alert {
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
  .alert-1 {
    margin: 60px 0 60px;
    border-radius: 20px;
    i {
      color: red;
      margin-right: 10px;
    }
  }
  p {
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    background-color: black;
    padding: 25px 40px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0px 0px 23px -16px rgb(10 0 0 / 99%);
    &:hover {
      background-color: red;
      color: black;
      box-shadow: 2px 2px black;
      i {
        color: white;
      }
    }
  }
}

.layout-d {
  max-width: 1600px;
  min-height: 60vh;
  margin-left: auto;
  margin-right: auto;
  // background-color: #ccc;
  .Destaques {
    // max-width: 1100px;
    // padding: auto;
    // min-height: 80vh;
    // background-color: #ccc;
    h2 {
      margin-bottom: 50px;
      font-weight: 500;
      line-height: 1.4;
      text-transform: none;
      font-style: normal;
      color: #212121;
      font-size: 32px;
      border-bottom: 1px solid #333;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    .first-destaque {
    }
    .second-destaque {
      margin-left: 70px;
      h2 {
        padding-bottom: 4px;
      }
      .information {
        // display: flex;
        h2 {
          padding-bottom: 4px;
        }
        .consular {
          padding: 30px;
          background-color: black;
          color: white;
          text-align: center;
          cursor: pointer;
          text-transform: uppercase;
          box-shadow: 2px 2px red;
          &:hover {
            background-color: red;
            box-shadow: 4px 4px black;
            color: black;
          }
          h1 {
            border-bottom: 1px solid #fff;
            margin-bottom: 20px;
          }
          // span {
          //   text-transform: uppercase;
          // }
        }
        .visto {
          padding: 30px;
          background-color: black;
          color: white;
          margin-top: 10px;
          text-align: center;
          cursor: pointer;
          text-transform: uppercase;
          box-shadow: 2px 2px red;
          &:hover {
            background-color: red;
            box-shadow: 4px 4px black;
            color: black;
          }
          p {
            margin-top: 20px;
          }
        }
      }
    }
  }
}

.layoutlinks {
  padding: 10px 0 10px;
  max-width: 1200px;
  margin: auto;
  .linkss {
    h2 {
      border-bottom: 1px solid red;
      padding: 10px 0 10px;

      span {
        padding: 40px 0;
      }
    }
    .linksImg {
      img {
        height: 50px;
      }
    }
    .angolink {
      .img {
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          height: 70px;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="container">
    <v-carousel
      cycle
      height="900"
      hide-delimiter-background
      show-arrows="hover"
      progress="primary"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        height="100%"
      >
      </v-carousel-item>
    </v-carousel>

    <!-- Alert butoon -->
    <div class="alert">
      <div class="alert-1">
        <p>
          <i class="fa-solid fa-circle-info"></i>

          Security Information <br />
          before Visiting the Embassy
        </p>
      </div>
      <div class="alert-1">
        <p><i class="fa-solid fa-truck-medical"></i> Covid-19 Updates</p>
      </div>
      <div class="alert-1">
        <p>
          <i class="fa-solid fa-phone"></i>

          Consular emergency: <br />
          (202) 951-0308 | (202) 536-6610
        </p>
      </div>
    </div>

    <!-- Destaques -->
    <div class="layout-d">
      <div class="Destaques">
        <div class="first-destaque">
          <h2>Destaques</h2>
          <v-carousel>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>
        </div>
        <!-- second destaques  -->
        <div class="second-destaque">
          <div class="information">
            <h2>Informations</h2>

            <div class="consular">
              <span>Número de emergencia dos </span>
              <h1>Consulados Gerais</h1>

              <p>
                Berlin <br />
                (202) 951-0308 | (202) 536-6610
              </p>

              <p>
                Munich <br />
                (202) 951-0308 | (202) 536-6610
              </p>
            </div>
            <div class="visto">
              <h1>
                informação <br />
                Sobre Vistos
              </h1>
              <p>Visa Information</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- uties links -->
    <div class="layoutlinks">
      <div class="linkss">
        <h2><span>Links Úteis</span></h2>
        <div class="angolink">
          <div class="img">
            <div>
              <img width="" height="" src="../assets/tpa.png" alt />
            </div>
            <div>
              <img width="" height="" src="../assets/logo-angola.png" alt />
            </div>
            <div>
              <img
                width=""
                height=""
                src="../assets/Mirex_color_2-removebg-preview.png"
                alt
              />
            </div>
            <div>
              <img width="" height="" src="../assets/zee.png" alt />
            </div>
            <div>
              <img width="" height="" src="../assets/aipex.jpg" alt />
            </div>
            <div>
              <img width="" height="" src="../assets/Polo-de-Viana.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// swiper options example:
export default {
  name: "carrousel",
  data() {
    return {
      items: [
        {
          src: require("@/assets/quedas-de-calandula-malange-1024x683.jpeg"),
        },
        {
          src: require("@/assets/Marginal-de-Luanda-at-Night--1024x682.jpeg"),
        },
        {
          src: require("@/assets/serra-da-leba-provincia-do-lubango-1024x679.jpeg"),
        },
        {
          src: require("@/assets/parque_nacional_da_quissama_58__132632731633c27a87fa8a.jpg"),
        },
      ],
    };
  },
};
</script>
