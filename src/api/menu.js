import request from '@/utils/request'

export function fetchUserTree() {
  return request({
    url: '/admin/menu/userTree',
    method: 'get'
  })
}
