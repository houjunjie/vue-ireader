<template>
  <div>
  {{msg}}
  <content-detail></content-detail>
  <head-detail></head-detail>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { READER_GETSOURCE } from '../../store/reader.js'
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
      ...mapActions([READER_GETSOURCE])
    }
  }
</script>

<style lang="less" scoped>

</style>
