import Accessories from "@/views/AccessoriesPage.vue";
import Collectibles from "@/views/CollectiblesPage.vue";
import Landing from "@/views/LandingPage.vue";
import Menswear from "@/views/MenswearPage.vue";
import Sneaker from "@/views/SneakerPage.vue";
import Womenswear from "@/views/WomenswearPage.vue";
import Registration from "@/views/RegistrationPage.vue"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { disableOverflow: true },
    component: Landing,
  },
  {
    path: "/Sneakers",
    name: "Sneaker",
    component: Sneaker,
  },
  {
    path: "/Collectibles",
    name: "Collectibles",
    component: Collectibles,
  },
  {
    path: "/Menswear",
    name: "Menswear",
    component: Menswear,
  },
  {
    path: "/Womenswear",
    name: "Womenswear",
    component: Womenswear,
  },
  {
    path: "/Accessories",
    name: "Accessories",
    component: Accessories,
  },
  {
    path: "/Registration",
    name: "Registration",
    meta: { disableOverflow: true },
    component: Registration,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.disableOverflow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  next();
});

export default router;
