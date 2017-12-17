import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home'
import Index from '@/page/index'
import Search from '@/page/search'

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
    }
  ]
})
