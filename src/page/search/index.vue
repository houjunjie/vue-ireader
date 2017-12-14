<template>
  <div>
    {{msg}}
    <searchbar @on-change="onChange"></searchbar>
  </div>
</template>
<script>
  import searchbar from '../../components/scrchbar.vue'
  export default {
    name: 'search',
    components: {
      searchbar
    },
    data () {
      return {
        msg: 'search'
      }
    },
    methods: {
      onChange: function (value) {
        console.log(value, 'search')
      }
    }
  }
</script>
