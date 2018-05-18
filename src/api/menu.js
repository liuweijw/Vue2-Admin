import request from '@/util/request'

export function fetchMenuTreeList(roleCode) {
  return request({
    url: '/admin/menu/menuTreeList/' + roleCode,
    method: 'get'
  })
}

export function fetchMenuTreeAllList() {
  return request({
    url: '/admin/menu/menuTreeAllList',
    method: 'get'
  })
}

export function del(id) {
  return request({
    url: '/admin/menu/del/' + id,
    method: 'post'
  })
}

export function add(_from) {
  return request({
    url: '/admin/menu/add',
    method: 'post',
    data: _from
  })
}

export function update(_from) {
  return request({
    url: '/admin/menu/upd',
    method: 'post',
    data: _from
  })
}
