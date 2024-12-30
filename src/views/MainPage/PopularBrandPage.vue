<template>
  <div class="BrandList">
    <SeeMore
      SectionTitle="Popular Brand"
      targetPage="PopularBrand"
      backPage="Womenswear"
      class="section-header"
    />

    <div class="BrandCard">
      <BrandCard
        v-for="index in 15"
        :key="index"
        :brandImg="brand.womenswearBrand.logo[index - 1]"
        :brandName="brand.womenswearBrand.brand_name[index - 1]"
        :cardSize="dynamicSize"
      />
    </div>
  </div>
</template>

<script>
import SeeMore from "@/components/SeeMore.vue";
import BrandCard from "@/components/BrandCard.vue";
import { useBrandStore } from "@/store/brand";
import { mapState } from "pinia";
export default {
  components: {
    BrandCard,
    SeeMore,
  },

  setup() {
    const brandStore = useBrandStore();
    return {
      brandStore,
    };
  },

  computed: {
    ...mapState(useBrandStore, {
      brand: "brands",
    }),
  },

  data() {
    return {
      dynamicSize: "large", // Default size, can be adjusted dynamically
    };
  },
  methods: {
    display() {
      console.log(this.brand.sneakerBrand.logo[0]);
    },
  },
};
</script>

<style scoped>
.section-header{
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
