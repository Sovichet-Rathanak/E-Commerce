<template>
  <div :class="['card_wrapper', cardSize]">
    <img class="brand_image" :src="`/${brandImg}`" alt="brand_logo" />
    <span class="brand_name">{{ brandName }}</span>
  </div>
</template>

<script>
export default {
  props: {
    brandImg: String,
    brandName: String,
    cardSize: {
      type: String,
      default: "medium",
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
.card_wrapper {
  width: 370px;
  height: 315px;
  border-radius: 30px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border: 1px solid black;
  background-color: #f0f0f0;
}
.card_wrapper.medium {
  width: 370px;
  height: 315px;
}

.card_wrapper.large {
  width: 500px;
  height: 315px;
}

.brand_image {
  height: 253px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px 30px 0px 0px;
  object-fit: cover;
  margin-bottom: 10px;
}

.brand_name {
  font-weight: bold;
  font-size: 28px;
  font-family: "Inter";
  margin: 20px;
}
</style>
