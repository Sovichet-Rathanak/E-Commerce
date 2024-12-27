<template>
  <HeaderComponent></HeaderComponent>
  <router-view></router-view>
  <FooterComponent v-if="$route.name !== 'Home' && $route.name !== 'Registration'"></FooterComponent>
</template>

<script>
  import HeaderComponent from './components/header_component.vue';
  import FooterComponent from './components/footer_compo.vue'
  export default{
    components:{
      HeaderComponent,
      FooterComponent
    }
  }
</script>
