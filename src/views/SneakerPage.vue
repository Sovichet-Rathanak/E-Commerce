<template>
<div> 
  <SeemoreSection @see-more="handleSeeMore" />
  
</div>
</template> 

<script>

import NewAndNoteworthys from "./components/NewAndNoteworthys.vue";

export default {

  components: {
    SeemoreSection: NewAndNoteworthys,

  },

  props: {
        
        },
  methods: {
    handleSeeMore() {
      // Handle the click event here
      console.log('See More button clicked in NewAndNoteworthys.vue');
      // You can perform actions to fetch or display more content here
    }
  }

};
</script>

<style scoped>

.SeeMore_btn button {
  background-color: transparent;
  font-size: 20px;
  color: black;
  border: none;
  font-family: "Inter";
  font-weight: bold;
}
h2 {
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: "Inter";
}


</style>