export const STORE_SAVE = 'STORE_SAVE'
export const GETBOOKLIST = 'GETBOOKLIST'

let historyList = {}

export default {
  state: historyList,
  getters: {
    [GETBOOKLIST] (state) {
      let bookList = []
      console.log(state, 222)
      for (let i = 0, lists = Object.keys(state); i < lists.length; i++) {
        console.log(state[lists[i]], 'state[lists[i]]')
        bookList.push(state[lists[i]])
      }
      return bookList
    }
  },
  mutations: {
    [STORE_SAVE] (state, detail) {
      if (detail.key) {
        Object.assign(state, {[detail.key]: detail.reader})
      }
    }
  }
}
