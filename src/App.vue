<template>
<div id="app">
  <headerc></headerc>
  <router-view></router-view>
  <!-- <banners></banners> -->
  <!-- <store></store> -->
</div>
</template>

<script>
import headerc from './components/landingPage/header.vue'
import store from './components/landingPage/storeDisplayParent.vue'
import banners from './components/landingPage/banners.vue'
export default {
  components: {
    headerc,
    store,
    banners
  },
  
  
}
</script>

<style>
#app{
  overflow-x: hidden;
  font-family:  'Roboto Condensed', 'Open Sans', 'Helvetica Neue', sans-serif ,'Segoe UI'
}
</style>
