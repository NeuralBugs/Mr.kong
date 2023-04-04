<template>
  <div class="main-footer">
    <div class="larger-footer">
      <div class="zero-box">
        <div class="subheader">
          <div class="caixas">
            <div class="one">
              <span class="top down">INFORMAÇÃO GERAL</span>
              <p v-for="(info, $index) in infos" :key="$index">
                <router-link to="/">{{ info.geral }}</router-link>
              </p>
            </div>
            <div class="two">
              <span class="top down">ANGOLA</span>
              <!-- <p v-for="(text, $index) in texts" :key="$index">
                <router-link to="/">{{ text.lista }}</router-link>
              </p> -->
              <p><router-link to="/">Inicio</router-link></p>
              <p><router-link to="Consulado">Consulado</router-link></p>
              <p>
               <router-link to="Angola">Angola</router-link>
              </p>
              <p>
               <router-link to="Contactos">Contactos</router-link>
              </p>
              <p>
               <router-link to="Welwitchia">Welwitchia</router-link>
              </p>
            </div>
            <div class="three">
              <span class="top down">SECTOR CONSULAR</span>
              <div class="mini-footer">
                <i class="fa-solid fa-clock"></i>
                <p>9 AM - 1 PM <strong>(Drop Off Day)</strong></p>
              </div>
              <div class="mini-footer">
                <i class="fa-solid fa-phone"></i>
                <br />
                <p>
                  Phone: (030) 240-89728 <br />
                  FAX: (030) 302-408912
                </p>
              </div>
              <div class="mini-footer">
                <i class="fa-solid fa-location-dot"></i>
                <p>
                  9 Werderscher Markt <br />
                  10117 Germany, Berlin
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="icons">
          <div class="governo">
            <img src="../assets/red .png" alt="" />
            <!-- <img src="../assets/logo-governo.png" alt=""> -->
            <h1><i class="fa-brands fa-instagram"></i></h1>
            <h1><i class="fa-brands fa-twitter"></i></h1>
            <h1><i class="fa-brands fa-whatsapp"></i></h1>
            <h1><i class="fa-brands fa-youtube"></i></h1>
          </div>
        </div>

        <div class="footer">
          <div class="box">
            <!-- <img src="../assets/Angola-Insignia_Logo.png" alt="" /> -->
            <p
              >© {{ new Date().getFullYear() }} | EMBAIXADA DA REPÚBLICA DE ANGOLA NA ALEMANHA |
             <a href="https://www.berlin.de/">Berlin</a> </p
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-index",
  data() {
    return {
      // texts: [
      //   {
      //     lista: "Inicio",
      //   },
      //   {
      //     lista: "Consulado",
      //   },
      //   {
      //     lista: "Angola",
      //   },
      //   {
      //     lista: "Contactos",
      //   },
      //   {
      //     lista:'Welwitchia'
      //   },
      // ],
      infos: [
        {
          geral: "De Segunda à Sexta das 9am-4pm",
        },
        {
          geral: "Office: (202) 785-1156 Fax: (202) 822-9049",
        },
        {
          geral: "9 Werderscher Markt, 10117 Berlin",
        },
      ],
      hours: [
        {
          consulator: "Consulate and Section Hours",
        },
        {
          consulator: "9 AM - 1 PM (Drop Off Day)",
        },
        {
          consulator: "12 PM - 3 PM    (Pick Up Day)",
        },
        {
          consulator: "FRIDAY: Closed for the Public",
        },
        {
          consulator: "EMERGENCY: (202) 536-6610",
        },
        {
          consulator: "visa.consular@angola.org",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main-footer {
  margin-top: 40px;
  min-height: 50vh;
  .larger-footer {
    // max-width: 1740px;
    // margin-left: auto;
    // margin-right: auto;
    // margin-top: 50px;
    .zero-box {
      background-color: #F2F3F4;
      color: black;
      width: 100%;
      height: 500px;
      position: absolute;
      bottom: 0;
      h1 {
        display: flex;
        justify-content: space-around;
      }
      .icons {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 7vh;
        }
        i{
          cursor: pointer;
        }
        i {
          margin-left: 30px;
          :hover {
            color: red;
          }
        }

        .governo {
          color: black;
          display: contents;
          a {
            margin-left: 49px;
            font-size: 49px;
            color: black;
          }
          i:hover {
            color: red;
          }
        }
        .textp {
          margin-left: 49px;
          p {
            font-size: 25px;
            margin-bottom: -7px;
            a {
              color: black;
            }
          }
        }
      }
      .subheader {
        text-align: center;
        // max-width: 1000px;
        // margin-left: auto;
        // margin-right: auto;
        max-width: 1380px;
        margin-left: auto;
        margin-right: auto;
        // margin-top: 50px;
        .caixas {
          display: flex;
          justify-content: space-around;
          padding: 50px;
          color: black;
          // p:first-child {
          //   margin-top: 20px;
          // }
          a {
            text-decoration: none;
            color: black;
            font-size: 16px;
            font-weight: 400;
            color: black;
            line-height: 1.6;
            word-wrap: break-word;
            &:hover {
              border-bottom: 5px solid black;
              padding: 0px 0 4px;
            }
          }
          span {
            font-size: 18;
            font-weight: 500;
            letter-spacing: normal;
            line-height: 1.6;
            padding-top: 14px;
            font-weight: 600;
            &:hover {
              border-bottom: 5px solid #ddd;
              padding: 6px 0 4px;
            }
      
          }
          .two {
            a {
              text-decoration: none;
            }
          }

          .three {
            .mini-footer {
              display: flex;
              align-items: center;
              justify-content: center;
              p {
                margin-left: 15px;
              }
              strong{
                color: red;
                font-weight: 600;
              }
            }
          }
        }
      }
      img {
        height: 15%;
      }
      .footer {
        width: 100%;
        height: 62px;
        position: absolute;
        bottom: 0;
        background-color: white;
        .box {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            // height: 50px;
            // padding: 8px 0 5px;
          }
            p {
            margin-left: 30px;
            font-size: 14px;
            font-weight: 500;
            color: black;
            margin: 20px;
          }
        }
        a{
          cursor: pointer;
          text-decoration: none;
          color: black;
        }
      }
    }
  }
}
</style>
