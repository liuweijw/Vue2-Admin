import request from '@/util/request'
import { tableData } from '@/mock/user'
import { menu } from '@/mock/menu'

export const loginByUsername = (username, password, code, redomStr) => {
  var grant_type = 'password'
  var scope = 'server'
  var randomStr = new Date().getTime()
  const data = {
    username,
    password,
    randomStr,
    code,
    grant_type,
    scope
  }
  return request({
    url: '/auth/oauth/token',
    headers: {
      'Authorization': 'Basic Y29tLmdpdGh1Yi5saXV3ZWlqdzpjb20uZ2l0aHViLmxpdXdlaWp3Ljg4ODg4OA=='
    },
    method: 'post',
    params: data
  })
}

export const getUserInfo = () => {
  return request({
    url: '/admin/api/info',
    method: 'get'
  })
}

export const getUserTree = () => {
  return request({
    url: '/admin/api/userTree',
    method: 'get'
  })
}

export const getMenu = (parentId) => {
  return new Promise((resolve, reject) => {
    if (parentId < 0) {
      resolve({ data: [] })
    } else {
      resolve({ data: menu[parentId] })
    }
  })
}
export const getMenuAll = () => {
  return new Promise((resolve, reject) => {
    resolve({ data: menu[0] })
  })
}

export const getTableData = (page) => {
  return new Promise((resolve, reject) => {
    resolve({ data: tableData })
  })
}

export const logout = (accesstoken) => {
  return request({
    url: '/auth/auth/removeToken',
    method: 'post',
    params: { accesstoken }
  })
}

export function fetchUserList(_params) {
  return request({
    url: '/admin/user/list',
    method: 'get',
    params: _params
  })
}

export function fetchUserByUserId(userId) {
  return request({
    url: '/admin/user/find/' + userId,
    method: 'get'
  })
}

export function del(userId) {
  return request({
    url: '/admin/user/del/' + userId,
    method: 'post'
  })
}

export function add(_from) {
  return request({
    url: '/admin/user/add',
    method: 'post',
    data: _from
  })
}

export function update(_from) {
  return request({
    url: '/admin/user/upd',
    method: 'post',
    data: _from
  })
}

export function modifyUser(_from) {
  return request({
    url: '/admin/user/modify',
    method: 'post',
    data: _from
  })
}

