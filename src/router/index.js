import AccessoriesPage from "@/views/AccessoriesPage.vue";
import CollectiblesPage from "@/views/CollectiblesPage.vue";
import LandingPage from "@/views/LandingPage.vue";
import MenswearPage from "@/views/MenswearPage.vue";
import SneakerPage from "@/views/SneakerPage.vue";
import WomenswearPage from "@/views/WomenswearPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { disableOverflow: true },
    component: LandingPage,
  },
  {
    path: "/Sneakers",
    name: "SneakerSec",
    component: SneakerPage,
  },
  {
    path: "/Collectibles",
    name: "CollectiblesSec",
    component: CollectiblesPage,
  },
  {
    path: "/Menswear",
    name: "MenswearSec",
    component: MenswearPage,
  },
  {
    path: "/Womenswear",
    name: "WomenswearSec",
    component: WomenswearPage,
  },
  {
    path: "/Accessories",
    name: "AccessoriesSec",
    component: AccessoriesPage,
  },
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
