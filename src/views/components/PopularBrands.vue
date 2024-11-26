
<template>
  <div>
    <h2>Popular Brands</h2>
    <div class="brand-list">
      <BrandCard
    v-for="(brand, index) in brands"
    :key="index"
    :logo="brand.logo"
    :brandName="brand.name"
    :bgColor="brand.bgColor"
    />
    </div>
  </div>
</template>


<script>
import BrandCard from './BrandCard.vue';
import ConverseLogo from '@/assets/BrandLogos/Converse.png';
import JordanLogo from '@/assets/BrandLogos/Jordan.png';
import YeezyLogo from '@/assets/BrandLogos/Yeezy.png';
import VanLogo from '@/assets/BrandLogos/Van.png';
export default{
  components: {BrandCard},
  data(){
    return{
      brands:[
      {
        logo:JordanLogo,
        name: "Jordan",
        bgColor: "#fff",
      },
      {
        logo: VanLogo,
        name: "Vans",
        bgColor: "#fff",
        },
        {
        logo: ConverseLogo,
        name: "Converse",
        bgColor: "#fff",
        },
        {
        logo: YeezyLogo,
        name: "Yeezy",
        bgColor: "#fff",
        },

        
      ]
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

.brand-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
h2 {
  text-align: left;
  margin-left: 70px;
  font-size: 40px;
}
</style>