<template>
  <div>
    <BrandsSection />
    <OffersSection />
  </div>
</template>


<script>
import PopularBrands from "./components/PopularBrands.vue";
import SpecialOffers from "./components/SpecialOffers.vue";

export default {
  components: {
    BrandsSection: PopularBrands,
    OffersSection: SpecialOffers,
  }, 
};
</script>
<style scoped>
.offer-list {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
h2 {
  text-align: center;
  margin-bottom: 16px;
}
</style>