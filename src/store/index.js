// index.js      // 文件都会汇聚到这个地方来,也是创建store对象的地方,就像store的入口一样

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import mutations from './mutations.js'
const store = new Vuex.Store({
  show:false,
  mutations
})
export default store
