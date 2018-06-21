const _import = require('../_import')
import Layout from '@/page/index/'
export default [{
  path: '/admin',
  component: Layout,
  children: [
    {
      path: 'user',
      name: '用户管理',
      component: _import('admin/user/index', 'views')
    }, {
      path: 'menu',
      name: '菜单管理',
      component: _import('admin/menu/index', 'views')
    }, {
      path: 'role',
      name: '角色管理',
      component: _import('admin/role/index', 'views')
    }, {
      path: 'logs',
      name: '日志管理',
      component: _import('admin/logs/index', 'views')
    }, {
      path: 'dict',
      name: '字典管理',
      component: _import('admin/dict/index', 'views')
    }, {
      path: 'dept',
      name: '部门管理',
      component: _import('admin/dept/index', 'views')
    }
  ]
}, {
  path: '/monitor',
  component: Layout,
  children: [
    {
      path: 'server',
      name: '服务监控',
      component: _import('monitor/server/index', 'views')
    }, {
      path: 'zipkin',
      name: 'zipkin监控',
      component: _import('monitor/zipkin/index', 'views')
    }, {
      path: 'pinpoint',
      name: 'pinpoint监控',
      component: _import('monitor/pinpoint/index', 'views')
    }, {
      path: 'cache',
      name: '缓存状态',
      component: _import('monitor/cache/index', 'views')
    }, {
      path: 'elk',
      name: 'ELK状态',
      component: _import('monitor/elk/index', 'views')
    }, {
      path: 'swagger',
      name: '接口文档',
      component: _import('monitor/swagger/index', 'views')
    }
  ]
}
]
