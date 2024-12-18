
<template>
    <div class="container">
      <span class="sectionTitle">{{ SectionTitle }}</span>
      <button @click="showMore">{{ GoBack }}</button>
    </div>
  </template>

<script>

export default{
  data() {
    return {
      isClicked: false
    };
  },
  props:{
    SectionTitle: String,
    targetPage: String,
    backPage: String
  },

  computed: {
    GoBack() {
      return this.$route.name === this.targetPage ? "Back" : "See More";
    },
  },
  methods: {
    showMore() {
      if (this.$route.name === this.targetPage) {
        this.$router.push({ name: this.backPage});
      } else {
        this.$router.push({ name: this.targetPage });
      }
    },
  },

}
</script>

<style scoped>
.container{
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin-inline: 5rem;
}

.sectionTitle{
  font-family: 'Inter';
  font-size: 30px;
  font-weight: bold;
}

button{
  font-family: 'Inter';
  font-weight: bold;
  font-size: 30px;
  color: black;
  background-color: transparent;
  border: none;
}

button:hover{
  color: black;
  cursor: pointer;
}

</style>
