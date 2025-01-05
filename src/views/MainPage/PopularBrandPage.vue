<template>
  <div class="BrandList">
    <div class="BrandCard">
      <BrandCard
        v-for="(logo, index) in selectedBrand?.logo"
        :key="index"
        :brandImg="logo"
        :brandName="selectedBrand?.brand_name[index]"
        :cardSize="dynamicSize"
      />
    </div>
  </div>
</template>

<script>
import BrandCard from "@/components/BrandCard.vue";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useBrandStore } from "@/store/brand";

export default {
  components: {
    BrandCard,
  },
  data(){
    return{
      dynamicSize: "large",
    }
  },
  setup() {
    const brandStore = useBrandStore();
    const route = useRoute();
    const brandType = ref(route.params.id); //Get the route param ID but i can't use it for some reason

    const selectedBrand = computed(() => {
      return brandStore.brands[brandType.value];  //this solve the problem
    });

    return {
      brandStore,
      brandType,
      selectedBrand,
    };
  },
};
</script>


<style scoped>
.BrandList {
  width: auto;
  padding: 2rem 2rem;
}

.BrandCard {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;  
  justify-content: center;
  align-items: center;
  gap: 45px;
}
</style>
