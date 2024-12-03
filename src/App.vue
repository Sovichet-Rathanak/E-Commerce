<template>
  <div class="header">
    <div class="title_section" :style="titleStyle">
      <router-link to="/" style="text-decoration: none;"><h1>Kravan</h1></router-link>
      <div class="header_nav" v-if="$route.name !== 'Home'">
        <button>Cart</button>
        <button>Sign In</button>
        <search-btn></search-btn>
      </div>
    </div>
    <nav-filter :style="navStyle"></nav-filter>
  </div>
  <router-view class="router"></router-view>
  <footer-component v-if="$route.name !== 'Home'"></footer-component>
</template>

<script>
  export default{
    data(){
      return{
        titleStyle: {
          height: "7rem",
          transition: "height 1s ease",
        },
        navStyle:{
          display: "block",
        }
      }
    },
    created(){
      window.addEventListener('scroll', this.shrinkTitle);
    },
    unmounted(){
      window.addEventListener('scroll', this.shrinkTitle);
    },
    methods:{
      shrinkTitle(){
        if (window.scrollY > 700) {
          this.titleStyle.height = "5rem";
          this.navStyle.display = "none";
        } else {
          this.titleStyle.height = "7rem";
          this.navStyle.display = "block";
        }
      }
    }  
  }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

.header{
  position: sticky;
  top: 0;
  z-index: 99;
}

.title_section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d0907;
  color: white;
  height: 7rem;
  width: 100%;
}

.title_section h1{
  color: white;
  margin: 0;
  font-family: "Inter";
  font-weight: bold;
  letter-spacing: 4px;
  font-size: 40px;
}

.header_nav {
  display: flex;
  gap: 2.5rem;
  position: absolute;
  right: 3rem;
}

.header_nav button:hover {
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  color: white;
  cursor: pointer;
}

.header_nav button {
  background-color: transparent;
  color: #949494;
  border: none;
  font-family: "Inter";
  font-weight: bold;
}
</style>