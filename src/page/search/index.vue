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
        fetch.get(api.search, {
          params: {
            query: value
          }
        })
        .then((response) => {
          this.SEARCH_SETBOOKLIST(response.data.books)
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    },
    computed: {
      ...mapState({ search: state => state.search })
    }
  }
</script>
