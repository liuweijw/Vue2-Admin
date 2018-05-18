<template>
  <div class="table-container pull-height">
    <div class="table-header">
      <el-input style="width: 200px;"
                size="medium"
                class="filter-item"
                placeholder="用户名"
                v-model="page.username"
                @keyup.enter.native="handleSearch"></el-input>
      <el-button class="filter-item"
                 size="small"
                 type="primary"
                 v-waves
                 icon="search"
                 @click="handleSearch()">搜索</el-button>
      <el-button v-if="permission.user_add"
                 class="filter-item"
                 size="small"
                 style="margin-left: 10px;"
                 type="primary"
                 icon="edit"
                 v-waves
                 @click="handleAdd()">新 增</el-button>
    </div>
    <avue-crud :table-option="tableOption"
               :table-data="tableData"
               :table-loading="tableLoading"
               :page="page"
               ref="crud"
               width="290"
               @row-edit='handleRowEdit'
               @row-click="handleRowClick"
               @size-change="handleSizeChange"
               @current-change="handleCurrentChange"
               @row-save="handleSave"
               @row-update="handleUpdate"
               @row-del="handleDel">
      <template slot-scope="scope"
                slot="statu">
        <el-tag :type="scope.row.statu==='0'?'success':'danger'">{{findByvalue(scope.dic,scope.row.statu)}}</el-tag>
      </template>
      <template slot-scope="scope" slot="roleDesc">
        {{roleDescValue(scope.row)}}
      </template>
      <template slot-scope="scope" slot="roleIdForm">
        <el-select v-model="roleEditRoleId" :placeholder="'请选择角色'" @change="handleChange">
          <el-option v-for="(item,index) in roleEditData" :key="index" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </template>
    </avue-crud>
  </div>
</template>

<script>
import { fetchUserList, add, update, del } from '@/api/user'
import { fetchListAll } from '@/api/role'
import { mapGetters } from 'vuex'
import { userOption } from '@/const/admin/adminTabelOption.js'
import { validatenull } from '@/util/validate'
import waves from '@/directive/waves/index.js'
export default {
  directives: { waves },
  name: 'user',
  components: {},
  data() {
    return {
      tableOption: {},
      tableData: [],
      tablePage: 1,
      tableLoading: false,
      tabelObj: {},
      page: {
        total: 0,
        currentPage: 1,
        pageSize: 10,
        username: ''
      },
      roleEditData: [],
      roleEditRoleId: '',
      userObj: {
        username: '',
        password: '',
        statu: 0,
        roleId: '',
        userId: ''
      }
    }
  },
  created() {
    this.tableOption = userOption
    this.handleList()
    this.handleRoleList()
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
      fetchUserList(this.page).then(res => {
        this.tableData = res.data.list
        this.tableData.forEach(row => {
          row.statu = row.statu + ''
          row.password = '******'
        })
        this.page.total = res.data.total
        this.page.currentPage = res.data.currentPage
        this.page.pageSize = res.data.pageSize
        this.tableLoading = false
      })
    },
    handleRowClick(row, event, column) {
      this.$notify({
        showClose: true,
        message: row.roleList[0].roleCode,
        type: 'success'
      })
    },
    handleChange(val) {
      this.roleEditRoleId = val
    },
    handleSizeChange(val) {
      this.page.pageSize = val
      this.handleList()
    },
    handleCurrentChange(val) {
      this.page.currentPage = val
    },
    handleSearch() {
      this.page.currentPage = 1
      this.handleList()
    },
    findByvalue(dic, value) {
      return this.$refs.crud.findByvalue(dic, value)
    },
    roleDescValue(row) {
      // 对列表数据处理
      let rDesc = ''
      row.roleList.forEach(r => {
        rDesc += r.roleName
      })
      return rDesc
    },
    handleAdd() {
      this.roleEditRoleId = this.roleEditData[0].value
      this.$refs.crud.rowAdd()
    },
    handleRowEdit(row, index) {
      if (validatenull(row.roleList)) {
        this.roleEditRoleId = ''
        return
      }
      this.roleEditRoleId = row.roleList[0].roleId
    },
    handleSave(row, done) {
      this.userObj.username = row.username
      this.userObj.password = row.password
      this.userObj.statu = 0
      this.userObj.roleId = this.roleEditRoleId
      this.userObj.userId = ''
      add(this.userObj).then(res => {
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
      this.userObj.username = row.username
      this.userObj.password = ''
      this.userObj.statu = row.statu
      this.userObj.roleId = this.roleEditRoleId
      this.userObj.userId = row.userId
      update(this.userObj).then(res => {
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
      this.$confirm('此操作将永久删除该用户(用户名:' + row.username + '), 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        del(row.userId).then(res => {
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
    handleRoleList() {
      fetchListAll().then(res => {
        res.data.forEach(r => {
          const role = {
            label: r.roleName,
            value: r.roleId
          }
          this.roleEditData.push(role)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.table-container {
  padding: 8px 10px;
}
.table-header {
  margin-bottom: 10px;
  & > .el-button {
    padding: 12px 25px;
  }
}
</style>
