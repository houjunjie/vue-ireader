<template>
  <div class="bar">
    <a href="javascript:;" @click="prev()">上一章</a>
    <a href="javascript:;" @click="goToChapters()">章节列表</a>
    <a href="javascript:;" @click="backSearch()">返回搜索</a>
    <a href="javascript:;" @click="next()">下一章</a>
  </div>
</template>

<script>
  export default {
    name: 'bar',
    methods: {
      next: function () {
        this.$emit('next')
      },
      prev: function () {
        this.$emit('prev')
      },
      goToChapters: function () {
        this.$emit('goToChapters')
      },
      backSearch: function () {
        this.$router.push({path: '/search'})
      }
    }
  }
</script>

<style lang="less" scoped>
  .bar{
    padding:10px 0;
    display: flex;
    a{
      flex:1;
      text-align:center;
    }
  }
</style>
