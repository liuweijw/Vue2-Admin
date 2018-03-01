import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.getters.token) {
    config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === -1) {
      message(res.msg, 'error')
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
      //     confirmButtonText: '重新登录',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('FedLogOut').then(() => {
      //       location.reload()// 为了重新实例化vue-router对象 避免bug
      //     })
      //   })
      // }
      return Promise.reject(res)
    }
    return res
  },
  error => {
    const res = error.response
    console.log(res.status)
    if (res.status === 403) {
      message(res.status + '： ' + res.data.msg, 'error')
    } else if (res.status === 400) {
      message(res.status + '： ' + res.data.error_description, 'error')
    } else if (res.status === 202) {
      this.$router.push({ path: '/' })
    } else if (res.status === 503) { // 服务异常
      message(res.status + '： ' + res.data, 'error')
    } else {
      message(res.status + '： ' + res.data.message, 'error')
    }
    return Promise.reject(error)
  })

export function message(text, type) {
  Message({
    message: text,
    type: type,
    duration: 5 * 1000
  })
}

export default service
