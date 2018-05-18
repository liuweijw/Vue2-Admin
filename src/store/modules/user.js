import { setToken, removeToken } from '@/util/auth'
import { setStore, getStore } from '@/util/store'
import { validatenull } from '@/util/validate'
import { loginByUsername, getUserInfo, getUserTree, getTableData, getMenu, logout, getMenuAll } from '@/api/user'
const user = {
  state: {
    userInfo: {},
    permission: {},
    roles: [],
    menu: [],
    menuAll: [],
    token: getStore({ name: 'token' }) || '',
    menuIds: []
  },
  actions: {
    // 根据用户名登录
    LoginByUsername({ commit, state, dispatch }, userInfo) {
      // const user = encryption({
      //     data: userInfo,
      //     type: 'Aes',
      //     key: 'avue',
      //     param: ['useranme', 'password']
      // });
      return new Promise((resolve, reject) => {
        loginByUsername(
          userInfo.username,
          userInfo.password,
          userInfo.code,
          userInfo.redomStr
        ).then(res => {
          commit('SET_TOKEN', res.access_token)
          commit('DEL_ALL_TAG')
          commit('CLEAR_LOCK')
          setToken(res.access_token)
          resolve()
        })
      })
    },
    // 根据手机号登录
    LoginByPhone({ commit, state, dispatch }, userInfo) {
      return new Promise((resolve, reject) => {
        loginByUsername(userInfo.phone, userInfo.code).then(res => {
          commit('SET_TOKEN', res.access_token)
          commit('DEL_ALL_TAG')
          commit('CLEAR_LOCK')
          setToken(res.access_token)
          resolve()
        })
      })
    },
    GetTableData({ commit, state, dispatch }, page) {
      return new Promise((resolve, reject) => {
        getTableData(page).then(res => {
          const data = res.data
          resolve(data)
        })
      })
    },
    GetUserInfo({ commit, state, dispatch }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          const data = res.data
          const userInfo = {
            username: data.user.username,
            name: data.user.username,
            avatar: data.user.picUrl
          }
          commit('SET_USERIFNO', userInfo)
          commit('SET_ROLES', data.roles)
          commit('SET_PERMISSION', data.permissions)
          resolve(res)
        })
      })
    },
    GetUserTree({ commit, state, dispatch }) {
      return new Promise((resolve, reject) => {
        getUserTree().then(res => {
          commit('SET_MENU_IDS', res.data)
          resolve()
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            commit('DEL_ALL_TAG')
            commit('CLEAR_LOCK')
            removeToken()
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 注销session
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('DEL_ALL_TAG')
        commit('CLEAR_LOCK')
        removeToken()
        resolve()
      })
    },
    // 获取系统菜单
    GetMenu({ commit }, parentId) {
      return new Promise(resolve => {
        getMenu(parentId).then(res => {
          const data = res.data
          commit('SET_MENU', data)
          resolve(data)
        })
      })
    },
    // 获取全部菜单
    GetMenuAll({ commit }) {
      return new Promise(resolve => {
        getMenuAll().then(res => {
          const data = res.data
          commit('SET_MENU_ALL', data)
          resolve(data)
        })
      })
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setStore({ name: 'token', content: state.token, type: 'session' })
    },
    SET_USERIFNO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_MENU: (state, menu) => {
      if (validatenull(menu)) {
        state.menu = []
        return
      }
      const list = menu.filter(ele => {
        ele.hidden = false
        if (validatenull(ele.children)) return true
        const _children = ele.children.filter(child => {
          if (child.id > 100) return true
          const _menuIds = state.menuIds
          let _childShow = true
          _menuIds.forEach(menuId => {
            if (menuId === child.id && _childShow) _childShow = false
          })
          return !_childShow
        })
        ele.children = _children
        return true
      })
      state.menu = list
    },
    SET_MENU_ALL: (state, menuAll) => {
      state.menuAll = menuAll
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSION: (state, permission) => {
      state.permission = {}
      permission.forEach(ele => {
        state.permission[ele] = true
      })
    },
    SET_MENU_IDS: (state, menuIds) => {
      state.menuIds = menuIds
    }
  }
}
export default user
