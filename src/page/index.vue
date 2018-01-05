<template>
  <div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer_nav">
      <router-link to="/">Home</router-link>
      <router-link to="/search">Serrch</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style lang="less">

</style>
