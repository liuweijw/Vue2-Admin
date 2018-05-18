export const userOption = {
  border: true, // 表格是否显示边框 default:false
  index: true, // 表格是否显示序号 default:false
  selection: false, // 表格是否显示可选select default:false
  showHeader: true,
  stripe: true,
  expand: false,
  align: 'center',
  menuAlign: 'center',
  // menuWidth: 300,
  dic: ['DEL_FLAG'],
  defaultSort: { prop: 'username', order: 'descending' },
  column: [
    {
      label: '用户名',
      prop: 'username',
      sortable: true,
      width: '150',
      overHidden: true,
      rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
    },
    {
      label: '角色',
      prop: 'roleDesc',
      overHidden: true,
      addVisdiplay: false,
      editVisdiplay: false,
      solt: true
      // dataDetail: row => { // 目前新版本已经不再支持
      //   // 对列表数据处理
      //   let rDesc = ''
      //   row.roleList.forEach(r => {
      //     rDesc += r.roleDesc
      //   })
      //   return rDesc
      // }
    },
    {
      label: '角色',
      prop: 'roleId',
      formsolt: true,
      editDisabled: true,
      addDisabled: false,
      hide: true
    },
    {
      label: '创建时间',
      prop: 'createTime',
      type: 'date',
      addVisdiplay: false,
      editVisdiplay: false
    },
    {
      label: '密码',
      prop: 'password',
      editDisabled: true,
      editVisdiplay: true,
      hide: true,
      rules: [{ required: true, message: '请输入登录密码', trigger: 'blur' }]
    },
    {
      label: '状态',
      prop: 'statu',
      sortable: true,
      solt: true, // 支持自定义dom default:false,
      type: 'radio',
      addVisdiplay: false,
      rules: [{ required: true, message: '请选择状态', trigger: 'blur' }],
      dicData: 'DEL_FLAG' // type的数据字典,当type为：select | radio | checkbox 加载
    }
  ]
}
