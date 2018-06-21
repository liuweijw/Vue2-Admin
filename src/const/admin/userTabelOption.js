export const userOption = {
  border: true, // 表格是否显示边框 default:false
  index: true, // 表格是否显示序号 default:false
  selection: false, // 表格是否显示可选select default:false
  // height: 'auto',
  indexLabel: '序号',
  showHeader: true,
  stripe: true,
  expand: false,
  showClomnuBtn: false,
  refreshBtn: false,
  searchSize: 'small',
  align: 'center',
  menuAlign: 'center',
  menu: true, // 是否显示菜单
  editBtn: false, // 不显示编辑按钮
  delBtn: false, // 不显示删除按钮
  menuWidth: 250,
  // formWidth: '60%', // 设置表单宽度
  dic: ['DEL_FLAG'],
  defaultSort: { prop: 'username', order: 'descending' },
  column: [
    {
      label: '用户名',
      prop: 'username',
      sortable: true,
      width: '150',
      search: true,
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
      type: 'datetime',
      // format: 'yyyy-MM-dd HH:mm:ss',
      // valueFormat: 'yyyy-MM-dd HH:mm:ss',
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
      width: '100',
      addVisdiplay: false,
      rules: [{ required: true, message: '请选择状态', trigger: 'blur' }],
      dicData: 'DEL_FLAG' // type的数据字典,当type为：select | radio | checkbox 加载
    },
    {
      label: '内容',
      prop: 'ueditor',
      type: 'ueditor',
      hide: true,
      formHeight: 180,
      span: 24,
      addVisdiplay: false,
      editVisdiplay: false
    }
  ]
}
