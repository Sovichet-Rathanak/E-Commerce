<template>
    <body>
        <div class="BrandList">
      <SeeMore
        SectionTitle="Recommended For You"
        targetPage="FilterRecommended"
        :backPage="category"
        class="section-header"
      />
      <div class="BrandCard">
        <ProductCard
        v-for="product in filteredProductsByTagandType('recommended', category)"
        :key="product.product_id"
        :productImage="product.thumbNail"
        :brandName="product.brand_name"
        :productName="product.product_name"
        :productStatus="product.product_status"
        :productId="product.product_id"
      />
      </div>
    </div>
    </body>
  </template>
  
  <script>
  import { onMounted } from "vue";
  import { useProductStore } from "@/store/ProductStore/product";
  import { mapState } from "pinia";
  import SeeMore from "@/components/SeeMore.vue";
  import ProductCard from "@/components/Card/product_card.vue";
  export default {
    components: {
      SeeMore,
      ProductCard,
    },
    props: {
      category: {
        type: String,
      },
    },
  
    setup() {
    const productStore = useProductStore();

    onMounted(() => {
      productStore.populateProductsByCategory();
      console.log("Product Store: ", productStore);
      console.log("Product Store: ", productStore);
    });

    return {
      productStore,
    };
  },
  computed: {
    ...mapState(useProductStore, {
      productsByCategory: "productsByCategory",
    }),

    filteredProductsByTag() {
      return (tag) => {
        const productStore = useProductStore();
        return productStore.getProductsByTag(tag);
      };
    },

    filteredProductsByTagandType() {
      return (tag, type) => {
        const productStore = useProductStore();
        return productStore.getProductByTypeAndTag(tag, type);
      };
    },
  },
};
  </script>
  
  <style scoped>
  body{
    width: 100%;
  }
  .section-header {
    margin-bottom: 2rem;
    justify-content: space-between;
    width: auto;
  }
  
  .BrandList {
    width: auto;
    padding: 2rem 5rem;
  }
  
  .BrandCard {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 45px;
  }
  </style>
  