export const tableOption = {
  border: true,
  index: false,
  selection: false,
  showHeader: true,
  stripe: true,
  expand: false,
  editBtn: false,
  align: 'center',
  menuAlign: 'center',
  dic: ['DEL_FLAG'],
  menuWidth: 150,
  defaultSort: { prop: 'serialIndex', order: 'ascending' },
  column: [
    {
      label: '序号',
      prop: 'serialIndex',
      sortable: true,
      solt: true
    },
    {
      label: '服务id',
      prop: 'serviceId',
      sortable: true,
      width: '165'
    },
    {
      label: '创建者',
      prop: 'createBy',
      sortable: true
    },
    {
      label: '远程IP',
      prop: 'remoteAddr'
    },
    {
      label: '请求URI',
      prop: 'requestUri',
      overHidden: true
    },
    {
      label: '执行时间',
      prop: 'time'
    },
    {
      label: '状态',
      prop: 'statu',
      sortable: true,
      solt: true,
      type: 'radio',
      dicData: 'DEL_FLAG'
    }
  ]
}
