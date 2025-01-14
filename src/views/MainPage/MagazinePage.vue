<template>
  <div class="MagazinePage">
    <div class="section-header">
      <SeeMore
        SectionTitle="Magazines"
        targetPage="MagazinePage"
        :backPage="category"
      />
    </div>
    <div class="Magazine-wrap">
      <MagazineCard
        v-for="(image, index) in currentMagazine.article_images"
        :key="index"
        :Magazine_image="image"
        :Magazine_title="currentMagazine.article_titles[index]"
        class="Magazine-section"
      />
    </div>
  </div>
</template>

<script>
import SeeMore from "@/components/SeeMore.vue";
import { useArticleStore } from "@/store/article";
import MagazineCard from "@/components/Card/MagazineCardComponent.vue";

export default {
  components: {
    SeeMore,
    MagazineCard,
  },

  props: {
    category: {
      type: String,
      required: true,
    },
  },

  computed: {
    currentMagazine() {
      const store = useArticleStore();
      return (
        store.articles[this.category + "Article"] || {
          article_titles: [],
          article_images: [],
        }
      );
    },
  },
};
</script>

<style scoped>
.MagazinePage {
  width: auto;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
}
.section-header {
  margin-bottom: 2rem;
  justify-content: space-between;
  width: auto;
}
.Magazine-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.Magazine-section {
  display: flex;
  align-items: center;
  justify-items: center;
  margin-left: 38px;
}
</style>
