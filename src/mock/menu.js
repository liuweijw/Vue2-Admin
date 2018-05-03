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
        icon: 'icon-caidanguanli',
        children: []
      },
      {
        id: 4,
        label: '角色管理',
        href: '/admin/role',
        icon: 'icon-jiaoseguanli',
        children: []
      },
      {
        id: 5,
        label: '日志管理',
        href: '/admin/logs',
        icon: 'icon-jiaoseguanli',
        children: []
      },
      {
        id: 6,
        label: '字典管理',
        href: '/admin/dict',
        icon: 'icon-jiaoseguanli',
        children: []
      },
      {
        id: 7,
        label: '部门管理',
        href: '/admin/dept',
        icon: 'icon-jiaoseguanli',
        children: []
      }
    ]
  },
  {
    id: 8,
    label: '系统监控',
    icon: 'icon-liuliangyunpingtaitubiao08',
    href: '',
    meta: {},
    children: [
      {
        id: 9,
        label: '服务监控',
        href: '/monitor/server',
        icon: 'icon-yonghuguanli',
        children: []
      },
      {
        id: 10,
        label: 'zipkin监控',
        href: '/monitor/zipkin',
        icon: 'icon-caidanguanli',
        children: []
      },
      {
        id: 11,
        label: 'pinpoint监控',
        href: '/monitor/pinpoint',
        icon: 'icon-jiaoseguanli',
        children: []
      },
      {
        id: 12,
        label: '缓存状态',
        href: '/monitor/cache',
        icon: 'icon-jiaoseguanli',
        children: []
      },
      {
        id: 13,
        label: 'ELK状态',
        href: '/monitor/elk',
        icon: 'icon-jiaoseguanli',
        children: []
      },
      {
        id: 14,
        label: '接口文档',
        href: '/monitor/swagger',
        icon: 'icon-jiaoseguanli',
        children: []
      }
    ]
  }
]
export const menu = [first, second]
