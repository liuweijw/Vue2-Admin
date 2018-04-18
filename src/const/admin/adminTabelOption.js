export const userOption = {
  border: true, // 表格是否显示边框 default:false
  index: true,  // 表格是否显示序号 default:false
  selection: false, // 表格是否显示可选select default:false
  dic: ['STATU', 'GRADE'],
  column: [
    {
      label: '用户名',
      prop: 'username',
      width: '150',
      rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
    },
    {
      label: '角色',
      prop: 'roleDesc',
      type: 'select',
      dicData: 'GRADE',
      dataDetail: row => { // 对列表数据处理
        let rDesc = ''
        row.roleList.forEach(r => {
          rDesc += r.roleDesc
        })
        return rDesc
      }
    },
    {
      label: '创建时间',
      prop: 'createTime',
      type: 'date',
      visdiplay: true // 表单不显示
    },
    {
      label: '状态',
      prop: 'statu',
      solt: true, // 支持自定义dom default:false,
      type: 'radio',
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
