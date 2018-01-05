import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home'
import Index from '@/page/index'
import Search from '@/page/search'
import Detail from '@/page/detail'
import Reader from '@/page/reader'
import Chapter from '@/page/chapters'
import AtocSource from '@/page/atocsource'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
        path: '/',
        component: Home
      }]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/reader/:id',
      name: 'Reader',
      component: Reader
    },
    {
      path: '/cps',
      name: 'Chapter',
      component: Chapter
    },
    {
      path: '/source',
      name: 'atocsource',
      component: AtocSource
    }
  ]
})
