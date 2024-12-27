<template>
  <HeaderComponent></HeaderComponent>
  <router-view></router-view>
  <footer-component v-if="$route.name !== 'Home' && $route.name !== 'Registration'"></footer-component>
</template>

<script>
  import HeaderComponent from './components/header_component.vue';
  export default{
    components:{
      HeaderComponent
    }
  }
</script>
