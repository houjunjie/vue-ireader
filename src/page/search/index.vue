<template>
  <div>
    <searchbar @on-change="onChange"></searchbar>
    <div v-for="list in search.lists">
      <item :item="list"></item>
    </div>
  </div>
</template>
<script>
  import searchbar from '../../components/scrchbar.vue'
  import item from './item.vue'
  import api from '../../server/api.js'
  import fetch from '../../utils/fetch.js'
  import { mapActions, mapState } from 'vuex'
  import { SEARCH_SETBOOKLIST } from '../../store/search.js'
  export default {
    name: 'search',
    components: {
      searchbar,
      item
    },
    data () {
      return {
        msg: 'search'
      }
    },
    methods: {
      ...mapActions([SEARCH_SETBOOKLIST]),
      onChange: function (value) {
        const getData = async () => {
          const data = await fetch({
            url: api.search,
            methods: 'get',
            data: {
              query: value
            }
          })
          console.log(data, 'data')
          this.SEARCH_SETBOOKLIST(data.data.books)
        }
        getData()
        // fetch({
        //   url: api.search,
        //   methods: 'get',
        //   data: {
        //     query: value
        //   }
        // })
        // .then((response) => {
        //   console.log(response)
        //   this.SEARCH_SETBOOKLIST(response.books)
        // })
        // .catch(function (error) {
        //   console.log(error)
        // })
      }
    },
    computed: {
      ...mapState({ search: state => state.search })
    }
  }
</script>
