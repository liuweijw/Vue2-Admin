import Vue from 'vue'
import axios from './util/request'
import VueAxios from 'vue-axios'
import App from './App'
import './permission' // 权限
import './errorLog' // 错误日志
import router from './router/router'
import store from './store'
import './icons' // icon
import { loadStyle } from './util/util'
import * as urls from '@/config/env'
import { iconfontUrl, iconfontVersion } from '@/config/env'
import * as filters from './filters' // 全局filter
import './styles/common.scss'
// eslint-disable-next-line
import ELEMENT from 'element-ui'
// eslint-disable-next-line
import AVUE from '@/packages/index.js'

Vue.use(VueAxios, axios)

Object.keys(urls).forEach(key => {
  Vue.prototype[key] = urls[key]
})

Vue.use(ELEMENT, {
  size: 'medium' // set element-ui default size
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

iconfontVersion.forEach(ele => {
  loadStyle(iconfontUrl.replace('$key', ele))
})

Vue.config.productionTip = false

export function createApp() {
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
