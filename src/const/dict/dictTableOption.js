export const tableOption = {
  border: true,
  index: true,
  selection: false,
  showHeader: true,
  stripe: true,
  expand: false,
  align: 'center',
  menuAlign: 'center',
  dic: ['DEL_FLAG'],
  defaultSort: { prop: 'type', order: 'descending' },
  column: [
    {
      label: '类型',
      prop: 'type',
      sortable: true,
      width: '150',
      rules: [{ required: true, message: '请输入字典类型', trigger: 'blur' }]
    },
    {
      label: '字典值',
      prop: 'value',
      sortable: true,
      rules: [{ required: true, message: '请输入字典值', trigger: 'blur' }]
    },
    {
      label: '标签名',
      prop: 'label',
      rules: [{ required: true, message: '请输入字典标签名', trigger: 'blur' }]
    },
    {
      label: '状态',
      prop: 'statu',
      sortable: true,
      solt: true, // 支持自定义dom default:false,
      type: 'radio',
      // visdiplay: true, // 表单显示
      dicData: 'DEL_FLAG', // type的数据字典,当type为：select | radio | checkbox 加载
      rules: [{ required: true, message: '请选择状态', trigger: 'blur' }]
    }
  ]
}
