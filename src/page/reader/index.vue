<template>
  <div>
  <content-detail></content-detail>
  <!-- <head-detail></head-detail> -->
  <span @click="goToChapters()">章节列表</span>
  <span @click="prev()">上一章</span>
  <span @click="next()">下一章</span>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { READER_GETSOURCE, READER_GOTOCHAPTER } from '../../store/reader.js'
  import contentDetail from './contentDetail.vue'
  import headDetail from './headDetail.vue'
  export default {
    name: 'reader',
    data: function () {
      return {
        msg: 'reader1'
      }
    },
    components: {
      contentDetail,
      headDetail
    },
    mounted: function () {
      console.log(this.$route.params)
      this.READER_GETSOURCE(this.$route.params.id)
    },
    methods: {
      ...mapActions([READER_GETSOURCE, READER_GOTOCHAPTER]),
      next: function () {
        console.log(this.reader, '3333')
        this.READER_GOTOCHAPTER(this.reader.currentChapter + 1)
      },
      prev: function () {
        this.READER_GOTOCHAPTER(this.reader.currentChapter - 1)
      }
    },
    computed: {
      ...mapState({ reader: state => state.reader })
    }
  }
</script>

<style lang="less" scoped>

</style>
