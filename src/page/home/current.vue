<template>
  <div class="books">
    <div class="book" v-for="(list, index) in getBookList">
        <div class="cover"
          :style="{
            // background: `url(${list.detail.cover})`,
            animation: 'none',
            backgroundSize: '100% 100%'
            }"/>
        <p>{{list.detail.title}}</p>
    </div>
  </div>
</template>
<script>
  import {mapState, mapGetters} from 'vuex'
  import { GETBOOKLIST } from '../../store/store.js'
  export default {
    name: 'current',
    data () {
      return {
        msg: 'current'
      }
    },
    computed: {
      ...mapState({reader: state => state.reader, store: state => state.store}),
      ...mapGetters([GETBOOKLIST]),
      getBookList: function () {
        let bookList = []
        console.log(this.store, 'this.store')
        for (let i = 0, lists = Object.keys(this.store); i < lists.length; i++) {
          console.log(this.store[lists[i]], 'state[lists[i]]')
          bookList.push(this.store[lists[i]])
        }
        return bookList
      }
    }
  }
</script>

<style lang="less" scoped>
  .books {
    display: flex;
    padding: 20px;
    padding-bottom: 0;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .book{
    height: 160px;
    width: 90px;
    display: block;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    .cover{
      height: 120px;
      width: 90px;
      background-size: 100% 100%;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }
    p {
      text-align: center;
      color: rgba(0, 0, 0, 0.5);
      margin-top: 6px;
      font-weight: 100px;
      font-size: 12px;
      max-width: 90px;
      text-overflow:ellipsis;
      overflow:hidden;
      white-space:nowrap;
    }
  }
</style>
