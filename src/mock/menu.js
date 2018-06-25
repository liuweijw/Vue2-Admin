const first = [{
  id: 120,
  label: '环境变量',
  icon: 'icon-xitongguanli',
  href: '/dev/index',
  meta: {
  },
  children: []
}, {
  id: 121,
  label: '数据持久化',
  href: `/store/index`,
  icon: 'icon-shuju2',
  meta: {},
  children: []
}, {
  id: 122,
  label: '剪切板',
  href: `/clipboard/index`,
  icon: 'icon-canshu',
  meta: {},
  children: []
}, {
  id: 111,
  label: '数据展示',
  href: '/exhibition/index',
  icon: 'icon-shuju4',
  children: []
}, {
  id: 112,
  label: '第三方网站',
  href: '',
  icon: 'icon-wangzhi',
  meta: {},
  children: [
    {
      id: 113,
      label: '百度',
      href: 'https://www.baidu.com',
      icon: 'icon-changyonglogo48',
      children: []
    }
  ]
},
{
  id: 116,
  label: '表格&表单',
  href: '',
  icon: 'icon-tijiaorizhi',
  meta: {},
  children: [
    {
      id: 117,
      label: '表格',
      href: '/table/index',
      query: {
        a: 1
      },
      icon: 'icon-tijiaorizhi',
      meta: {},
      children: []
    },
    {
      id: 118,
      label: '生成器',
      href: `/table/generator`,
      icon: 'icon-guanli2',
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
      icon: 'icon-tijiaorizhi',
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
  icon: 'icon-luyou',
  meta: {},
  children: [
    {
      id: 122,
      label: '动态路由',
      href: '/advanced-router/mutative-router',
      icon: 'icon-msnui-workflow',
      children: []
    },
    {
      id: 123,
      label: '参数路由',
      href: '/advanced-router/argument-page',
      icon: 'icon-iconset0450',
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
      icon: 'icon-caozuorizhi1',
      children: []
    },
    {
      id: 126,
      label: '错误页面',
      href: '/errlog/page',
      icon: 'icon-caozuorizhi1',
      children: []
    }
  ]
}
]
const second = [
  {
    id: 1,
    label: '系统管理',
    icon: 'icon-xitong',
    href: '',
    meta: {},
    children: [
      {
        id: 2,
        label: '用户管理',
        href: '/admin/user',
        icon: 'icon-webicon208',
        children: []
      },
      {
        id: 3,
        label: '菜单管理',
        href: '/admin/menu',
        icon: 'icon-caidan11',
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
        icon: 'icon-rizhi',
        children: []
      },
      {
        id: 6,
        label: '字典管理',
        href: '/admin/dict',
        icon: 'icon-zidian',
        children: []
      },
      {
        id: 7,
        label: '部门管理',
        href: '/admin/dept',
        icon: 'icon-web-icon-',
        children: []
      }
    ]
  },
  {
    id: 8,
    label: '系统监控',
    icon: 'icon-xitongjiankong',
    href: '',
    meta: {},
    children: [
      {
        id: 9,
        label: '服务监控',
        href: 'http://websiteIp:1010',
        icon: 'icon-dongtai',
        children: []
      },
      {
        id: 10,
        label: 'zipkin监控',
        href: 'http://websiteIp:1011',
        icon: 'icon-dongtai',
        children: []
      },
      {
        id: 11,
        label: 'pinpoint监控',
        href: '/monitor/pinpoint',
        icon: 'icon-dongtai',
        children: []
      },
      {
        id: 12,
        label: '缓存状态',
        href: '/monitor/cache',
        icon: 'icon-dongtai',
        children: []
      },
      // {
      //   id: 13,
      //   label: 'ELK状态',
      //   href: '/monitor/elk',
      //   icon: 'icon-dongtai',
      //   children: []
      // },
      {
        id: 14,
        label: '接口文档',
        href: 'http://websiteIp:1003/swagger-ui.html',
        icon: 'icon-api',
        children: []
      }
    ]
  }
]
export const menu = [first, second]
