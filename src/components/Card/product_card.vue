<template>
    <div class="productCard">
    <div class="image-container">
      <img class="productImg" :src="productImage" alt="product image">
    </div>
        <hgroup>
            <h3 class="brandName"> {{ brandName }}</h3>
            <h3 class="productName"> {{ productName }}</h3>
            <h3 class="productStatus"> {{ productStatus }}</h3>
        </hgroup>
        <button class="buyBtn" @click="goToProductDetailPage">Buy</button>
    </div>
</template>

<script>
export default {
  name: "productCard",
  props: {
    productImage: String,
    brandName: String,
    productName: String,
    productStatus: String,
    productId: String,
  },
  methods: {
    goToProductDetailPage() {
      this.$router.push(`/product/${this.productId}`);
      console.log(this.productId);
    },
  },
};
</script>

<style scoped>
.productCard {
  width: 320px;
  height: 500px;
  background-color: transparent;
}

.image-container{
  width: 320px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container > img{
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
    background-color: white;
}

.productName,
.brandName {
  margin-left: 5px;
  font-weight: normal;
  font-size: 20px;
  font-family: "Inter";
  font-weight: 450;
  margin: 0;
}

.productStatus {
  margin-left: 5px;
  font-weight: medium;
  font-size: 18px;
  color: gray;
  font-family: "Inter";
}

.buyBtn {
  margin-top: -10px;
  width: 120px;
  height: 50px;
  font-weight: bold;
  font-size: 18px;
  font-family: "Inter";
  background-color: black;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
</style>
