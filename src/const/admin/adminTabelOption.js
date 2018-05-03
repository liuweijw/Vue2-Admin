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
  dic: ['STATU', 'GRADE'],
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
      type: 'select',
      dicData: 'GRADE',
      overHidden: true,
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
      label: '创建时间',
      prop: 'createTime',
      type: 'date',
      visdiplay: true
    },
    {
      label: '状态',
      prop: 'statu',
      sortable: true,
      solt: true, // 支持自定义dom default:false,
      type: 'radio',
      visdiplay: true,
      dicData: 'STATU' // type的数据字典,当type为：select | radio | checkbox 加载
    }
  ]
}
export const roleOption = {
  border: true,
  index: true,
  selection: false,
  menuWidth: 300,
  column: [
    {
      label: '角色名称',
      prop: 'name',
      width: '150',
      rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
    },
    {
      label: '创建时间',
      prop: 'date',
      visdiplay: true,
      type: 'date'
    }
  ]
}
