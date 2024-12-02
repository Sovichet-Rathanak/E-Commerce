<template>
  <div class="offers-section">
    <h2>Special Offers</h2>
    <div class="offer-list">
      <div
        v-for="(offer, index) in offers"
        :key="index"
        class="offer-card"
      >
        <img :src="offer.image" class="offer-image" />

      </div>
    </div>
  </div>
</template>

<script>
import ComingSoon from "@/assets/image/ComingSoon.png";
import NewYear from "@/assets/image/NewYear.png";
import NewArrival from "@/assets/image/NewArrival.png";
export default {
  name: "OffersSection",
  data() {
    return {
      offers: [
        {image: ComingSoon},
        { image: NewYear},
        { image: NewArrival},
      ],
    };
  },
};
</script>

<style scoped>
.offers-section {
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 40px;
  margin-bottom: 20px;
  margin-left: 70px;
}

.offer-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.offer-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 27.313rem;
  height: 27.438rem;
  margin: 20px;
}

.offer-image {
  width: 100%;
  height: auto;
}

.offer-content {
  margin-top: 8px;
}
</style>
