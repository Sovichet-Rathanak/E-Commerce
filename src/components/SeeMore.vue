
<template>
    <div class="container">
      <span class="sectionTitle">{{ SectionTitle }}</span>
      <button class="link" @click="goToBrandList"> See More </button>
    </div>
  </template>

<script>

export default{
  props:{
    SectionTitle:{
      type: String,
      required: true
    }, 
    PageTitle:{
      type: String,
      required: true
    },
    brandType:{
      type: String,
      required: true
    }
  },
  methods:{
    goToBrandList() {
      this.$router.push(`/${this.PageTitle}/${this.brandType}`);
      console.log(this.brandType)
    }
  }
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

.link{
  text-decoration: none;
  font-family: 'Inter';
  font-weight: bold;
  font-size: 30px;
  color: black;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
