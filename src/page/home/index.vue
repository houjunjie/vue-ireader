<template>
  <div>
    <h1>简(残缺)版小说阅读</h1>
    <current></current>
  </div>
</template>

<script>
  import current from './current.vue'
  export default {
    name: 'home',
    components: {
      current
    },
    data () {
      return {
        data: 'ireader home'
      }
    }
  }
</script>

<style lang="less" scoped>
  h1{
    padding:20px 0;
    font-size: 20px;
    text-align: center;
  }
</style>
