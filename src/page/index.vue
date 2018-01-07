<template>
  <div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer_nav">
      <router-link to="/">Home</router-link>
      <router-link to="/search">Search</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style lang="less">
  .footer_nav{
    padding: 10px 0;
    display: flex;
    a{
      flex:1;
      text-align:center;
    }
  }
</style>
