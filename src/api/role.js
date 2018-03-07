import request from '@/utils/request'

export function fetchRoleListByDeptId(deptId) {
  return request({
    url: '/admin/role/listByDeptId/' + deptId,
    method: 'get'
  })
}
