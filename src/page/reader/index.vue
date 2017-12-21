<template>
  <div>
  {{msg}}
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { READER_GETSOURCE } from '../../store/reader.js'
  export default {
    name: 'reader',
    data: function () {
      return {
        msg: 'reader'
      }
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
