<template>
  <WebBanner :images="banner.womenswearBanner.image" />
  <!-- checkout banner.js and just basically populate the image array with your own image -->
  <div class="Container">
    <SeeMore SectionTitle="New and Noteworthy" 
      style="margin-top: 1.75rem" 
      targetPage="FilterNew"
      :backPage="category"
      class="section-header"
    />

    <div class="recommended_section">
      <!-- for this component you just have to change the path of the productImage, we will setup pinia later :3 -->
      <ProductCard
        v-for="product in filteredProductsByTagandType('new', 'womenswear').slice(0,4)"
        :key="product.product_id"
        :productImage="product.thumbNail"
        :brandName="product.brand_name"
        :productName="product.product_name"
        :productStatus="product.product_status"
        :productId="product.product_id"
      />
    </div>

    <SeeMore SectionTitle="Recommended For You" 
      style="margin-top: 1.75rem" 
      targetPage="FilterRecommended"
      :backPage="category"
      class="section-header"
    />

    <div class="recommended_section">
      <ProductCard
        v-for="product in filteredProductsByTagandType('recommended', 'womenswear').slice(0,4)"
        :key="product.product_id"
        :productImage="product.thumbNail"
        :brandName="product.brand_name"
        :productName="product.product_name"
        :productStatus="product.product_status"
        :productId="product.product_id"
      />
    </div>
    <SeeMore
      SectionTitle="Popular Brand"
      targetPage="PopularBrand"
      backPage="womenswear"
    />

    <div class="brand_section">
      <BrandCard
        v-for="(brandName, index) in brand.womenswearBrand.brand_name"
        :key="index"
        :brandImg="brand.womenswearBrand.logo[index]"
        :brandName="brandName"
        @click="navigateToBrand(brandName)"
      />
    </div>

    <SeeMore SectionTitle="On Trend"
      style="margin-top: 1.75rem" 
      targetPage="FilterCollab"
      :backPage="category"
      class="section-header"
    />
    

    <div class="recommended_section">
      <ProductCard
        v-for="product in filteredProductsByTagandType('collab', 'womenswear').slice(0,4)"
        :key="product.product_id"
        :productImage="product.thumbNail"
        :brandName="product.brand_name"
        :productName="product.product_name"
        :productStatus="product.product_status"
        :productId="product.product_id"
      />
    </div>

    <span class="indie_section">Special Offer</span>
    <!-- indie_section meaning it doesnt rely on the SeeMore component -->

    <div class="offer_section">
      <OfferCard
        :offerImage1="'src/assets/images/SpecialOffers/BlackFriday.jpg'"
        :offerImage2="'src/assets/images/SpecialOffers/newCollection.jpg'"
      />
    </div>

    <SeeMore
      SectionTitle="Magazines"
      targetPage="MagazinePage"
      backPage="womenwear"
    />
    <div class="article_section">
      <!-- just like the product component you just have to change the path of the productImage, we will also setup pinia for this :3 -->
      <MagazineCard
        v-for="index in 3"
        :key="index"
        :Magazine_image="article.womenwearArticle.article_images[index - 1]"
        :Magazine_title="article.womenwearArticle.article_titles[index - 1]"
      />
    </div>
  </div>
</template>

<script>
import SeeMore from "@/components/SeeMore.vue";
import WebBanner from "@/components/HomeComponent/web_banner.vue";
import BrandCard from "@/components/Card/BrandCard.vue";
import OfferCard from "@/components/HomeComponent/OfferCard.vue";
import MagazineCard from "@/components/Card/MagazineCardComponent.vue";
import ProductCard from "@/components/Card/product_card.vue";
import { useBrandStore } from "@/store/brand";
import { mapState } from "pinia";
import { useBannerStore } from "@/store/banner";
import { useProductStore } from "@/store/ProductStore/product";
import { onMounted } from "vue";
import { useArticleStore } from "@/store/article";
export default {
  components: {
    BrandCard,
    OfferCard,
    WebBanner,
    ProductCard,
    SeeMore,
    MagazineCard,
  },
  data() {
    return {
      category: "womenswear",
    };
  },
  setup() {
    const brandStore = useBrandStore();
    const bannerStore = useBannerStore();
    const productStore = useProductStore();
    const articleStore = useArticleStore();

    onMounted(() => {
      productStore.populateProductsByCategory();
      console.log("Product Store: ", productStore);
    });

    return {
      brandStore,
      bannerStore,
      productStore,
      articleStore,
    };
  },
  computed: {
    ...mapState(useBrandStore, {
      brand: "brands",
    }),
    ...mapState(useBannerStore, {
      banner: "banners",
    }),
    ...mapState(useArticleStore, {
      article: "articles",
    }),
    ...mapState(useProductStore, {
      productsByCategory: "productsByCategory",
    }),

    filteredProductsByTag() {
      return (tag) => {
        const productStore = useProductStore();
        return productStore.getProductsByTag(tag);
      };
    },

    filteredProductsByTagandType() {
      return (tag, type) => {
        const productStore = useProductStore();
        return productStore.getProductByTypeAndTag(tag, type);
      };
    },
  },
  methods: {
    display() {
      console.log(this.brand.sneakerBrand.logo[0]);
    },
    navigateToBrand(brandName) {
      this.$router.push(`/${this.category}/${brandName}`);
    },
  },
};
</script>

<style scoped>
.brand_section,
.offer_section,
.article_section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3.44rem;
  margin: 1.75rem 0rem 1.75rem;
}

.recommended_section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7.5rem;
  margin: 1.75rem 0rem 1.75rem;
}

.indie_section {
  font-family: "Inter";
  font-size: 30px;
  font-weight: bold;
  margin-left: 5rem;
}
.Container {
  padding-inline: 1rem;
  overflow: hidden;
}
</style>
