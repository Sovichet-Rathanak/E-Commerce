import Accessories from "@/views/MainPage/AccessoriesPage.vue";
import Collectibles from "@/views/MainPage/CollectiblesPage.vue";
import Landing from "@/views/MainPage/LandingPage.vue";
import Menswear from "@/views/MainPage/MenswearPage.vue";
import Sneaker from "@/views/MainPage/SneakerPage.vue";
import Womenswear from "@/views/MainPage/WomenswearPage.vue";
import Registration from "@/views/RegistrationPage.vue"
import PrivacyPage from "@/views/PolicyPages/PrivacyPage.vue";
import AdvertisingPage from "@/views/PolicyPages/AdvertisingPage.vue";
import UserAgreementPage from "@/views/PolicyPages/UserAgreementPage.vue";
import AcceptedPaymentPage from "@/views/PolicyPages/AcceptedPaymentPage.vue";
import DataProtectionPage from "@/views/PolicyPages/DataProtectionPage.vue";
import ReturnPolicyPage from "@/views/PolicyPages/ReturnPolicyPage.vue";
import PopularBrand from "@/views/MainPage/PopularBrandPage.vue";
import ArticlePage from "@/views/MainPage/ArticlePage.vue";
import ProductDetailPage from "@/views/MainPage/ProductDetailPage.vue";
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
  },
  {
    path: "/Privacy&Policy",
    name: "Privacy",
    component: PrivacyPage
  },
  {
    path: "/Advertising",
    name: "Advertising",
    component: AdvertisingPage
  },
  {
    path: "/UserAgreement",
    name: "UserAgreement",
    component: UserAgreementPage
  }
  ,
  {
    path: "/AcceptedPaymentMethods",
    name: "Accepted",
    component: AcceptedPaymentPage
  },
  {
    path: "/DataProtections",
    name: "DataProtections",
    component: DataProtectionPage
  },
  {
    path: "/ReturnPolicies",
    name: "ReturnPolicies",
    component: ReturnPolicyPage
  },
  {
    path: "/PopularBrand/:id",
    name: "PopularBrand",
    component: PopularBrand,
  },
  {
    path: "/ArticlePage",
    name: "ArticlePage",
    component: ArticlePage,
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetailPage
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

router.options.scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // Restore previous scroll position (useful for "Back" navigation)
    return savedPosition;
  } else {
    // Scroll to the top when navigating to a new page
    return { top: 0, behavior: "smooth" };
  }
};

export default router;
