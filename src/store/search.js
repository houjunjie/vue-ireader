// import Vue from 'vue'
import api from '../server/api.js'
import fetch from '../utils/fetch.js'

export const SEARCH_SETBOOKLIST = 'SEARCH_SETBOOKLIST'
export const SEARCH_SETBOOKDETAIL = 'SEARCH_SETBOOKDETAIL'
export const SEARCH_GETBOOKDETAIL = 'SEARCH_GETBOOKDETAIL'

export default {
  state: {
    lists: [], // 列表
    detail: {} // 书籍详情
  },
  mutations: {
    [SEARCH_SETBOOKLIST] (state, lists) {
      Object.assign(state, {lists: lists})
    },
    [SEARCH_SETBOOKDETAIL] (state, detail) {
      Object.assign(state, {detail: detail})
    }
  },
  actions: {
    [SEARCH_SETBOOKLIST] ({ commit }, lists) {
      commit(SEARCH_SETBOOKLIST, lists)
    },
    async [SEARCH_GETBOOKDETAIL] ({commit}, id) {
      const data = await fetch({
        url: `${api.detail}/${id}`,
        methods: 'get'
      })
      commit(SEARCH_SETBOOKDETAIL, data)
      // if (data.statusCode === 200) {
      //   console.log(data)

      // }
      // .then(res => {
      //   console.log(res)
      //   commit(SEARCH_SETBOOKDETAIL, res.data)
      // })
      // .catch(err => {
      //   console.log(err)
      // })
    }
  }
}
