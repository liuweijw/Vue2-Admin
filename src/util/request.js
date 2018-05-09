import axios from 'axios'
import store from '../store'
import { getToken } from '@/util/auth'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
// 超时时间
axios.defaults.timeout = 10000
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true
NProgress.configure({ showSpinner: false })// NProgress Configuration

// request interceptor
axios.interceptors.request.use(config => {
  NProgress.start() // start progress bar
  if (store.getters.token) {
    config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  console.log('err' + error)// for debug
  return Promise.reject(error)
})

// respone interceptor
axios.interceptors.response.use(response => {
  NProgress.done()
  const res = response.data
  if (res.code === -1) {
    message(res.msg, 'error')
    return Promise.reject(res)
  }
  return res
}, error => {
  NProgress.done()
  const res = error.response
  if (res.status) {
    console.log(res.status)
    if (res.status === 401) {
      store.dispatch('FedLogOut').then(() => {
        location.reload()
      })
    } else if (res.status === 403) {
      message(res.status + '： ' + res.data.msg, 'error')
    } else if (res.status === 400) {
      message(res.status + '： ' + res.data.error_description, 'error')
    } else if (res.status === 202) {
      this.$router.push({
        path: '/'
      })
    } else if (res.status === 503) { // 服务异常
      message(res.status + '： ' + res.data, 'error')
    } else {
      message(res.status + '： ' + res.data.message, 'error')
    }
  }
  return Promise.reject(new Error(res.data.message))
})

export function message(text, type) {
  Message({
    message: text,
    type: type,
    duration: 5 * 1000
  })
}

export default axios
