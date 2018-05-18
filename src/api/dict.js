import request from '@/util/request'

export function fetchList(_params) {
  return request({
    url: '/admin/dict/list',
    method: 'get',
    params: _params
  })
}

export function fetchByType(type) {
  return request({
    url: '/admin/dict/type/' + type,
    method: 'get'
  })
}

export function fetchById(id) {
  return request({
    url: '/admin/dict/' + id,
    method: 'get'
  })
}

export function delById(id) {
  return request({
    url: '/admin/dict/del/' + id,
    method: 'post'
  })
}

export function add(_from) {
  return request({
    url: '/admin/dict/add',
    method: 'post',
    data: _from
  })
}

export function update(_from) {
  return request({
    url: '/admin/dict/upd',
    method: 'post',
    data: _from
  })
}

