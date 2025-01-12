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
    routeName: {
      type: String,
      required: false,
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
        // If already on the target page, go back to the previous route
        console.log("Navigating back to:", this.backPage);
        this.$router.go(-1); // Go back to previous page
      } else {
        // Navigate to the target page, passing 'category' as a parameter
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
