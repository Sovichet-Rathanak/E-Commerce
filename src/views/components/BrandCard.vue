<template>
  <div class="brand-card" :style="{backgroundColor: bgColor}">
    <img :src="logo" :alt="brandName" class="brand-logo"/>
    <div class="brand-name">{{ brandName }}</div>
  </div>
</template>

<script>
  export default{
      props:{
        logo: {
          type: String,
          required: true,
        },
        brandName:{
          type: String,
          required: true,
        },
        bgColor:{
          type: String,
          default: "#000",
        },
      
      },
    };
  
</script>
<style>
.brand-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  color: #fff;
  text-align: center;
  width: 370px;
  height: 315px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 20px;
}
.brand-logo {
  width: 370px;
  height: 253px;
}
.brand-name {
  margin-top: 8px;
  font-size: 28px;
  color:black;
}
</style>
