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
        @click="navigateToFilteredBrand(currentBrand.brand_name[index])"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import SeeMore from "@/components/SeeMore.vue";
import BrandCard from "@/components/Card/BrandCard.vue";
import { useBrandStore } from "@/store/brand";

export default {
  components: {
    SeeMore,
    BrandCard,
  },
  props: {
    category: {
      type: String,
    },
  },

  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const brandStore = useBrandStore();

    const currentCategory = computed(() => {
      return props.category || route.params.category || "all";
    });

    const navigateToFilteredBrand = (brand) => {
      router.push({
        path: `/${currentCategory.value}/${brand}`,
      });
    };

    const currentBrand = computed(() => {
      return (
        brandStore.brands[currentCategory.value + "Brand"] || {
          logo: [],
          brand_name: [],
        }
      );
    });

    return {
      currentCategory,
      currentBrand,
      navigateToFilteredBrand,
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
