<template>
  <web_banner :images="ImageList"/>
  <div class="sectionOne"> 
    <product_card v-for="(productCard, index) in productCard"
      :key="index"
      :productImage="productCard.productImage"
      :title="productCard.title"
      :status="productCard.status"/>
  </div>
</template>

<script>
import web_banner from '@/components/web_banner.vue';
import product_card from '@/components/product_card.vue';
export default{
  components:{
    web_banner,
    product_card
  },
  data(){
    return{
      ImageList: [        
        './src/assets/images/aespa3.jpg',
        './src/assets/images/aespa4.jpg',
        './src/assets/images/newjeans.jpg',
        './src/assets/images/nct.jpg',
        './src/assets/images/illit.jpg',
        './src/assets/images/lessera.jpg',
        './src/assets/images/RIIZE.jpeg',
        './src/assets/images/straykids.jpg',
        './src/assets/images/ateez.jpeg',
      ],
      productCard:[
        {productImage: './src/assets/images/testimg1.jpg', title: 'Hello Bomboclat', status: 'Available'},
        {productImage: './src/assets/images/testimg1.jpg', title: 'Hello Bomboclat', status: 'Available'},
        {productImage: './src/assets/images/testimg1.jpg', title: 'Hello Bomboclat', status: 'Available'},
        {productImage: './src/assets/images/testimg1.jpg', title: 'Hello Bomboclat', status: 'Available'},
      ]
    }

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
