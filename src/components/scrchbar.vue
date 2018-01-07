<template>
  <form class="search" action="" @submit.prevent="onSubmit">
    <div class="box">
      <div class="input">
        <img class="icon" src="http://7xiy7w.com1.z0.glb.clouddn.com/search%20%282%29.svg" alt="" />
        <input v-model="searchVal" id="text" placeholder="输入关键字搜索" />
      </div>
      <span class="cancel" @click="this.onSubmit">搜索</span>
      <span class="cancel" @click="this.cancel">取消</span>
    </div>
  </form>

</template>
<script>
  export default {
    name: 'searchbar',
    data () {
      return {
        msg: 'searchBar',
        searchVal: ''
      }
    },
    // props:[],
    methods: {
      cancel: function () {
        this.$router.push({path: '/'})
      },
      onSubmit: function () {
        console.log(this.searchVal)
        this.$emit('on-change', this.searchVal)
      }
    }
  }
</script>

<style lang="less">
  .search {
    height: 40px;
    margin-bottom: 20px;
  }
  .box {
    padding: 5px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background: #fff;
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 40px;
    z-index: 99;
    .icon {
      opacity: 0.5;
      width: 16px;
      margin: 0 5px;
    }
    .input {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      width: 100%;
      background: rgba(0,0,0,0.05);
      border: none;
      padding: 4px;
      border-radius: 5px;
      input {
        font-size: 14px;
        height: 100%;
        background: none;
        border-radius: 0;
        border: none;
        width: 100%;
      }
    }
    .cancel {
      width: 70px;
      height: 100%;
      line-height: 40px;
      padding-left: 20px;
      font-size: 14px;
      color: #999;
    }
  }

</style>
