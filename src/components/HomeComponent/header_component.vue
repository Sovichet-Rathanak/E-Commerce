<template>
  <div
    class="header"
    v-if="$route.name !== 'Registration' && $route.name !== 'Account'"
  >
    <div class="title_section" :style="titleStyle">
      <router-link to="/" style="text-decoration: none;">
        <h1>Kravan</h1>
      </router-link>
      <div class="header_nav" v-if="$route.name !== 'Home'">
        <button @click="goToCart">Cart</button>
        <search-btn></search-btn>

        <div class="user" v-if="userStore.isLogIn">
          <img @click="gotoAccount" :src="userStore.user.profilePic" alt="User Profile" class="user-pfp"/>
        </div>
        <router-link to="/Registration" v-else>
          <button>Sign In</button>
        </router-link>
      </div>
    </div>
    <nav-filter :style="navStyle"></nav-filter>
  </div>
</template>

<script>
import { useUserStore } from "@/store/user";

export default {
  data() {
    return {
      titleStyle: {
        height: "7rem",
        transition: "height 1s ease",
      },
      navStyle: {
        display: "block",
      },
    };
  },
  setup() {
    const userStore = useUserStore();
    userStore.loadUserFromLocalStorage(); 

    return {
      userStore,
    };
  },
  created() {
    window.addEventListener("scroll", this.shrinkTitle);
  },
  unmounted() {
    window.removeEventListener("scroll", this.shrinkTitle);
  },
  methods: {
    shrinkTitle() {
      if (window.scrollY > 300) {
        this.titleStyle.height = "5rem";
        this.navStyle.display = "none";
      } else {
        this.titleStyle.height = "7rem";
        this.navStyle.display = "block";
      }
    },
    goToCart() {
      this.$router.push("/cart");
    },
    logout() {
      this.userStore.logout(); 
    },
    gotoAccount(){
      this.$router.push("/Account")
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
  .user-pfp {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
    cursor: pointer;
  }

  .user-pfp:hover {
    width: 53px;
    height: 53px;
    border: 2px solid white;
    transition: 100ms ease-in;
  }
  
  .user{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .username{
    font-family: "Inter";
    font-weight: bold;
    font-size: 18px;
  }
    
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
    font-size: 18px;
  }
</style>