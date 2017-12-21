<template>
  <div>
    <div class="gaussian">
      <span class="back" @click="back()">
        <span>返回</span>
      </span>
      <div class="book">
        <img class="cover" :src="detail.cover" alt="" />
        <div class="info">
          <h1>{{detail.title}}</h1>
          <p>{{detail.author}}</p>
          <p>{{detail.majorCate}} / {{detail.minorCate}}</p>
          <p class="meta">{{detail.wordCount > 10000 ? `${parseInt(detail.wordCount / 10000, 0)} 万` : detail.wordCount}}字、{{detail.latelyFollower}} 人在追</p>
          <p>{{detail.isSerial ? '连载中' : '已完结'}}</p>
        </div>
      </div>
      <div class="bg" :style="{
        background: `url(${detail.cover})`,
        animation: 'none',
        backgroundSize: '100% 100%',
        filter: `blur(50px)`}"></div>
    </div>
    <div class="body">
      <p class="desc">{{detail.longIntro && detail.longIntro.length > 40 ? `${detail.longIntro.substring(0, 40)}...` : detail.longIntro}}</p>
      <div class="tags">
        <span v-for="i in detail.tags" :key="i">
          {{i}}
        </span>
      </div>
      <p class="last">最新章节：{{detail.lastChapter}}</p>
      <a class="read" @click="readNow(detail._id)">立即阅读</a>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { SEARCH_GETBOOKDETAIL } from '../../store/search.js'
  import { READER_GETSOURCE } from '../../store/reader.js'
  export default {
    name: 'detail',
    data () {
      return {
        msg: 'msg'
      }
    },
    beforeMount: function () {
      console.log(SEARCH_GETBOOKDETAIL)
      this.getDeatil()
    },
    methods: {
      ...mapActions({SEARCH_GETBOOKDETAIL, READER_GETSOURCE}),
      getDeatil: function () {
        this.SEARCH_GETBOOKDETAIL(this.$route.params.id)
      },
      back: function () {
        this.$router.go(-1)
      },
      readNow: function (id) {
        this.READER_GETSOURCE(id)
        this.$router.push({path: `/reader/${id}`})
      }

    },
    computed: {
      ...mapState({detail: (state) => state.search.detail})
    }
  }
</script>

<style lang="less" scoped>
.gaussian {
  position: relative;
  overflow: hidden;
}
.bg {
  display: block;
  position: absolute;
  top:-25%;
  left: -25%;
  width: 150%;
  height: 150%;
  filter: blur(25px);
  // animation: run 25s ease-in-out;
  animation-iteration-count: infinite;
  background-repeat: repeat;
  background-size: 100% 100%;
  z-index: -1;
  background-position: center;
}

@keyframes run {
    0% {
      background-position: 50% 10%;
    }
    70% {
      filter: blur(50px);
      background-position: 50% 90%;
    }
    100% {
      background-position: 50% 10%;
    }
}
.back {
  color: #666;
  padding: 20px;
  padding-bottom: 0;
  display: block;
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: row;
  img {
    height: 15px;
  }
}

.body {
  padding: 20px;
  .desc {
    margin: 0;
    padding: 10px;
    background: rgba(0,0,0,0.03);
    border-radius: 3px;
    font-size: 12px;
    color: #666;
    position: relative;
    margin-bottom: 20px;
    &:after{
        bottom: 0;
        right: 0;
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        border: 10px red solid;
        border-color:rgba(0,0,0,0.05) #fff #fff  rgba(0,0,0,0.05);
    }
  }
  .last {
    font-size: 12px;
    color: #666;
    text-align: center;
  }
  .tags {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    span {
      background: rgba(0,0,0,0.03);
      margin-right: 8px;
      margin-bottom: 8px;
      padding: 1px 8px;
      font-size: 10px;
      color: #666;
      border-radius: 3px;
      display: inline-block;
    }
  }
}
.book {
  padding: 20px;
  padding-bottom: 0;
  overflow: hidden;
  .cover {
    float: left;
    height: 150px;
    display: block;
  }
  .info {
    float: left;
    display: block;
    padding: 0 20px;
    padding-bottom: 0;
    opacity: hidden;
    display: block;
    color: #666;
    h1 {
      margin: 0;
      font-size: 16px;
    }
    p {
      font-size: 14px;
      margin: 5px 0;
    }
  }
}
.read {
  width: 100%;
  display: block;
  background: #987;
  padding: 10px 0px;
  text-align: center;
  color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.5);
  margin-top: 40px;
}
</style>
