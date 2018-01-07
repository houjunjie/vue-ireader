<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // margin-top: 60px;
  max-width: 450px;
  margin: 0 auto;
  background: #fafbfc;
  position: relative;
}
a{
  text-decoration:none;
}
*{
  padding: 0;
  margin: 0;
}
</style>
