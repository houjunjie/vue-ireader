<template>
  <div class='item' @click="goDetail(item._id)">
    <!-- <img class="cover" :src="item.cover" alt="" /> -->
    <h5>{{item.title}}</h5>
    <p class="author">{{item.author}}</p>
    <p class="meta" v-if="item.wordCount > 1000">{{parseInt(item.wordCount / 10000, 0)}}万字、{{item.latelyFollower}} 人在追</p>
    <p class="meta" v-if="item.wordCount <= 1000">{{item.wordCount}}万字、{{item.latelyFollower}} 人在追</p>
    <p v-if="item.shortIntro.length > 40">{{item.shortIntro.substring(0, 40)}}...</p>
    <p v-if="item.shortIntro.length <= 40">{{item.shortIntro}}</p>
  </div>
</template>

<script>
  export default {
    name: 'item',
    props: ['item'],
    methods: {
      goDetail: function (id) {
        console.log(id)
        this.$router.push({path: `detail/${id}`})
      }
    }
  }
</script>

<style lang="less" scoped>
  .item {
    margin: 12px 12px;
    height: 104px;
    position: relative;
    padding-left: 90px;
    border-bottom: 1px rgba(0, 0, 0, 0.1) dashed;
    padding-bottom: 12px;
    color: #333;
    p{
      font-size: 12px;
      margin: 2px 0;
    }
    .author {
      font-weight: 500;
    }
    .meta {
    }
  }
  .cover {
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
</style>
