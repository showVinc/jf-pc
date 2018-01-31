import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      // redirect: '/build',
      component: Index
    },
    {
      path: '/build',
      name: 'Build',
      component: resolve=>require(['@/components/Build'],resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve=>require(['@/pages/Login/Login'],resolve)
    },
    //用户类
    {
      path: '/user',
      name: 'User',
      component: resolve=>require(['@/pages/User/Index'],resolve)
    },
  ]
})
