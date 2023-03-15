import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import Footer from "../views/Footer.vue";
// import Background from "../views/Background.vue";
import carrousel from "../components/carrousel.vue";
// import links from "../components/links.vue";
// import Descubra from "../components/Descubra.vue";
// import angola from "../components/angola-citizen-carrousels.vue";
// import Visa from "../components/Visa-requiment.vue";
// import Simbolos from "../components/Simbolos.vue";
// import Ambassador from "../components/Ambassador";
// import Contactos from "../components/Contactos.vue";
// import Bilhete from "../components/Bilhete-de-Identidade.vue";
// import Angola from "../components/Angola.vue";
// import Holidays from "../components/ Holidays.vue";
// import Presidente from "../components/Presidente.vue";
// import Economia from "../components/Economia.vue";
// import Ministro from "../components/Ministro.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/home",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: "/Bilhete-de-Identidade",
  //   name: "Bilhete-de-Identidade",
  //   component: Bilhete,
  // },
  // {
  //   path: "/Presidente",
  //   name: "Presidente",
  //   component: Presidente,
  // },
  // {
  //   path: "/Ministro",
  //   name: "Ministro",
  //   component: Ministro,
  // },
  // {
  //   path: "/Angola",
  //   name: "Angola",
  //   component: Angola,
  // },
  // {
  //   path: "/Economia",
  //   name: "Economia",
  //   component: Economia,
  // },
  // {
  //   path: "/Ambassador",
  //   name: "Ambassador",
  //   component: Ambassador,
  // },
  // {
  //   path: "/Holidays",
  //   name: "Holidays",
  //   component: Holidays,
  // },
  // {
  //   path: "/Footer",
  //   name: "Footer",
  //   component: Footer,
  // },
  // {
  //   path: "/Visa-requiment",
  //   name: "Visa-requiment",
  //   component: Visa,
  // },
  // {
  //   path: "/Simbolos",
  //   name: "Simbolos",
  //   component: Simbolos,
  // },
  // {
  //   path: "/Contactos",
  //   name: "Contactos",
  //   component: Contactos,
  // },
  // {
  //   path: "/",
  //   name: "Background",
  //   component: Background,
  // },
  // {
  //   path: "/angola-citizen-carrousels",
  //   name: "angola-citizen-carrousels",
  //   component: angola,
  // },
  {
    path: "/",
    name: "carrousel",
    component: carrousel,
  },
  // {
  //   path: "/links",
  //   name: "links",
  //   component: links,
  // },
  // {
  //   path: "/Descubra",
  //   name: "Descubra",
  //   component: Descubra,
  // },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
