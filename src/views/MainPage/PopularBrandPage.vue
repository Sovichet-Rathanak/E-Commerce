<template>
  <div class="BrandList">
    <SeeMore
      SectionTitle="Popular Brand"
      targetPage="PopularBrand"
      :backPage="category"
      class="section-header"
    />
    <div class="BrandCard">
      <BrandCard
        v-for="(logo, index) in currentBrand.logo"
        :key="index"
        :brandImg="logo"
        :brandName="currentBrand.brand_name[index]"
        :cardSize="dynamicSize"
      />
    </div>
  </div>
</template>

<script>
import SeeMore from "@/components/SeeMore.vue";
import BrandCard from "@/components/BrandCard.vue";
import { useBrandStore } from "@/store/brand";

export default {
  components: {
    SeeMore,
    BrandCard,
  },
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  computed: {
    currentBrand() {
      const store = useBrandStore();
      return (
        store.brands[this.category + "Brand"] || {
          logo: [],
          brand_name: [],
        }
      );
    },
  },
  data() {
    return {
      dynamicSize: "large",
    };
  },
};
</script>

<style scoped>
.section-header {
  margin-bottom: 2rem;
  justify-content: space-between;
  width: auto;
}

.BrandList {
  width: auto;
  padding: 2rem 2rem;
}

.BrandCard {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 45px;
}
</style>
