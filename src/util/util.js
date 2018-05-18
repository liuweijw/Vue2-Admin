import { validatenull } from './validate'

/**
 * 获取字典
 */
export const setDic = (dicData, DIC) => {
  return (typeof (dicData) === 'string') ? DIC : dicData
}
/**
 * 设置px
 */
export const setPx = (val, defval) => {
  if (validatenull(val)) {
    val = defval
  }
  val = val + ''
  if (val.indexOf('%') === -1) {
    val = val + 'px'
  }
  return val
}
/**
 * 动态获取组件
 */
export const getComponent = (type) => {
  if (type === 'select') {
    return 'crudSelect'
  } else if (type === 'radio') {
    return 'crudRadio'
  } else if (type === 'checkbox') {
    return 'crudCheckbox'
  } else if (type === 'date') {
    return 'crudDate'
  } else {
    return 'crudInput'
  }
}
/**
 * 加密处理
 */
export const encryption = (params) => {
  const { data, type, param, key } = params
  const result = JSON.parse(JSON.stringify(data))
  if (type === 'Base64') {
    param.forEach(ele => {
      result[ele] = btoa(result[ele])
    })
  } else if (type === 'Aes') {
    param.forEach(ele => {
      // eslint-disable-next-line
      result[ele] = CryptoJS.AES.encrypt(result[ele], key).toString()
    })
  }
  return result
}

/**
 * 设置浏览器头部标题
 */
export const setTitle = function(title) {
  title = title ? `${title}——Vue2-Admin 管理系统` : 'Vue2-Admin 管理系统'
  window.document.title = title
}
/**
 * 浏览器判断是否全屏
 */
export const fullscreenToggel = () => {
  if (fullscreenEnable()) {
    exitFullScreen()
  } else {
    reqFullScreen()
  }
}
/**
 * esc监听全屏
 */
export const listenfullscreen = (callback) => {
  function listen() {
    callback()
  }
  document.addEventListener('fullscreenchange', function(e) {
    listen()
  })
  document.addEventListener('mozfullscreenchange', function(e) {
    listen()
  })
  document.addEventListener('webkitfullscreenchange', function(e) {
    listen()
  })
  document.addEventListener('msfullscreenchange', function(e) {
    listen()
  })
}
/**
 * 浏览器判断是否全屏
 */
export const fullscreenEnable = () => {
  var isFullscreen =
    document.fullscreenEnabled ||
    window.fullScreen ||
    document.mozFullscreenEnabled ||
    document.webkitIsFullScreen
  return isFullscreen
}

/**
 * 浏览器全屏
 */
export const reqFullScreen = () => {
  if (document.documentElement.requestFullScreen) {
    document.documentElement.requestFullScreen()
  } else if (document.documentElement.webkitRequestFullScreen) {
    document.documentElement.webkitRequestFullScreen()
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen()
  }
}
/**
 * 浏览器退出全屏
 */
export const exitFullScreen = () => {
  if (document.documentElement.requestFullScreen) {
    document.exitFullScreen()
  } else if (document.documentElement.webkitRequestFullScreen) {
    document.webkitCancelFullScreen()
  } else if (document.documentElement.mozRequestFullScreen) {
    document.mozCancelFullScreen()
  }
}
/**
 * 递归寻找子类的父类
 */

export const findParent = (menu, id) => {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].children.length !== 0) {
      for (let j = 0; j < menu[i].children.length; j++) {
        if (menu[i].children[j].id === id) {
          return menu[i]
        } else {
          if (menu[i].children[j].children.length !== 0) {
            return findParent(menu[i].children[j].children, id)
          }
        }
      }
    }
  }
}

/**
 * 总体路由处理器
 */
export const resolveUrlPath = (url, name) => {
  let reqUrl = url
  if (url.indexOf('http') !== -1 || url.indexOf('https') !== -1) {
    if (url.indexOf('websiteIp') !== -1) {
      // console.log('======' + urlRegEx(location.href)[0]) // http://127.0.0.1:9527/#/admin/user
      // console.log('======' + urlRegEx(location.href)[1]) // http
      // console.log('======' + urlRegEx(location.href)[2]) // 127.0.0.1
      // console.log('======' + urlRegEx(location.href)[3]) // :9527
      // console.log('======' + urlRegEx(location.href)[4]) // /#/admin/
      reqUrl = reqUrl.replace(/websiteIp/, urlRegEx(location.href)[2])
    }
    reqUrl = `/myiframe/urlPath?src=${reqUrl}&name=${name}`
  } else {
    reqUrl = `${reqUrl}`
  }
  return reqUrl
}

/**
 * 获取URL各个部分
 */
export const urlRegEx = url => {
  // 如果加上/g参数，那么只返回$0匹配。也就是说arr.length = 0
  var re = /(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i
  // re.exec(url)
  var arr = url.match(re)
  return arr
}

/**
 * 总体路由设置器
 */
export const setUrlPath = $route => {
  let value = ''
  if ($route.query.src) {
    value = $route.query.src
  } else {
    value = $route.path
  }
  return value
}
/**
 * 动态插入css
 */

export const loadStyle = url => {
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}

/**
 * 生成随机len位数字
 */
export const randomLenNum = (len, date) => {
  let random = ''
  random = Math.ceil(Math.random() * 100000000000000)
    .toString()
    .substr(0, len || 4)
  if (date) random = random + Date.now()
  return random
}
