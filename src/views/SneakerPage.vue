<template>
  <div>
    <BrandCard />
    <OfferCard/>
  </div>
</template>


<script>
import BrandCard from "@/components/BrandCard.vue";
import OfferCard from "@/components/OfferCard.vue";

export default {
  components: {
   BrandCard,OfferCard,
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
