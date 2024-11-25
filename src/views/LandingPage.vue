<template>
  <div class="container">
    <div class="intro_container">
      <span class="head">The Platform for Personal Style</span>
      <span class="body"
        >Buy and discover authentic pieces <br />from the world’s top
      </span>
    </div>
    <div class="button_container">
      <RouterLink to="/Sneakers"><button>Discover Sneaker</button></RouterLink>
      <RouterLink to="/Collectibles"
        ><button>Discover Collectibles</button></RouterLink
      >
      <RouterLink to="/Womenswear"
        ><button>Discover Fashion</button></RouterLink
      >
      <RouterLink to="/Accessories"
        ><button>Discover Accessories</button></RouterLink
      >
    </div>
    <video :src="src" autoplay muted loop>
      <source :src="src" :type="type" class="vid" />
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "./src/assets/videos/SneakerLanding.mp4",
      type: "video/mp4",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

.container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.container {
  position: relative;
  width: 100%;
  height: 100vh;
}

video {
  z-index: -1;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.vid {
  padding: 0;
  margin: 0;
  width: auto;
  height: auto;
}

.intro_container {
  text-align: center;
  color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  text-shadow: -0.25px -0.25px 0 #000, 0.25px -0.25px 0 #000,
    -0.25px 0.25px 0 #000, 0.25px 0.25px 0 #000;
}

.intro_container .head {
  font-family: "Inter";
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 15px;
}

.intro_container .body {
  font-family: "Inter";
  font-size: 40px;
  font-weight: 600px;
}

.button_container {
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.button_container button {
  border: 3px solid white;
  background-color: transparent;
  margin: 1.5rem;
  padding: 1rem;
  width: 263px;
  font-family: "Inter";
  color: white;
  font-size: 20px;
  font-weight: 600px;
  text-shadow: -0.25px -0.25px 0 #000, 0.25px -0.25px 0 #000,
    -0.25px 0.25px 0 #000, 0.25px 0.25px 0 #000;
}

.button_container button:hover {
  cursor: pointer;
}
</style>
