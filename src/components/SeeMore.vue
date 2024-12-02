
<template>
    <div class="container">
      <span class="sectionTitle">{{ SectionTitle }}</span>
      <button @click="showMore">{{ isClicked? "Go Back" : "See More" }}</button>
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
    SectionTitle: String
  },

  methods: {
    showMore() {
      this.isClicked = !this.isClicked
      console.log(this.isClicked)
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
  font-size: 30px;
  color: black;
}

button:hover{
  color: black;
}

</style>