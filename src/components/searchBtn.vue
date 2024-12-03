<template>
  <button v-if="!isClicked" @click="showSearchInput">Search</button>
  <div class="search_input" v-if="isClicked">
    <iconify-icon icon="lucide:search" width="1.3rem" height="1.3rem" style="color: grey;" />
    <input type="search" required placeholder="Search for brand...">
  </div>
</template>

<script>
  export default{
    data(){
      return{
        isClicked: false,
      }
    },
    methods:{
      showSearchInput(){
        this.isClicked = true;
      }
    }
  }
</script>

<style>
  button{
    background-color: transparent;
    border: none;
    font-family: 'Inter';
    font-weight: bold;
    font-size: 18px;
    color: grey;
  }

  button:hover{
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    color: white;
    cursor: pointer;
  }

  input{
    border: none;
    font-family: 'Inter';
    font-weight: bold;
    color: white;
    border-bottom: 2px solid grey;
    width: fit-content;
    background-color: #0d0907;
    margin-left: 10px;
  }

  input:focus{
    font-family: 'Inter';
    transition: border-bottom-color 0.3s ease-in-out;
    outline: none;
    border-bottom: 2px solid grey;
    background-color: #0d0907;
  }

  input::placeholder{
    font-size: 18px;
  }

  .search_input{
    display: flex;
  }

  i-con{
    font-weight: bold;
    color: green;
  }
</style>
