<template>
  <div class="offer_section">
    <img class="first-offer" :src="offerImage1" alt="Black Friday Banner" />
    <img class="second-offer" :src="offerImage2" alt="New Collection Banner" />
  </div>
</template>
<script>
export default{
  props:{
    offerImage1: String,
    offerImage2: String,
  }
}
</script>
<style scoped>
.first-offer{
  width: 430px;
  height: 550px;
  border: none;
  border-radius: 30px;
  margin-top:.5rem;
  object-fit: cover;
  margin-right: 30px;
}

.second-offer{
  width: 900px;
  height: 550px;
  border: none;
  border-radius: 30px;
  margin-top:.5rem;
}

</style>
