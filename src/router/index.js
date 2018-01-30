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
    {
      path: '/login/modify',
      name: 'LoginModify',
      component: resolve=>require(['@/pages/Login/Modify'],resolve)
    },
    {
      path: '/login/back',
      name: 'LoginBack',
      component: resolve=>require(['@/pages/Login/Back'],resolve)
    },
    {
      path: '/login/password',
      name: 'LoginPassword',
      component: resolve=>require(['@/pages/Login/Password'],resolve)
    },
    {
      path: '/login/register',
      name: 'LoginRegister',
      component: resolve=>require(['@/pages/Login/Register'],resolve)
    },
    {
      path: '/login/success',
      name: 'LoginSuccess',
      component: resolve=>require(['@/pages/Login/Success'],resolve)
    },
    //用户类
    {
      path: '/user',
      name: 'User',
      component: resolve=>require(['@/pages/User/Index'],resolve)
    },
    {
      path: '/user/password',
      name: 'UserPassword',
      component: resolve=>require(['@/pages/User/Password'],resolve)
    },
    {
      path: '/user/identify',
      name: 'UserIdentify',
      component: resolve=>require(['@/pages/User/Identify'],resolve)
    },
  ]
})
