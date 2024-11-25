<template>
  <div class="header">
    <router-link to="/" style="text-decoration: none;"><h1>Kravan</h1></router-link>
    <div class="header_nav" v-if="$route.name !== 'Home'">
      <button>Cart</button>
      <button>Sign In</button>
      <button>Search</button>
    </div>
  </div>
  <nav-filter></nav-filter>
  <router-view></router-view>
</template>

<script>

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d0907;
  color: white;
  height: 7rem;
  z-index: 1;

}

.header h1{
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
