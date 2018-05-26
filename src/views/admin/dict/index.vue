<template>
  <div class="table-container pull-height">
    <div class="table-header">
      <el-input style="width: 200px;"
                size="medium"
                class="filter-item"
                placeholder="字典名称"
                v-model="page.type"
                @keyup.enter.native="handleSearch"></el-input>
      <el-input style="width: 200px;"
                size="medium"
                class="filter-item"
                placeholder="标签名"
                v-model="page.label"
                @keyup.enter.native="handleSearch"></el-input>
      <el-button class="filter-item"
                 size="small"
                 type="primary"
                 v-waves
                 icon="search"
                 @click="handleSearch()">搜索</el-button>
      <el-button v-if="permission.dict_add"
                 class="filter-item"
                 size="small"
                 style="margin-left: 10px;"
                 type="primary"
                 icon="edit"
                 v-waves
                 @click="handleAdd()">新 增</el-button>
    </div>
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
               @row-del="handleDel">
      <template slot-scope="scope" slot="statu">
        <el-tag :type="scope.row.statu==='0'?'success':'danger'">{{findByvalue(scope.dic,scope.row.statu)}}</el-tag>
      </template>
    </avue-crud>
  </div>
</template>

<script>
import { fetchList, delById, add, update } from '@/api/dict'
import { mapGetters } from 'vuex'
import { tableOption } from '@/const/dict/dictTableOption'
import waves from '@/directive/waves/index'
export default {
  directives: { waves },
  name: 'dict',
  components: {},
  data() {
    return {
      tableOption: {},
      tableData: [],
      tableLoading: false,
      tablePage: 1,
      tabelObj: {},
      page: {
        total: 0,
        currentPage: 1,
        pageSize: 20,
        type: '',
        label: ''
      }
    }
  },
  created() {
    this.tableOption = tableOption
    this.tableOption.delBtn = (this.permission.dict_del !== undefined && this.permission.dict_del)
    this.tableOption.editBtn = (this.permission.dict_upd !== undefined && this.permission.dict_upd)
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
    handleSearch() { // 搜索
      this.page.currentPage = 1
      this.handleList()
    },
    handleAdd() {
      this.$refs.crud.rowAdd()
    },
    handleSave(row, done) {
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
      this.$confirm('此操作将永久删除该字典(字典类型:' + row.type + '), 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delById(row.id).then(res => {
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
