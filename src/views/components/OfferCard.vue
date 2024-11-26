<template>
    <div class="offer-card">
      <img :src="image" :alt="title" class="offer-image" />
      <div class="offer-content">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .offer-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 437px;
    height: 439px;
    margin: 62px;
  }
  .offer-image {
    width: 100%;
    height: 100%;
    
   
  }
  .offer-content {
    margin-top: 8px;
    
  }
 
  </style>
  