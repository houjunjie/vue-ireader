<template>
  <div class="content">
  <!-- {{chapter.body}} -->
  <p v-for="(text, index) in formateData" :key="index">{{text}}</p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'contentDetail',
    data: function () {
      return {
        msg: 'content'
      }
    },
    computed: {
      ...mapState({ chapter: state => state.reader.chapter }),
      formateData: function () {
        if (this.chapter.body) {
          // console.log(this.chapter.body.indexOf('\n'), 'chapter')
          let data = this.chapter.cpContent.split('\n')
          // console.log(this.chapter, data, 'chapter')
          return data
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.content {
  padding: 5px 1px;
  p {
    padding: 0 0.5em;
    text-indent: 2em;
    word-wrap: break-word;
    line-height: 1.75;
  }
}
</style>
