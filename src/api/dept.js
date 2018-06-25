import request from '@/util/request'

export function fetchDeptTree() {
  return request({
    url: '/admin/dept/tree/',
    method: 'get'
  })
}

export function fetchList(_params) {
  return request({
    url: '/admin/dept/list',
    method: 'get',
    params: _params
  })
}

export function fetchById(id) {
  return request({
    url: '/admin/dept/find/' + id,
    method: 'get'
  })
}

export function del(id) {
  return request({
    url: '/admin/dept/del/' + id,
    method: 'post'
  })
}

export function add(_from) {
  return request({
    url: '/admin/dept/add',
    method: 'post',
    data: _from
  })
}

export function upd(_from) {
  return request({
    url: '/admin/dept/upd',
    method: 'post',
    data: _from
  })
}
