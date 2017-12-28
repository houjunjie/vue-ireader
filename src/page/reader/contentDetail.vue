<template>
  <div class="content">
  {{chapter.body}}
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
      ...mapState({ chapter: state => state.reader.chapter })
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
