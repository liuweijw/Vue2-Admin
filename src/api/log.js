import request from '@/util/request'

export function fetchList(_params) {
  return request({
    url: '/admin/logs/list',
    method: 'get',
    params: _params
  })
}

export function del(id) {
  return request({
    url: '/admin/logs/del/' + id,
    method: 'post'
  })
}
