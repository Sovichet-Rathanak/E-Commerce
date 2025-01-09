<template>
  <div class="AriticlePage">
    <div class="section-header">
      <SeeMore
        SectionTitle="Articles"
        targetPage="ArticlePage"
        :backPage="category"
      />
    </div>
    <div class="article-wrap">
      <ArticleCard
        v-for="(image, index) in currentArticle.article_images"
        :key="index"
        :article_image="image"
        :article_title="currentArticle.article_titles[index]"
        :cardSize="dynamicSize"
        class="article-section"
      />
    </div>
  </div>
</template>

<script>
import SeeMore from "@/components/SeeMore.vue";
import ArticleCard from "@/components/ArticleCardComponent.vue";
import { useArticleStore } from "@/store/article";

export default {
  components: {
    SeeMore,
    ArticleCard,
  },

  props: {
    category: {
      type: String,
      required: true,
    },
  },

  computed: {
    currentArticle() {
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
.AriticlePage {
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
.article-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.article-section {
  display: flex;
  align-items: center;
  justify-items: center;
  margin-left: 38px;
}
</style>
