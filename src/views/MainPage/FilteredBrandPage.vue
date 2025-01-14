<template>
  <div class="brand-container">
    <div class="header">
      <h1>{{ brand }} in {{ category }}</h1>
      <button class="back-button" @click="$router.go(-1)">Back</button>
    </div>
    <div class="product-card">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.product_id"
        :productImage="product.thumbNail"
        :brandName="product.brand_name"
        :productName="product.product_name"
        :productStatus="product.product_status"
        :productId="product.product_id"
      />
    </div>
  </div>
</template>

<script>
import { useProductStore } from "@/store/ProductStore/product";
import ProductCard from "@/components/Card/product_card.vue";
import { computed, onMounted } from "vue";

export default {
  components: { ProductCard },
  props: {
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const productStore = useProductStore();

    onMounted(() => {
      if (Object.keys(productStore.productsByCategory).length === 0) {
        productStore.populateProductsByCategory();
      }
    });

    const filteredProducts = computed(() => {
      console.log(
        `Filtering for category: ${props.category}, brand: ${props.brand}`
      );
      const filtered = productStore.getProductsByCategoryAndBrand(
        props.category,
        props.brand
      );
      console.log("Filtered Products:", filtered);
      return filtered;
    });

    return {
      filteredProducts,
    };
  },
};
</script>

<style scoped>
.brand-container {
  margin-inline: 5rem;
  margin-bottom: 2rem;
}
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-family: "Inter";
}
.header > h1 {
  margin-bottom: 2.5rem;
}
.back-button {
  font-family: "Inter";
  font-weight: bold;
  font-size: 30px;
  color: black;
  background-color: transparent;
  border: none;
  margin-bottom: 2.5rem;
}

.product-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}
</style>
