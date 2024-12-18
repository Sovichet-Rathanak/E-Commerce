<template>
  <div class="WomenswearBrandPage">
    <SeeMore
      SectionTitle="Popular Brand"
      targetPage="PopularBrand"
      backPage="Womenswear"
    />

    <div class="Brand_section">
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

<style sc>
.WomenswearBrandPage {
  padding: 2rem 0;
}
.Brand_section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.44rem;
  justify-items: center;
  margin: 2.5rem 0;
}
</style>
