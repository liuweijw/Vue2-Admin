import Mock from 'mockjs'
import loginAPI from './login'

// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock(/\/auth\/oauth\/token/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/auth\/removeToken/, 'post', loginAPI.logout)
Mock.mock(/\/admin\/user\/info\.*/, 'get', loginAPI.getUserInfo)
Mock.mock(/\/admin\/menu\/userTree/, 'get', loginAPI.getUserTree)

export default Mock
