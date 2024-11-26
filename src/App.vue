<template>
  <div>
  <div class="header">
    <h1>Kravan</h1>
    <div class="header_nav" v-if="$route.name !== 'Home'">
      <button>Cart</button>
      <button>Sign In</button>
      <button>Search</button>
    </div>
  </div>
  <nav class="nav_container" v-if="$route.name !== 'Home'">
    <button>Sneakers</button>
    <button>Accessories</button>
    <button>Menswear</button>
    <button>Womenswear</button>
    <button>Collectibles</button>
  </nav>
  <router-view></router-view>
</div>
</template>

<script>

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  height: 7rem;
  z-index: 1;
}

.header h1 {
  color: white;
  margin: 0;
  font-family: "Inter";
  font-weight: bold;
  letter-spacing: 4px;
  font-size: 40px;
}

.header_nav {
  display: flex;
  gap: 3rem;
  position: absolute;
  right: 3rem;
}

.header_nav button {
  background-color: transparent;
  color: #949494;
  border: none;
  font-family: "Inter";
  font-weight: bold;
}

.nav_container{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 3.6rem;
  border-top: 1.5px solid white;
  gap: 5rem;
}

.nav_container button{
  background-color: transparent;
  font-size: 20px;
  color: #949494;
  border: none;
  font-family: "Inter";
  font-weight: bold;
}

.nav_container button:hover{
  color: white;
  cursor: pointer;
}
</style>
