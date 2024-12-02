<template>

  <span>Recommended For You</span>

  <div class="recommended_section">

  </div>
  
  <span>Popular Brand</span>

  <div class="brand_section">
    <BrandCard v-for="index in 4" :key="index"
      :brandImg= "brand.sneakerBrand.logo[index -1]"
      :brandName= "brand.sneakerBrand.brand_name[index -1]"
    />
  </div>

  <span>Special Offer</span>
  
  <div class="offer_section">
    <OfferCard></OfferCard>
  </div>
  
  <span>Articles</span>
  
  <div class="article_section">
    <ArticleCard v-for="index in 2" :key="index"
    ></ArticleCard>
  </div>
</template>

<script>
import BrandCard from "@/components/BrandCard.vue";
import OfferCard from "@/components/OfferCard.vue";
import ArticleCard from "@/components/ArticleCardComponent.vue";
import { useBrandStore } from "@/store/brand";
import { mapState } from "pinia";

export default {
  components: {
    BrandCard,
    OfferCard,
    ArticleCard
  },
  setup(){
    const brandStore = useBrandStore();
    return {brandStore};
  },
  computed:{
    ...mapState(useBrandStore, {
      brand: 'brands'
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
  .brand_section{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3.44rem;
    margin: 1.75rem 0rem 1.75rem;
  }


  .offer_section{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3.44rem;
    margin: 1.75rem 0rem 1.75rem;
  }

  .article_section{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3.4rem;
  }
</style>
