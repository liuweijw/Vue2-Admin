<template>
  <div class="table-container pull-height">
    <avue-crud :option="tableOption"
               :data="tableData"
               :table-loading="tableLoading"
               :page="page"
               ref="crud"
               width="290"
               @size-change="handleSizeChange"
               @current-change="handleCurrentChange"
               @row-save="handleSave"
               @row-update="handleUpdate"
               @row-del="handleDel"
               @search-change="handleSearchChange">
      <el-button v-if="permission.role_add"
                 slot="headerMiddle"
                 size="small"
                 type="success"
                 icon="el-icon-edit"
                 @click="handleAdd()">新 增</el-button>
      <template slot-scope="scope" slot="menu">
        <el-button icon="el-icon-check"
                   size="small"
                   @click="handleRoleMenu(scope.row,scope.$index)">权限</el-button>
      </template>
      <template slot-scope="scope"
                slot="statu">
        <el-tag :type="scope.row.statu==='0'?'success':'danger'">{{findByvalue(scope.dic,scope.row.statu)}}</el-tag>
      </template>
    </avue-crud>
    <el-dialog title="菜单"
               :visible.sync="menuTree.box"
               width="40%">
      <el-tree :data="menuAll"
               :default-checked-keys="menuTree.check"
               :default-expanded-keys="menuTree.check"
               show-checkbox
               node-key="id"
               ref="menuTreeRef"
               @check-change="handleMenuCheckChange">
      </el-tree>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="handleMenuUpdate">更新</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { roleTableOption } from '@/const/role/roleTableOption'
import { fetchList, del, add, update, updRoleMenuPermission } from '@/api/role'
import { fetchMenuTreeList } from '@/api/menu'
export default {
  name: 'role',
  components: {},
  data() {
    return {
      tableOption: {}, // 表格设置属性
      tableData: [], // 表格的数据
      tablePage: 1,
      tableLoading: false,
      tabelObj: {},
      page: {
        total: 0,
        currentPage: 1,
        pageSize: 20,
        roleName: '',
        roleCode: ''
      },
      menuTree: {
        box: false,
        check: []
      },
      menuAll: []
    }
  },
  created() {
    this.tableOption = roleTableOption
    this.tableOption.delBtn = (this.permission.role_del !== undefined && this.permission.role_del)
    this.tableOption.editBtn = (this.permission.role_upd !== undefined && this.permission.role_upd)
    this.tableOption.menu = this.tableOption.delBtn || this.tableOption.editBtn
    this.handleList()
  },
  watch: {},
  mounted() { },
  computed: {
    ...mapGetters(['permission'])
  },
  props: [],
  methods: {
    handleList() {
      this.tableLoading = true
      fetchList(this.page).then(res => {
        this.tableData = res.data.list
        // 由于statu是int 和前台字典值为字符串不匹配，这里处理下。
        this.tableData.forEach(row => { row.statu = row.statu + '' })
        this.page.total = res.data.total
        this.page.currentPage = res.data.currentPage
        this.page.pageSize = res.data.pageSize
        this.tableLoading = false
      })
    },
    handleSizeChange(val) {
      this.page.pageSize = val
      this.handleList()
    },
    handleCurrentChange(val) {
      this.page.currentPage = val
    },
    handleSearchChange(from) {
      this.page.roleName = from.roleName
      this.page.roleCode = from.roleCode
      this.page.currentPage = 1
      this.handleList()
    },
    handleAdd() {
      this.$refs.crud.rowAdd()
    },
    handleSave(row, done) {
      row.statu = 0
      add(row).then(res => {
        if (res.data) {
          this.handleList()
          this.$notify({ title: '成功', message: '添加成功', type: 'success', duration: 2000 })
        } else {
          this.$notify({ title: '失败', message: '添加失败', type: 'error', duration: 2000 })
        }
        done()
      })
    },
    handleUpdate(row, index, done) {
      update(row).then(res => {
        if (res.data) {
          this.handleList()
          this.$notify({ title: '成功', message: '修改成功', type: 'success', duration: 2000 })
        } else {
          this.$notify({ title: '失败', message: '修改失败', type: 'error', duration: 2000 })
        }
        done()
      })
    },
    handleDel(row, index) {
      this.$confirm('此操作将删除该角色(' + row.roleName + '), 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        del(row.roleId).then(res => {
          if (res.data) {
            this.handleList()
            this.$notify({ title: '成功', message: '删除成功', type: 'success', duration: 2000 })
          } else {
            this.$notify({ title: '失败', message: '删除失败', type: 'error', duration: 2000 })
          }
        })
      }).catch(() => {
        this.$message({ type: 'info', message: '已取消删除' })
      })
    },
    findByvalue(dic, value) {
      return this.$refs.crud.findByvalue(dic, value)
    },
    handleMenuUpdate() {
      const checkedNodes = this.$refs.menuTreeRef.getCheckedNodes()
      // const permissions = this.$refs.menuTreeRef.getCheckedKeys() + ''
      let permissions = ''
      checkedNodes.forEach(n => {
        if (n.pid !== '0') permissions += n.pid + '|' + n.id + ','
      })
      const _from = {
        roleCode: this.tabelObj.roleCode,
        permissions: permissions
      }
      updRoleMenuPermission(_from).then(res => {
        if (res.data) {
          this.tabelObj = {}
          this.menuAll = []
          this.menuTree.check = []
          this.menuTree.box = false
          // this.$refs.menuTreeRef.setCheckedKeys([])
          // this.tabelObj.check = [].concat(this.menuTree.check)
          this.$notify({ title: '成功', message: '权限更新成功', type: 'success', duration: 2000 })
        } else {
          this.$notify({ title: '失败', message: '权限更新失败', type: 'error', duration: 2000 })
        }
      })
    },
    handleMenuCheckChange(data, checked, indeterminate) {
      // if (checked) {
      //   this.menuTree.check.push(data.id)
      // } else {
      //   this.menuTree.check.splice(this.menuTree.check.indexOf(data.id), 1)
      // }
    },
    handleRoleMenu(row, index) {
      this.tabelObj = row
      fetchMenuTreeList(row.roleCode).then(res => {
        this.menuAll = res.data.menuList
        this.menuTree.check = res.data.permissions
        this.menuTree.box = true
      })
    }
  }
}
</script>
