const first = [
  {
    id: 111,
    label: '数据展示',
    href: '/exhibition/index',
    icon: 'icon-shujuzhanshi2',
    children: []
  },
  {
    id: 112,
    label: '第三方网站',
    href: '',
    icon: 'icon-iframe',
    meta: {},
    children: [
      {
        id: 113,
        label: '百度',
        href: 'https://www.baidu.com',
        icon: 'icon-baidu1',
        children: []
      }
    ]
  },
  {
    id: 116,
    label: '表格&表单',
    href: '',
    icon: 'icon-biaoge',
    meta: {},
    children: [
      {
        id: 117,
        label: '表格',
        href: '/table/index',
        query: {
          a: 1
        },
        icon: 'icon-biaoge',
        meta: {},
        children: []
      },
      {
        id: 118,
        label: '生成器',
        href: `/table/generator`,
        icon: 'icon-huanyingye',
        meta: {},
        children: []
      },
      {
        id: 119,
        label: '表单',
        href: '/forms/index',
        query: {
          a: 1
        },
        icon: 'icon-biaodan',
        meta: {},
        children: []
      }
    ]
  },
  {
    id: 120,
    label: '阿里图标',
    href: '/iconfont/index',
    icon: 'icon-changyonglogo27',
    meta: {},
    children: []
  },
  {
    id: 121,
    label: '高级路由',
    href: '#',
    icon: 'icon-iconset0265',
    meta: {},
    children: [
      {
        id: 122,
        label: '动态路由',
        href: '/advanced-router/mutative-router',
        icon: 'icon-dongtai',
        children: []
      },
      {
        id: 123,
        label: '参数路由',
        href: '/advanced-router/argument-page',
        icon: 'icon-canshu',
        children: []
      }
    ]
  },
  {
    id: 124,
    label: '综合错误',
    href: '#',
    icon: 'icon-cuowu',
    meta: {},
    children: [
      {
        id: 125,
        label: '错误日志',
        href: '/errlog/index',
        icon: 'icon-rizhi',
        children: []
      },
      {
        id: 126,
        label: '错误页面',
        href: '/errlog/page',
        icon: 'icon-cuowutishitubiao',
        children: []
      }
    ]
  }
]
const second = [
  {
    id: 1,
    label: '系统管理',
    icon: 'icon-liuliangyunpingtaitubiao08',
    href: '',
    meta: {},
    children: [
      {
        id: 2,
        label: '用户管理',
        href: '/admin/user',
        icon: 'icon-yonghuguanli',
        children: []
      },
      {
        id: 3,
        label: '菜单管理',
        href: '/admin/menu',
        icon: 'el-icon-menu',
        children: []
      },
      {
        id: 4,
        label: '角色管理',
        href: '/admin/role',
        icon: 'el-icon-menu',
        children: []
      },
      {
        id: 5,
        label: '日志管理',
        href: '/admin/logs',
        icon: 'el-icon-menu',
        children: []
      },
      {
        id: 6,
        label: '字典管理',
        href: '/admin/dict',
        icon: 'el-icon-menu',
        children: []
      },
      {
        id: 7,
        label: '部门管理',
        href: '/admin/dept',
        icon: 'el-icon-menu',
        children: []
      }
    ]
  },
  {
    id: 8,
    label: '系统监控',
    icon: 'el-icon-view',
    href: '',
    meta: {},
    children: [
      {
        id: 9,
        label: '服务监控',
        href: 'http://websiteIp:1010',
        icon: 'el-icon-document',
        children: []
      },
      {
        id: 10,
        label: 'zipkin监控',
        href: '/monitor/zipkin',
        icon: 'el-icon-document',
        children: []
      },
      {
        id: 11,
        label: 'pinpoint监控',
        href: '/monitor/pinpoint',
        icon: 'el-icon-document',
        children: []
      },
      {
        id: 12,
        label: '缓存状态',
        href: '/monitor/cache',
        icon: 'el-icon-document',
        children: []
      },
      {
        id: 13,
        label: 'ELK状态',
        href: '/monitor/elk',
        icon: 'el-icon-document',
        children: []
      },
      {
        id: 14,
        label: '接口文档',
        href: 'http://websiteIp:1003/swagger-ui.html',
        icon: 'el-icon-document',
        children: []
      }
    ]
  }
]
export const menu = [first, second]
