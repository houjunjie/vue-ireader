import api from '../server/api.js'
import fetch from '../utils/fetch.js'
import { STORE_SAVE } from './store'

export const READER_GETSOURCE = 'READER_GETSOURCE'
export const READER_SAVE = 'READER_SAVE'
export const READER_GETCHAPTERLIST = 'READER_GETCHAPTERLIST'
export const READER_GETCHAPTER = 'READER_GETCHAPTER'
export const READER_GOTOCHAPTER = 'READER_GOTOCHAPTER'
export const READER_GETNEXTSOURCE = 'READER_GETNEXTSOURCE'
export const READER_RESTORE = 'READER_RESTORE'
export const READER_GETATOCSOURCE = 'READER_GETATOCSOURCE'
export const READER_CLEAR = 'READER_CLEAR'

export default {
  state: {
    currentSource: 1,   // 当前源下标：默认为1，跳过优质书源
    currentChapter: 0,  // 当前章节下标
    source: [],         // 源列表
    chapters: [],       // 章节列表
    chapter: {},        // 当前章节
    detail: {},         // 书籍详情
    atocSourceList: []  // 所有资源列表
  },
  mutations: {
    [READER_SAVE] (state, detail) {
      console.log(detail)
      Object.assign(state, detail)
    },
    [READER_CLEAR] (state) {
      state = {
        currentSource: 1,   // 当前源下标：默认为1，跳过优质书源
        currentChapter: 0,  // 当前章节下标
        source: [],         // 源列表
        chapters: [],       // 章节列表
        chapter: {},        // 当前章节
        detail: {},         // 书籍详情
        atocSourceList: []  // 所有资源列表
      }
      console.log(state, 'clear')
    }
  },
  actions: {
    async [READER_GETSOURCE] ({commit, state, rootState, dispatch}, id) { // state：当前state，rootState：根state
      // const { id } = query;
      const { detail: { title } } = state
      const currentId = state.id
      console.log(id, currentId, 'stateeee')
      if (currentId) {
        if (id !== currentId) {
          const { store } = rootState
          const book = store[id]
          console.log(store, book, 'store')
          commit(STORE_SAVE, {
            reader: {...state},
            key: currentId
          })
          commit(READER_CLEAR)
          console.log(`将《${title}》放回书架`)
          if (book && book.detail && book.source) {
            console.log(`从书架取回《${book.detail.title}》`)
            commit(READER_SAVE, book)
            return
          }
        } else {
          return
        }
      }
      let { search: { detail } } = rootState
      if (!detail._id) {
        console.log('详情不存在，前往获取')
        // detail = yield call(readerServices.getDetail, id);
        const d = await fetch({
          url: `${api.detail}/${id}`,
          methods: 'get'
        })
        detail = d.data
      }
      const data = await fetch({
        url: api.getSource,
        methods: 'get',
        data: {
          book: id
        }
      })
      if (data.statusCode === 200) {
        console.log(`从网络获取《${detail.title}》`)
        commit(READER_SAVE, {source: data.data, id, detail})
      }
      // .then(res => {
      //   console.log(res)
      //   console.log(`从网络获取《${detail.title}》`)
      //   commit(READER_SAVE, {source: res.data, id, detail})
      // })
      // .catch(err => {
      //   console.log(err)
      // })
      // const data = yield call(readerServices.getSource, id);
      // yield put({ type: 'reader/save', payload: { source: data, id, detail } });
      dispatch(READER_GETCHAPTERLIST)
      console.log(data.data, 'source')
      console.log(`阅读：${detail.title}`)
    },
    async [READER_GETATOCSOURCE] ({commit, state, rootState, dispatch}, id) {
      // const {source, currentSource} = state
      console.log(state, 'state')
      const data = await fetch({
        url: `${api.getAtocSource}`,
        methods: 'get',
        data: {
          book: id
        }
      })
      console.log(data, 'atoc')
      commit(READER_SAVE, {atocSourceList: data.data})
    },
    async [READER_GETCHAPTERLIST] ({commit, state, rootState, dispatch}) {
      const {source, currentSource} = state
      console.log(state, 'state')
      if (currentSource >= source.length) {
        console.log('什么鬼？')
        commit(READER_SAVE, {currentSource: 0})
        dispatch(READER_GETCHAPTERLIST)
        return
      }
      const {_id, name = '未知来源'} = source[currentSource]
      console.log(`书源：${name}`)
      const data = await fetch({
        url: `${api.getToc}/${_id}`,
        methods: 'get',
        data: {
          view: 'chapters'
        }
      })
      if (data.statusCode === 200) {
        const { chapters } = data.data
        commit(READER_SAVE, {chapters})
        dispatch(READER_GETCHAPTER)
      }
    },
    async [READER_GETCHAPTER] ({commit, state, rootState, dispatch}) {
      const { chapters, currentChapter, currentSource } = state
      const { link } = chapters[currentChapter || 0]
      // const { chapter } =
      const data = await fetch({
        url: `${api.getChapter}/${link}`,
        methods: 'get',
        k: '2124b73d7e2e1945',
        t: 1468223717
      })
      console.log(data, 333)
      if (data.statusCode === 200) {
        const { chapter } = data.data
        if (chapter) {
          console.log(`章节：${chapter.title}`)
          commit(READER_SAVE, { chapter })
          window.scrollTo(0, 0)
        } else {
          console.log(`章节获取失败`)
          dispatch(READER_GETNEXTSOURCE)
        }
      } else {
        console.log('error 这个源有问题,换下一个')
        commit(READER_SAVE, {currentSource: (currentSource + 1)})
        dispatch(READER_GETCHAPTERLIST)
      }
    },
    async [READER_GOTOCHAPTER] ({commit, state, rootState, dispatch}, payload) {
      console.log(payload, 'payload')
      const { chapters } = state
      const nextChapter = payload
      if (nextChapter > chapters.length) {
        console.log('没有下一章啦')
        return
      }
      if (nextChapter < 0) {
        console.log('没有上一章啦')
      }
      console.log(nextChapter)
      commit(READER_SAVE, {currentChapter: nextChapter})
      dispatch(READER_GETCHAPTER)
    },
    async [READER_GETNEXTSOURCE] ({commit, state, rootState, dispatch}) {
      const { source, currentSource } = state
      let nextSource = (currentSource || 1) + 1
      if (nextSource >= source.length) {
        console.log('没有可用书源，切换回优质书源')
        nextSource = 0
      }
      console.log(`正在尝试切换到书源：${source[nextSource] && source[nextSource].name}`)
      commit(READER_SAVE, { currentSource: nextSource })
      dispatch(READER_GETCHAPTERLIST)
    }
  }
}
