<template>
  <WebBanner :images="banner.accessoryBanner.image"/>  <!-- checkout banner.js and just basically populate the image array with your own image -->
  <SeeMore
    SectionTitle="New and Noteworthy" style="margin-top: 1.75rem;"
  />

  <div class="recommended_section">         <!-- for this component you just have to change the path of the productImage, we will setup pinia later :3 -->
      <ProductCard v-for="index in 4" :key="index" 
        productImage="./src/assets/images/Prada1.jpg"
        productName="Jordan 1 Retro High OG Chicago Lost and Found"
        productStatus="Available In Stock"
      ></ProductCard>
  </div>
  
  <SeeMore
  SectionTitle="Recommended For You"
  />

  <div class="recommended_section">
      <ProductCard v-for="index in 4" :key="index"
        productImage="./src/assets/images/YSL1.jpg"
        productName="Jordan 1 Retro High OG Chicago Lost and Found"
        productStatus="Available In Stock"
      ></ProductCard>
  </div>
  
  <span class="indie_section">Popular Brand</span>  <!-- indie_section meaning it doesnt rely on the SeeMore component -->

  <div class="brand_section">
    <BrandCard v-for="index in 4" :key="index"
      :brandImg= "brand.accessoryBrand.logo[index -1]"
      :brandName= "brand.sneakerBrand.brand_name[index -1]"
    />
  </div>

  <SeeMore
    SectionTitle="Exclusives and Collaborations"
  />

  <div class="recommended_section">
      <ProductCard v-for="index in 4" :key="index"
        productImage="./src/assets/images/LV1.jpg"
        productName="Jordan 1 Retro High OG Chicago Lost and Found"
        productStatus="Available In Stock"
      ></ProductCard>
  </div>
  
  <span class="indie_section">Special Offer</span> <!-- indie_section meaning it doesnt rely on the SeeMore component -->
  
  <div class="offer_section">
    <OfferCard></OfferCard>
  </div>

  <SeeMore
    SectionTitle="Articles"
  />
  <div class="article_section">  <!-- just like the product component you just have to change the path of the productImage, we will also setup pinia for this :3 -->
    <ArticleCard v-for="index in 2" :key="index"
      article_image="src/assets/images/Articles/articlebag.jpg"
      article_title = "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features"
    />
  </div>
</template>

<script>
import SeeMore from "@/components/SeeMore.vue";
import WebBanner from "@/components/web_banner.vue";
import BrandCard from "@/components/BrandCard.vue";
import OfferCard from "@/components/OfferCard.vue";
import ArticleCard from "@/components/ArticleCardComponent.vue";
import ProductCard from '@/components/product_card.vue';
import { useBrandStore } from "@/store/brand";
import { mapState } from "pinia";
import { useBannerStore } from '@/store/banner';

export default {
  components: {
    BrandCard,
    OfferCard,
    ArticleCard,
    WebBanner,
    ProductCard,
    SeeMore,
  },
  setup(){
    const brandStore = useBrandStore();
    const bannerStore = useBannerStore();

    return {
      brandStore,
      bannerStore
    };
  },
  computed:{
    ...mapState(useBrandStore, {
      brand: 'brands'
    }),
    ...mapState(useBannerStore,{
      banner: 'banners'
    })
  },
  methods:{
    display(){
      console.log(this.brand.sneakerBrand.logo[0])
    }
  }
};
</script>

<style scoped>
  .brand_section,
  .offer_section,
  .article_section{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3.44rem;
    margin: 1.75rem 0rem 1.75rem;
  }

  .recommended_section{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 7.5rem;
    margin: 1.75rem 0rem 1.75rem;
  }

  .indie_section{
    font-family: 'Inter';
    font-size: 30px;
    font-weight: bold;
    margin-left: 5rem;
  }
</style>
