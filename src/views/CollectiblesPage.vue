<template>
  <web_banner :images="banner.collectiblesBanner.image"/>
  <div class="sectionOne"> 
    <product_card v-for="(productCard, index) in productCard"
      :key="index"
      :productImage="productCard.productImage"
      :productName="productCard.productName"
      :productStatus="productCard.productStatus"/>
  </div>
</template>

<script>
import web_banner from '@/components/web_banner.vue';
import product_card from '@/components/product_card.vue';
import { useBannerStore } from '@/store/banner';
import { mapState } from 'pinia';

export default{
  components:{
    web_banner,
    product_card
  },
  data(){
    return{
      productCard:[
        {
          productImage: './src/assets/images/testimg1.jpg', 
          productName: 'Hello Bomboclat', 
          productStatus: 'Available'
        },
        {
          productImage: './src/assets/images/testimg1.jpg', 
          productName: 'Hello Bomboclat', 
          productStatus: 'Available'
        },
        {
          productImage: './src/assets/images/testimg1.jpg', 
          productName: 'Hello Bomboclat', 
          productStatus: 'Available'
        },
        {
          productImage: './src/assets/images/testimg1.jpg', 
          productName: 'Hello Bomboclat', 
          productStatus: 'Available'
        },
      ]
    }
  },
  setup(){
    const bannerStore = useBannerStore();
    return {bannerStore};
  },
  computed:{
    ...mapState(useBannerStore, {
      banner: 'banners'
    })
  }
}
</script>

<style>
.sectionOne{
  display: flex;
  width: 100%;
  overflow: auto
}
</style>
