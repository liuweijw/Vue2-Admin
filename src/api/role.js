import request from '@/util/request'

export function fetchListAll() {
  return request({
    url: '/admin/role/listAll',
    method: 'get'
  })
}

export function fetchList(_params) {
  return request({
    url: '/admin/role/list',
    method: 'get',
    params: _params
  })
}

export function del(id) {
  return request({
    url: '/admin/role/del/' + id,
    method: 'post'
  })
}

export function add(_from) {
  return request({
    url: '/admin/role/add',
    method: 'post',
    data: _from
  })
}

export function update(_from) {
  return request({
    url: '/admin/role/upd',
    method: 'post',
    data: _from
  })
}

export function updRoleMenuPermission(_from) {
  return request({
    url: '/admin/role/updRoleMenuPermission',
    method: 'post',
    data: _from
  })
}

export function fetchDeptRoleList(deptId) {
  return request({
    url: '/admin/role/findRoleList/' + deptId,
    method: 'get'
  })
}
