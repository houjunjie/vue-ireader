// import Vue from 'vue'

export const SEARCH_SETBOOKLIST = 'SEARCH_SETBOOKLIST'
export const SEARCH_SETBOOKDETAIL = 'SEARCH_SETBOOKDETAIL'

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
      Object.assign(state, detail)
    }
  },
  actions: {
    [SEARCH_SETBOOKLIST] ({ commit }, lists) {
      commit(SEARCH_SETBOOKLIST, lists)
    },
    [SEARCH_SETBOOKDETAIL] ({commit}, detail) {
      commit(SEARCH_SETBOOKDETAIL, detail)
    }
  }
}
