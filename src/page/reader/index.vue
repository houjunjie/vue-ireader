<template>
  <div>
    <bar @next="next" @prev="prev" @goToChapters="goToChapters"></bar>
    <content-detail></content-detail>
    <!-- <head-detail></head-detail> -->
    <bar @next="next" @prev="prev" @goToChapters="goToChapters"></bar>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { READER_GETSOURCE, READER_GOTOCHAPTER } from '../../store/reader.js'
  import contentDetail from './contentDetail.vue'
  import headDetail from './headDetail.vue'
  import bar from './bar.vue'
  export default {
    name: 'reader',
    data: function () {
      return {
        msg: 'reader1'
      }
    },
    components: {
      contentDetail,
      headDetail,
      bar
    },
    mounted: function () {
      console.log(this.$route.params)
      this.READER_GETSOURCE(this.$route.params.id)
    },
    methods: {
      ...mapActions([READER_GETSOURCE, READER_GOTOCHAPTER]),
      next: function () {
        console.log(this.reader.currentChapter, '3333')
        this.READER_GOTOCHAPTER(this.reader.currentChapter + 1)
      },
      prev: function () {
        this.READER_GOTOCHAPTER(this.reader.currentChapter - 1)
      },
      goToChapters: function () {
        this.$router.push({path: '/cps'})
      }
    },
    computed: {
      ...mapState({ reader: state => state.reader })
    }
  }
</script>

<style lang="less" scoped>

</style>
