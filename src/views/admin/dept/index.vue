<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-button-group>
        <el-button type="primary" icon="el-icon-plus" size="small" @click.native="handleAdd" v-if="permission.dept_add">新增</el-button>
        <el-button type="primary" icon="el-icon-edit" size="small" @click.native="handleEdit" v-if="permission.dept_upd">编辑</el-button>
        <el-button type="primary" icon="el-icon-delete" size="small" @click.native="handleDel" v-if="permission.dept_del">删除</el-button>
      </el-button-group>
    </div>

    <el-row>
      <el-col :span="8" style='margin-top:15px;'>
        <el-tree
           class="filter-tree"
           :data="deptAll"
           node-key="id"
           highlight-current
           :props="defaultProps"
           :filter-node-method="filterNode"
           @node-click="handleNodeClick"
           default-expand-all
        >
        </el-tree>
      </el-col>
      <el-col :span="16" style='margin-top:15px;'>
        <el-card class="box-card">
          <el-form :label-position="labelPosition" label-width="80px" :model="form" ref="form">
            <el-form-item label="父级节点" prop="pid">
              <el-input v-model="form.pid" :disabled="formDept" placeholder="请输入父级节点"></el-input>
            </el-form-item>
            <el-form-item label="节点编号" prop="id" v-if="formDept">
              <el-input v-model="form.id" :disabled="formDept" placeholder="节点编号"></el-input>
            </el-form-item>
            <el-form-item label="部门名称" prop="name">
              <el-input v-model="form.name" :disabled="formDept"  placeholder="请输入名称"></el-input>
            </el-form-item>
            <el-form-item label="排序" prop="pos">
              <el-input v-model="form.pos" :disabled="formDept" placeholder="请输入排序"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleAddSubmit" :disabled="formDept" v-if="formStatus=='add'">新增</el-button>
              <el-button type="primary" @click="handleUpdSubmit" :disabled="formDept" v-if="formStatus=='edit'">修改</el-button>
              <el-button @click="handleOnCancel" v-if="formStatus =='add' || formStatus =='edit'">取消</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { validatenull } from '@/util/validate'
import { fetchDeptTree, add, upd, del } from '@/api/dept'
export default {
  name: 'menu',
  data() {
    return {
      form: {},
      obj: {},
      parentForm: {},
      formDept: true,
      currentId: 0,
      formStatus: '',
      deptAll: [],
      deptObj: {
        deptId: null,
        deptName: '',
        pid: 0
      },
      labelPosition: 'right',
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  created() {
    this.handleDeptList()
  },
  mounted() {},
  computed: {
    ...mapGetters(['permission'])
  },
  props: [],
  methods: {
    handleDeptList() {
      fetchDeptTree().then(res => {
        this.deptAll = res.data
      })
    },
    filterNode(value, data) {
      if (!value) return true
      return data.name.indexOf(value) !== -1
    },
    handleNodeClick(data, checked, indeterminate) {
      // this.parentForm = Object.assign({}, findParent(this.deptAll, data.id))
      this.currentId = data.id
      this.obj = data
      this.form = data
    },
    handleAdd() {
      if (validatenull(this.obj)) {
        this.$message({ showClose: true, message: '请选择菜单', type: 'warning' })
        return false
      }
      this.formDept = false
      this.formStatus = 'add'
      this.form = {}
    },
    handleEdit() {
      if (validatenull(this.obj)) {
        this.$message({ showClose: true, message: '请选择菜单', type: 'warning' })
        return false
      }
      this.form = Object.assign({}, this.obj)
      this.formStatus = 'edit'
      this.formDept = false
    },
    handleDel() {
      if (validatenull(this.obj)) {
        this.$message({ showClose: true, message: '请选择菜单', type: 'warning' })
        return false
      }
      this.$confirm(`是否确认删除${this.form.name}菜单`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(() => {
        del(this.form.id).then(res => {
          if (res.data) {
            this.handleDeptList()
            this.$notify({ title: '成功', message: '删除成功', type: 'success', duration: 2000 })
          } else {
            this.$notify({ title: '失败', message: '删除失败', type: 'error', duration: 2000 })
          }
        })
      })
    },
    handleAddSubmit() {
      if (validatenull(this.obj)) {
        this.$message({ showClose: true, message: '请选择菜单', type: 'warning' })
        return false
      }
      this.deptObj.deptId = null
      this.deptObj.pid = this.obj.pid
      this.deptObj.deptName = this.form.name
      add(this.deptObj).then(res => {
        if (res.data) {
          this.handleDeptList()
          this.$notify({ title: '成功', message: '添加成功', type: 'success', duration: 2000 })
        } else {
          this.$notify({ title: '失败', message: '添加失败', type: 'error', duration: 2000 })
        }
      })
    },
    handleUpdSubmit() {
      if (validatenull(this.obj)) {
        this.$message({ showClose: true, message: '请选择菜单', type: 'warning' })
        return false
      }
      this.deptObj.deptId = this.obj.id
      this.deptObj.pid = this.obj.pid
      this.deptObj.deptName = this.form.name
      upd(this.deptObj).then(res => {
        if (res.data) {
          this.handleDeptList()
          this.$notify({ title: '成功', message: '修改成功', type: 'success', duration: 2000 })
        } else {
          this.$notify({ title: '失败', message: '修改失败', type: 'error', duration: 2000 })
        }
      })
    },
    handleOnCancel() {
      this.formDept = true
      this.formStatus = ''
    }
  }
}
</script>
