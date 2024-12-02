<template>
  <div>
    <BrandCard />
    <OfferCard/>
  </div>
  <div>
    <SeeMore @see-more="handleSeeMore" />
  </div>
</template>

 

<script>
import BrandCard from "@/components/BrandCard.vue";
import OfferCard from "@/components/OfferCard.vue";
import SeeMore from "@/components/SeeMore.vue";

export default {

  components: {
    SeeMore,BrandCard,OfferCard,
  },

  props: {
        
        },
  methods: {
    handleSeeMore() {
      // Handle the click event here
      console.log('See More button clicked in SeeMore.vue');
      // You can perform actions to fetch or display more content here
    }
  }

};
</script>

<style scoped>

</style>
