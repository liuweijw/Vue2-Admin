const userList = { 'msg': 'success', 'code': 0, 'data': { 'total': 4, 'pageNo': 0, 'pageNum': 20,
  'list': [
    {
      'userId': 4,
      'deptName': '测试部门',
      'username': '测试系统管理员',
      'password': '$2a$10$bvIjvNMsFP0d.wkF2yb9puXn00.q086DInosQsCjXIA9zDINbvIBq',
      'openId': null,
      'createTime': 1519727098000,
      'updateTime': 1519981631000,
      'delFlag': 1,
      'mobile': null,
      'avatar': 'https://avatars0.githubusercontent.com/u/21272196?s=40&v=4',
      'roleList': [{
        'roleId': 2,
        'roleName': 'test',
        'roleCode': 'ROLE_TEST',
        'roleDesc': '测试',
        'createTime': 1519727138000,
        'updateTime': 1519783036000,
        'delFlag': '0'
      }]
    },
    {
      'userId': 3,
      'deptName': '测试部门1',
      'username': '赵六',
      'password': '$2a$10$bvIjvNMsFP0d.wkF2yb9puXn00.q086DInosQsCjXIA9zDINbvIBq',
      'openId': null,
      'createTime': 1519727098000,
      'updateTime': 1519981631000,
      'delFlag': 0,
      'mobile': null,
      'avatar': '',
      'roleList': []
    },

    {
      'userId': 2,
      'deptName': '测试部门2',
      'username': 'test',
      'password': '$2a$10$bvIjvNMsFP0d.wkF2yb9puXn00.q086DInosQsCjXIA9zDINbvIBq',
      'openId': null,
      'createTime': 1519727098000,
      'updateTime': 1519981631000,
      'delFlag': 0,
      'mobile': null,
      'avatar': 'https://avatars0.githubusercontent.com/u/21272196?s=40&v=4',
      'roleList': []
    },

    {
      'userId': 1,
      'deptName': '测试部门3',
      'username': 'admin',
      'password': '$2a$10$bvIjvNMsFP0d.wkF2yb9puXn00.q086DInosQsCjXIA9zDINbvIBq',
      'openId': null,
      'createTime': 1509263113000,
      'updateTime': 1519724962000,
      'delFlag': 0,
      'mobile': '',
      'avatar': 'https://avatars0.githubusercontent.com/u/21272196?s=40&v=4',
      'roleList': [{
        'roleId': 1,
        'roleName': 'admin',
        'roleCode': 'ROLE_ADMIN',
        'roleDesc': '超级管理员',
        'createTime': 1509263151000,
        'updateTime': 1517987558000,
        'delFlag': '0'
      }]

    }

  ]
}}

export default {
  fetchUserList: config => {
    return userList
  },
  delByUserId: config => {
    return { 'msg': 'success', 'code': 0, 'data': true }
  },
  delByUserId2: config => {
    return { 'msg': 'success', 'code': 0, 'data': false }
  },
  addUser: config => {
    return { 'msg': 'success', 'code': 0, 'data': true }
  },
  fetchUserByUserId: config => {
    return { 'msg': 'success', 'code': 0, 'data': { 'userId': 1, 'username': 'admin', 'password': '$2a$10$bvIjvNMsFP0d.wkF2yb9puXn00.q086DInosQsCjXIA9zDINbvIBq', 'delFlag': 1, 'avatar': 'https://avatars0.githubusercontent.com/u/21272196?s=40&v=4', 'deptId': null, 'roleList': [{ 'roleId': 1, 'roleName': 'admin', 'roleCode': 'ROLE_ADMIN', 'roleDesc': '超级管理员', 'delFlag': '0' }] }}
  },
  updateUser: config => {
    return { 'msg': 'success', 'code': 0, 'data': true }
  }
}
