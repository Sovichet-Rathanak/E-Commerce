<template>
  <div class="brand-section">
    <h2>Popular Brands</h2>
    <div class="brand-list">
      <div
        v-for="(brand, index) in brands"
        :key="index"
        class="brand-card"
        :style="{ backgroundColor: brand.bgColor }"
      >
        <img :src="brand.logo" :alt="brand.name" class="brand-logo" />
        <div class="brand-name">{{ brand.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Converse from "@/assets/image/Converse.png";
import Jordan from "@/assets/image/Jordan.png";
import Vans from "@/assets/image/Vans.png";
import Yeezy from "@/assets/image/Yeezy.png";

export default {
  name: "BrandCard",
  data() {
    return {
      brands: [
        {
          logo: Jordan,
          name: "Converse",
          bgColor: "#fff",
        },
        {
          logo: Converse,
          name: "Converse",
          bgColor: "#fff",
        },
        {
          logo: Vans,
          name: "Vans",
          bgColor: "#fff",
        },
        {
          logo: Yeezy,
          name: "Yeezy",
          bgColor: "#fff",
        },
      ],
    };
  },
};
</script>

<style scoped>
.brand-section {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-size: 40px;
  margin-bottom: 20px;
  margin-left: 70px;

}

/* .brand-section h2 {
  font-size: 40px;
  margin-bottom: 20px;

} */

.brand-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.brand-card {

  align-items: center;
  justify-content: center;
  border-radius: 1.875rem;
  color: #fff;
  text-align: center;
  width: 23.125rem;
  height: 19.688rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  margin: 10px;
}

.brand-logo {
  width: 23.125rem;
  height: 15.813rem;
  object-fit: cover;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

.brand-name {
  margin-top: 0.5rem;
  font-size: 1.75rem;
  color: black;
}
</style>
