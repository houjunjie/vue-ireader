// import fetch from '../utils/fetch.js'

export default {
  search: '/api/book/fuzzy-search?start=0&limit=10',
  detail: '/api/book'
}
// 获取书源
// export function getSource (id) {
//   return fetch(`/api/toc?view=summary&book=${id}`)
// }

// // 获取章节列表
// export function getChapterList (id) {
//   return fetch(`/api/toc/${id}?view=chapters`)
// }

// // 获取章节内容
// export function getChapter (link) {
//   return fetch(`/chapter/${link}?k=2124b73d7e2e1945&t=1468223717`)
// }

// // 搜索书籍
// export function search (query) {
//   return fetch(`/api/book/fuzzy-search?query=${query}&start=0&limit=10`)
// }

// export function getDetail (id) {
//   return fetch(`/api/book/${id}`)
// }
