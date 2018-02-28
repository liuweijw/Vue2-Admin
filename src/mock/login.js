const userMap = {
  admin: {
    access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTk4MjgwNzMsInVzZXJfbmFtZSI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJqdGkiOiIwOWYyZmI5OC1jYzI3LTRmYzYtYjIyMC02NWYzYzNhMDE3YjkiLCJjbGllbnRfaWQiOiJjb20uZ2l0aHViLmxpdXdlaWp3Iiwic2NvcGUiOlsic2VydmVyIl19.vD0Kk7M00949RoSpwidbgyW2rx0YQzodP4tLD3hYBUo',
    refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbInNlcnZlciJdLCJhdGkiOiIwOWYyZmI5OC1jYzI3LTRmYzYtYjIyMC02NWYzYzNhMDE3YjkiLCJleHAiOjE1MjIzNzY4NzMsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwianRpIjoiZjgwODZmMjgtZWY0My00MzE5LWE3OTMtMzQzOTRlZDRlNDhlIiwiY2xpZW50X2lkIjoiY29tLmdpdGh1Yi5saXV3ZWlqdyJ9.WBeQxW9ZIfPXMudITnHUtdUu3_SFnw1eh6SYJvaZOh4'
  }
}

const userInfoMap = { 'msg': 'success', 'code': 0, 'data': { 'user': { 'userId': 1, 'username': 'admin', 'password': '', 'openId': null, 'createTime': null, 'updateTime': null, 'delFlag': '0', 'mobile': '', 'avatar': 'https://avatars0.githubusercontent.com/u/21272196?s=40&v=4', 'roleList': [] }, 'permissions': ['t_sys_user_add', 't_sys_menu_add', 't_sys_menu_del', 't_sys_user_upd', 't_sys_user_del', 't_sys_menu_edit'], 'roles': ['ROLE_ADMIN'] }}

const userTree = [44, 34, 33, 11, 12, 13, 24, 6, 42, 43, 14, 32, 41, 7, 9, 22, 23, 3, 8, 1, 21, 31, 2, 10, 4, 5]

export default {
  loginByUsername: config => {
    return userMap['admin']
  },
  getUserInfo: config => {
    return userInfoMap
  },
  logout: config => {
    // const { accesstoken, refreshToken } = JSON.parse(config.body)
    return { 'msg': 'success', 'code': 0, 'data': true }
  },
  getUserTree: config => {
    return userTree
  }
}
