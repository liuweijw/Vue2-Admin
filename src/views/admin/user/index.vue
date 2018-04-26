<template>
  <div class="table-container pull-height">
    <div class="table-header">
      <el-input style="width: 200px;"
                size="medium"
                class="filter-item"
                placeholder="用户名"
                v-model="listPageParams.username"
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
               @row-save="handleSave"
               @row-update="handleUpdate"
               @row-del="handleDel">
      <template slot-scope="scope"
                slot="statu">
        <el-tag :type="scope.row.statu===0?'success':'danger'">{{findByvalue(scope.dic,scope.row.statu)}}</el-tag>
      </template>
      <template slot-scope="scope"
                slot="roleDesc">
        {{roleDescValue(scope.row)}}
      </template>
    </avue-crud>
  </div>
</template>

<script>
import { fetchUserList, delByUserId } from '@/api/user'
import { mapGetters } from 'vuex'
import { userOption } from '@/const/admin/adminTabelOption.js'
import waves from '@/directive/waves/index.js' // 点击按钮时候显示水波纹动画
export default {
  directives: { waves },
  name: 'user',
  components: {},
  data() {
    return {
      tableOption: {}, // 表格设置属性
      tableData: [], // 表格的数据
      tablePage: 1,
      tableLoading: false,
      tabelObj: {},
      page: {
        total: 0, // 总页数
        currentPage: 0, // 当前页数
        pageSize: 10 // 每页显示多少条
      },
      listPageParams: {
        pageNo: 0,
        pageNum: 20,
        username: ''
      }
    }
  },
  created() {
    // 初始化数据格式
    this.tableOption = userOption
    this.getUserList()
    // 设置权限，后续将采用动态方式
    this.user_upd = this.permission['user_upd']
    this.user_del = this.permission['user_del']
    this.user_add = this.permission['user_add']
  },
  watch: {},
  mounted() { },
  computed: {
    ...mapGetters(['permission'])
  },
  props: [],
  methods: {
    getUserList() {
      this.tableLoading = true
      fetchUserList(this.listPageParams).then(res => {
        this.tableData = res.data.list
        this.page = {
          total: res.data.total,
          currentPage: res.data.pageNo,
          pageSize: res.data.pageNum
        }
        this.tableLoading = false
      })
    },
    handleSearch() { // 搜索
      this.listPageParams.pageNo = 0
      this.getUserList()
    },
    findByvalue(dic, value) {
      return this.$refs.crud.findByvalue(dic, value)
    },
    roleDescValue(row) {
      // 对列表数据处理
      let rDesc = ''
      row.roleList.forEach(r => {
        rDesc += r.roleDesc
      })
      return rDesc
    },
    handleAdd() {
      this.$refs.crud.rowAdd()
    },
    handleSave(row, done) {
      this.tableData.push(row)
      this.$message({
        showClose: true,
        message: '添加成功',
        type: 'success'
      })
      done()
    },
    handleDel(row, index) {
      this.$confirm('此操作将永久删除该用户(用户名:' + row.username + '), 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delByUserId(row.userId).then(res => {
          if (res.data) {
            this.getUserList()
            this.$notify({ title: '成功', message: '删除成功', type: 'success', duration: 2000 })
          } else {
            this.$notify({ title: '失败', message: '删除失败', type: 'error', duration: 2000 })
          }
        })
      }).catch(() => {
        this.$message({ type: 'info', message: '已取消删除' })
      })
    },
    handleUpdate(row, index, done) {
      this.tableData.splice(index, 1, row)
      this.$message({
        showClose: true,
        message: '修改成功',
        type: 'success'
      })
      done()
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
