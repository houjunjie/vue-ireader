<template>
  <div>
    <h1 class="title">{{msg}}</h1>
    <ul class="list">
      <li v-for="(list, index) in reader.source" :key="index">
        <a href="javascript:;" @click="goCps(index)">
          <p class="name">
            来源网站：{{list.name}}
          </p>
          <p class="updated">
            更新时间：
            <span>{{list.updated}}</span>
          </p>
          <p class="lastChapter">
            最新章节：
            <span>{{list.lastChapter}}</span>
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { READER_GETATOCSOURCE, READER_GETCHAPTERLIST, READER_SAVE } from '../../store/reader'
  export default {
    name: 'atocsource',
    data: function () {
      return {
        msg: '选择书源'
      }
    },
    mounted: function () {
      console.log(this.$route.params)
      // this.READER_GETATOCSOURCE(this.$route.params.id)
    },
    methods: {
      ...mapActions([READER_GETATOCSOURCE, READER_GETCHAPTERLIST, READER_SAVE]),
      goCps: function (id) {
        // this.$router.push({path: `/detail/${id}`})
        this.READER_SAVE({index})
        // this.READER_GETCHAPTERLIST(id)
        this.$router.push({path: '/cps'})
      }
    },
    computed: {
      ...mapState({reader: state => state.reader})
    }
  }
</script>

<style lang="less" scoped>
.title{
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 20px;
  text-align: center;
}
.list {
  margin: 0;
  padding: 0;
  // margin-top: 60px;
  margin-bottom: 80px;
  li {
    list-style: none;
    padding: 8px;
    color: rgba(0, 0, 0, 0.3);
    // border-bottom: 1px rgba(0, 0, 0, 0.1) dashed;
    a {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      display: block;
      padding: 10px;
      // background-color: rgba(21, 22, 28, 0.2);
      // border-radius: .05rem;
      // color: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: rgba(0, 0, 0, 0.3);
      text-decoration: none;
      span{
        color: #fd5353;
      }
    }
    .name{
      font-size: 18px;
    }
  }
}
</style>
