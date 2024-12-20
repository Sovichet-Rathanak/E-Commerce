<template>
  <div class="SneakerAriticlePage">
    <SeeMore
      SectionTitle="Article Page"
      targetPage="ArticlePage"
      backPage="Sneaker"
    />

    <div class="Article_section">
      <ArticleCard
        v-for="index in 15"
        :key="index"
        :brandImg="brand.womenswearBrand.logo[index - 1]"
        :brandName="brand.womenswearBrand.brand_name[index - 1]"
        :cardSize="dynamicSize"
      />
    </div>
  </div>
</template>

<script>
import SeeMore from "@/components/SeeMore.vue";
import ArticleCard from "@/components/ArticleCardComponent.vue";
import { useBrandStore } from "@/store/brand";
import { mapState } from "pinia";
export default {
  components: {
    SeeMore,
    ArticleCard,
  },
  setup() {
    const brandStore = useBrandStore();

    return {
      brandStore,
    };
  },
  computed: {
    ...mapState(useBrandStore, {
      brand: "brands",
    }),
  },
  data() {
    return {
      dynamicSize: "large", // Default size, can be adjusted dynamically
    };
  },
  methods: {
    display() {
      console.log(this.brand.sneakerBrand.logo[0]);
    },
  },
};
</script>

<style sc>
.SneakerAriticlePage {
  padding: 2rem 0;
}
.Article_section {
  display: grid;
  grid-template-columns: repeat(2, 7 rem);
  justify-items: center;
}
</style>
