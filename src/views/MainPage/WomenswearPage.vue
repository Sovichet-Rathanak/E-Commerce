<template>
  <WebBanner :images="banner.womenswearBanner.image" />
  <!-- checkout banner.js and just basically populate the image array with your own image -->
  <div class="Container">
    <SeeMore SectionTitle="New and Noteworthy" style="margin-top: 1.75rem" />

    <div class="recommended_section">
      <!-- for this component you just have to change the path of the productImage, we will setup pinia later :3 -->
      <ProductCard
        v-for="index in 4"
        :key="index"
        productImage="./src/assets/images/clothes1.jpg"
        productName="Elevate your style with our latest collection!"
        productStatus="Available In Stock"
      ></ProductCard>
    </div>

    <SeeMore SectionTitle="Recommended For You" />

    <div class="recommended_section">
      <ProductCard
        v-for="index in 4"
        :key="index"
        productImage="./src/assets/images/clothes1.jpg"
        productName="Elevate your style with our latest collection!"
        productStatus="Available In Stock"
      ></ProductCard>
    </div>
    <SeeMore
      SectionTitle="Popular Brand"
      targetPage="PopularBrand"
      backPage="Womenswear"
    />

    <div class="brand_section">
      <BrandCard
        v-for="index in 4"
        :key="index"
        :brandImg="brand.womenswearBrand.logo[index - 1]"
        :brandName="brand.womenswearBrand.brand_name[index - 1]"
      />
    </div>
    <SeeMore SectionTitle="Exclusives and Collaborations" />

    <div class="recommended_section">
      <ProductCard
        v-for="index in 4"
        :key="index"
        productImage="./src/assets/images/clothes1.jpg"
        productName="Elevate your style with our latest collection!"
        productStatus="Available In Stock"
      ></ProductCard>
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
      <MagazineCard
        v-for="index in 3"
        :key="index"
        Magazine_image="src/assets/images/Magazine/Magazine1.jpg"
        Magazine_title="Step into the world of timeless fashion with our exclusive collection!"
      />
    </div>
  </div>
</template>

<script>
import SeeMore from "@/components/SeeMore.vue";
import WebBanner from "@/components/web_banner.vue";
import BrandCard from "@/components/BrandCard.vue";
import OfferCard from "@/components/OfferCard.vue";
import MagazineCard from "@/components/MagazineCardComponent.vue";
import ProductCard from "@/components/product_card.vue";
import { useBrandStore } from "@/store/brand";
import { mapState } from "pinia";
import { useBannerStore } from "@/store/banner";

export default {
  components: {
    BrandCard,
    OfferCard,
    WebBanner,
    ProductCard,
    SeeMore,
    MagazineCard,
  },
  setup() {
    const brandStore = useBrandStore();
    const bannerStore = useBannerStore();

    return {
      brandStore,
      bannerStore,
    };
  },
  computed: {
    ...mapState(useBrandStore, {
      brand: "brands",
    }),
    ...mapState(useBannerStore, {
      banner: "banners",
    }),
  },
  methods: {
    display() {
      console.log(this.brand.sneakerBrand.logo[0]);
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
