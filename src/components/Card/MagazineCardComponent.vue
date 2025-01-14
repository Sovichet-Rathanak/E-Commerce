<template>
    <RouterLink class="router-link" to="/ArticleDetail">
        <div class="Magazine">
        <div class="magazneImages">
            <img :src="Magazine_image" alt="" class="Magazine_image">
        </div>
        <div class="Magazine_title">{{ Magazine_title }}</div>
    </div>  
    </RouterLink>
</template>

<script>
export default {
  name: "MagazineCardComponent",
  props: {
    Magazine_image: String,
    Magazine_title: String,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

.Magazine {
  width: 511px;
  height: 500px;
  border-radius: 30px;
  border: 0.5px solid black;
  background: #f0f0f0;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin: 0 25px 50px 0;
}

.magazneImages {
  background: white;
  width: 100%;
  height: 402px;
  border-radius: 30px 30px 0 0;
}
.Magazine_image {
  width: 100%;
  height: 402px;
  border-radius: 30px 30px 0 0;
  border-bottom: 0.5px solid black;
  object-fit: contain;
}

.Magazine_title {
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  color: black;
  margin: 15px 10px 0 25px;
  font-family: "Inter";
}
</style>
