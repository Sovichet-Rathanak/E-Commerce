<template>
<div> 
  <SeemoreSection @see-more="handleSeeMore" />
  
</div>
</template> 

<script>

import SeeMore from "@/components/SeeMore.vue";

export default {

  components: {
    SeemoreSection: SeeMore,

  },

  props: {
        
        },
  methods: {
    handleSeeMore() {
      // Handle the click event here
      console.log('See More button clicked in SeeMore.vue');
      // You can perform actions to fetch or display more content here
    }
  }

};
</script>

<style scoped>

</style>