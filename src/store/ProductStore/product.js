import { defineStore } from "pinia";
import { useSneakerStore } from "./sneaker";
import { useAccessoryStore } from "./accessories";
import { useCollectibleStore } from "./collectibles";
import { useMenswearStore } from "./menswear";
import { useWomenswearStore } from "./womenswear";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    productsByCategory: {}, // Will hold products grouped by category
    selectedProduct: null,
    selectedSize: null,
  }),
  getters: {
    getProductsByTag(state) {
      return (tag) => {
        const allProducts = Object.values(state.productsByCategory).flat();
        return allProducts
          .filter((product) => product.tags?.includes(tag))
          .slice(0, 4);
      };
    },
    getProductByType(state) {
      return (type) => {
        const allProducts = Object.values(state.productsByCategory).flat();
        return allProducts.filter((product) => product.type?.includes(type));
      };
    },
    getProductByTypeAndTag(state) {
      return (tag, type) => {
        const allProducts = Object.values(state.productsByCategory).flat();
        return allProducts.filter(
          (product) => product.tags?.includes(tag) && product.product_type === type
        );
      };
    },
  },
  actions: {
    populateProductsByCategory() {
      const sneakerStore = useSneakerStore();
      const accessoryStore = useAccessoryStore();
      const collectibleStore = useCollectibleStore();
      const menswearStore = useMenswearStore();
      const womenswearStore = useWomenswearStore();

      this.productsByCategory = {
        sneakers: sneakerStore.products || [],
        accessories: accessoryStore.products || [],
        collectibles: collectibleStore.products || [],
        menswear: menswearStore.products || [],
        womenswear: womenswearStore.products || [],
      };
    },
    selectedProduct(category, productId) {
      this.selectedProduct = this.productsByCategory[category]?.find(
        (product) => product.product_id === productId
      );
    },
    selectSize(size) {
      this.selectedSize = size;
    },
  },
});
