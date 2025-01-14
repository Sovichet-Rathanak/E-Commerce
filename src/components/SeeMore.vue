<template>
  <div class="container">
    <span class="sectionTitle">{{ SectionTitle }}</span>
    <button @click="showMore">{{ GoBack }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
    };
  },
  props: {
    SectionTitle: {
      type: String,
    },
    targetPage: {
      type: String,
    },
    backPage: {
      type: String,
    },
  },
  computed: {
    GoBack() {
      return this.$route.name === this.targetPage ? "Back" : "See More";
    },
  },
  methods: {
    showMore() {
      if (this.$route.name === this.targetPage) {
        console.log("Navigating back to:", this.backPage);
        this.$router.go(-1);
      } else {
        console.log(
          `Navigating to targetPage: ${
            this.targetPage
          }, category: ${this.backPage.toLowerCase()}`
        );
        this.$router.push({
          name: this.targetPage,
          params: { category: this.backPage.toLowerCase() },
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 5rem;
}

.sectionTitle {
  font-family: "Inter";
  font-size: 30px;
  font-weight: bold;
}

button {
  font-family: "Inter";
  font-weight: bold;
  font-size: 30px;
  color: black;
  background-color: transparent;
  border: none;
}

button:hover {
  color: black;
  cursor: pointer;
}
</style>
