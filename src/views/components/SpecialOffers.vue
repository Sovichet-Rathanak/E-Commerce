<template>
    <div>
      <h2>Special Offers</h2>
      <div class="offer-list">
        <OfferCard
          v-for="(offer, index) in offers"
          :key="index"
          :image="offer.image"
        />
      </div>
    </div>
  </template>
  
  <script>
  import OfferCard from "./OfferCard.vue";
  import ComingSoon from '@/assets/SpecialOffers/ComingSoon.png';
  import NewYear from '@/assets/SpecialOffers/NewYear.png';
  import NewArrival from '@/assets/SpecialOffers/NewArrival.png';
  export default {
    components: { OfferCard },
    data() {
      return {
        offers: [
          {
            image: ComingSoon,
          },
          {
            image: NewYear,
          },
          {
            image:NewArrival ,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
  
  .offer-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
   
  }
  h2 {
    text-align: left;
    margin-bottom: 10px;
    font-size: 40px;
    margin-left: 70px;
  }
  </style>
  