<template>
  <WebBanner :images="banner.menswearBanner.image" />
  <!-- checkout banner.js and just basically populate the image array with your own image -->
  <div class="Container">
    <SeeMore SectionTitle="Outfit Inspiration" style="margin-top: 1.75rem" />

    <div class="recommended_section">
      <!-- for this component you just have to change the path of the productImage, we will setup pinia later :3 -->
      <ProductCard
        v-for="product in filteredProductsByTagandType('new', 'menswears')" :key="product.product_id"
        :productImage="product.thumbNail"
        :brandName = "product.brand_name"
        :productName="product.product_name"
        :productStatus="product.product_status"
        :productId="product.product_id"
      />
    </div>

    <SeeMore SectionTitle="Recommend For You" />

    <div class="recommended_section">
      <ProductCard
        v-for="product in filteredProductsByTagandType('recommended', 'menswears')" :key="product.product_id"
        :productImage="product.thumbNail"
        :brandName = "product.brand_name"
        :productName="product.product_name"
        :productStatus="product.product_status"
        :productId="product.product_id"
      />
    </div>

    <SeeMore
      SectionTitle="Popular Brand"
      targetPage="PopularBrand"
      backPage="Menswear"
    />
    <div class="brand_section">
      <BrandCard
        v-for="index in 4"
        :key="index"
        :brandImg="brand.menswearBrand.logo[index - 1]"
        :brandName="brand.menswearBrand.brand_name[index - 1]"
      />
    </div>

    <SeeMore SectionTitle="On Trend" />

    <div class="recommended_section">
      <ProductCard
        v-for="product in filteredProductsByTagandType('collab', 'menswears')" :key="product.product_id"
        :productImage="product.thumbNail"
        :brandName = "product.brand_name"
        :productName="product.product_name"
        :productStatus="product.product_status"
        :productId="product.product_id"
      />
    </div>

    <span class="indie_section">Special Offer</span>
    <!-- indie_section meaning it doesnt rely on the SeeMore component -->

    <div class="offer_section">
      <OfferCard
        :offerImage1="'src/assets/images/SpecialOffers/BlackFriday.jpg'"
        :offerImage2="'src/assets/images/SpecialOffers/newCollection.jpg'"
      />
    </div>

    <SeeMore SectionTitle="Articles" />
    <div class="article_section">
      <!-- just like the product component you just have to change the path of the productImage, we will also setup pinia for this :3 -->
      <ArticleCard
        v-for="index in 2"
        :key="index"
        article_image="src/assets/images/Magazine_Man.png"
        article_title="Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features"
      />
    </div>
  </div>
</template>

<script>
import SeeMore from "@/components/SeeMore.vue";
import WebBanner from "@/components/web_banner.vue";
import BrandCard from "@/components/BrandCard.vue";
import OfferCard from "@/components/OfferCard.vue";
import ArticleCard from "@/components/ArticleCardComponent.vue";
import ProductCard from "@/components/product_card.vue";
import { useBrandStore } from "@/store/brand";
import { mapState } from "pinia";
import { useBannerStore } from "@/store/banner";
import { useProductStore } from "@/store/product";

export default {
  components: {
    BrandCard,
    OfferCard,
    ArticleCard,
    WebBanner,
    ProductCard,
    SeeMore,
  },
  setup() {
    const brandStore = useBrandStore();
    const bannerStore = useBannerStore();
    const productStore = useProductStore();
    return {
      brandStore,
      bannerStore,
      productStore,
    };
  },
  computed: {
    ...mapState(useBrandStore, {
      brand: "brands",
    }),
    ...mapState(useBannerStore, {
      banner: "banners",
    }),
    ...mapState(useProductStore,{
      productsByCategory: "productsByCategory",
    }),
    filteredProductsByTag() {
      return(tag) => {
        const productStore = useProductStore();
        return productStore.getProductsByTag(tag);
      }
    },

    filteredProductsByTagandType(){
      return(tag, type) => {
        const productStore = useProductStore();
        return productStore.getProductByTypeAndTag(tag, type)
      }
    }
  },
  methods: {
    display() {
      console.log(this.brand.menswearBrand.logo[0]);
    },
  },
};
</script>

<style scoped>
.brand_section,
.offer_section,
.article_section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3.44rem;
  margin: 1.75rem 0rem 1.75rem;
}

.recommended_section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7.5rem;
  margin: 1.75rem 0rem 1.75rem;
}

.indie_section {
  font-family: "Inter";
  font-size: 30px;
  font-weight: bold;
  margin-left: 5rem;
}
.Container {
  padding-inline: 1rem;
  overflow: hidden;
}
</style>
