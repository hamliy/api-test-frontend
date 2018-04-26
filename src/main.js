import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index.js'
// 引用工具文件
import utils from './utils/index.js'

// 将API方法绑定到全局
Vue.prototype.$api = api

// 将工具方法绑定到全局
Vue.prototype.$utils = utils

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
