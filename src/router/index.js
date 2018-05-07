import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'

Vue.use(Router)

export default new Router({
  mode:'history',
  base: __dirname,
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
    //登录
    {
      path: '/login',
      name: 'Login',
      component: resolve=>require(['@/pages/Login/Login'],resolve)
    },
    //评估
    {
      path: '/login/assessment',
      name: 'LoginAssessment',
      component: resolve=>require(['@/pages/Login/Assessment'],resolve)
    },
    //用户类
    {
      path: '/user',
      name: 'User',
      component: resolve=>require(['@/pages/User/Index'],resolve)
    },
    //资讯
    {
      path: '/news',
      name: 'News',
      component: resolve=>require(['@/pages/News/Index'],resolve)
    },
    {
      path: '/news/detail',
      name: 'NewsDetail',
      component: resolve=>require(['@/pages/News/Detail'],resolve)
    },
    //生活
    {
      path: '/life',
      name: 'Life',
      component: resolve=>require(['@/pages/Life/Index'],resolve)
    },{
      path: '/life/theme',
      name: 'LifeTheme',
      component: resolve=>require(['@/pages/Life/Theme'],resolve)
    },
    //研究所
    {
      path: '/research',
      name: 'Research',
      component: resolve=>require(['@/pages/Research/Index'],resolve)
    },
    {
      path: '*',
      redirect: '/' // 输入其他不存在的地址自动跳回首页
    }
  ]
})
