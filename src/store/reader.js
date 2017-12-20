import api from '../server/api.js'
import fetch from '../utils/fetch.js'

export const READER_GETSOURCE = 'READER_GETSOURCE'

export default {
  state: {
    currentSource: 1,   // 当前源下标：默认为1，跳过优质书源
    currentChapter: 0,  // 当前章节下标
    source: [],         // 源列表
    chapters: [],       // 章节列表
    chapter: {},        // 当前章节
    detail: {}         // 书籍详情
  },
  actions: {
    [READER_GETSOURCE] ({commit, state, rootState}, id) { // state：当前state，rootState：根state
      // const { id } = query;
      const { id: currentId, detail: { title } } = state
      console.log(state, rootState, 'reader state')
      if (currentId) {
        if (id !== currentId) {
          // const { reader, store: { [id]: book } } = yield select();
          console.log(`将《${title}》放回书架`)
          // if (book && book.detail && book.source) {
          //   console.log(`从书架取回《${book.detail.title}》`);
          //   return;
          // }
        } else {
          return
        }
      }
      let { search: { detail } } = rootState
      if (!detail._id) {
        console.log('详情不存在，前往获取')
        // detail = yield call(readerServices.getDetail, id);
      }
      fetch.get(api.getSource, {
        params: {
          book: id
        }
      })
      .then(res => {
        console.log(res)
        console.log(`从网络获取《${detail.title}》`)
        // commit(READER_GETSOURCE, res.data)
      })
      .catch(err => {
        console.log(err)
      })
      // const data = yield call(readerServices.getSource, id);
      // yield put({ type: 'reader/save', payload: { source: data, id, detail } });
      console.log(`阅读：${detail.title}`)
    }
  }
}
