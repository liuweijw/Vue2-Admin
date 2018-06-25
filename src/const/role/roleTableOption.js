export const roleTableOption = {
  border: true,
  index: true,
  selection: false,
  showHeader: true,
  stripe: true,
  expand: false,
  showClomnuBtn: false,
  refreshBtn: false,
  searchSize: 'small',
  align: 'center',
  menuAlign: 'center',
  menuWidth: 300,
  dic: ['STATU', 'DEL_FLAG'],
  defaultSort: { prop: 'roleName', order: 'descending' },
  column: [
    {
      label: '角色名称',
      prop: 'roleName',
      sortable: true,
      overHidden: true,
      search: true,
      rules: [{ required: true, message: '请输入角色名称', trigger: 'blur' }]
    },
    {
      label: '角色编码',
      prop: 'roleCode',
      sortable: true,
      editDisabled: true,
      search: true,
      rules: [{ required: true, message: '请输入角色编码', trigger: 'blur' }]
    },
    {
      label: '所属部门',
      prop: 'deptId',
      formsolt: true,
      hide: true
    },
    {
      label: '所属部门',
      prop: 'deptName',
      addVisdiplay: false,
      editVisdiplay: false
    },
    {
      label: '更新时间',
      prop: 'updateTime',
      type: 'date',
      overHidden: true,
      addVisdiplay: false,
      editVisdiplay: false
    },
    {
      label: '状态',
      prop: 'statu',
      sortable: true,
      solt: true,
      type: 'radio',
      dicData: 'DEL_FLAG',
      addVisdiplay: false,
      rules: [{ required: true, message: '请选择状态', trigger: 'blur' }]
    },
    {
      label: '描述',
      prop: 'roleDesc',
      // width: '300',
      sortable: true,
      type: 'textarea',
      maxRow: 4,
      minRow: 4,
      span: 24,
      disabled: true,
      addDisabled: false,
      overHidden: true,
      hide: true
    }
  ]
}
