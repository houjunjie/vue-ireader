<template>
  <div>
    {{msg}}
    <searchbar @on-change="onChange"></searchbar>
  </div>
</template>
<script>
  import searchbar from '../../components/scrchbar.vue'
  import api from '../../server/api.js'
  import fetch from '../../utils/fetch.js'
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
        // server.search(value)
        // fetch.get(api.search, {'query': value}, (data, err) => {
        //   console.log(data)
        // })
        fetch.get(api.search, {
          params: {
            query: value
          }
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
        console.log(value, 'search')
      }
    }
  }
</script>
