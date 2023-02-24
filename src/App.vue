<template>
  <div class="app">
    <Banner></Banner>
    <Home></Home>
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
import Home from './views/Home.vue'
export default {
  components:{
    Banner,
    Home
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none; 
  text-decoration: none;
}

body {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>