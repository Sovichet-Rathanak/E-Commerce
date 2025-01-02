<template>
  <body>
    <ProductImage
      :images="productImages"
      brandname="Air Jordan 1 High OG"
      productname="Chicago Lost and Found"
      price_tag="239"
    />
        <comment_section/>
    <Rating_Component />
    <div>Testing Section</div>
  </body>
</template>

<script>
import ProductImage from "../components/ProductImage.vue";
import Rating_Component from "@/components/RatingComponent.vue";
import comment_section from '@/components/comment_section.vue';
export default {
  components: {
    ProductImage,
    Rating_Component,
        comment_section
  },
  data() {
    return {
      productImages: [
        "src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image1.png",
        "src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image3.png",
        "src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image4.png",
        "src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image5.png",
        "src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image6.png",
      ],
    };
  },
};
</script>

<style scoped>
body {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-inline: 7rem;
}
</style>
