<template>
  <el-container class="menu-container pull-chheight">
    <el-header class="menu-header">
      <el-button-group>
        <el-button type="primary" icon="el-icon-plus" size="small" @click.native="handleAdd" v-if="permission.menu_add">新增</el-button>
        <el-button type="primary" icon="el-icon-edit" size="small" @click.native="handleEdit" v-if="permission.menu_upd">编辑</el-button>
        <el-button type="primary" icon="el-icon-delete" size="small" @click.native="handleDel" v-if="permission.menu_del">删除</el-button>
      </el-button-group>
    </el-header>
    <el-container>
      <el-aside width="300px">
        <el-tree :data="menuAll" node-key="id" highlight-current default-expand-all :expand-on-click-node="false" @node-click="handleNodeClick"></el-tree>
      </el-aside>
      <el-main>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="父节点ID">
            <el-input v-model="parentForm.id" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="父节点">
            <el-input v-model="parentForm.label" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="菜单名称">
            <el-input v-model="form.label" :disabled="formMenu"></el-input>
          </el-form-item>
          <el-form-item label="菜单path">
            <el-input v-model="form.path" :disabled="formMenu"></el-input>
          </el-form-item>
          <el-form-item label="菜单规则">
            <el-input v-model="form.url" :disabled="formMenu"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleAddSubmit" :disabled="formMenu" v-if="formStatus=='add'">新增</el-button>
            <el-button type="primary" @click="handleUpdSubmit" :disabled="formMenu" v-if="formStatus=='edit'">修改</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { validatenull } from '@/util/validate'
import { findParent } from '@/util/util'
import { fetchMenuTreeAllList, add, update, del } from '@/api/menu'
export default {
  name: 'menu',
  data() {
    return {
      form: {},
      obj: {},
      parentForm: {},
      formMenu: true,
      formStatus: '',
      menuAll: [],
      menuObj: {
        menuId: null,
        menuName: '',
        path: '',
        url: '',
        pid: 0
      }
    }
  },
  created() {
    this.handleMenuList()
  },
  mounted() {},
  computed: {
    ...mapGetters(['permission'])
  },
  props: [],
  methods: {
    handleMenuList() {
      fetchMenuTreeAllList().then(res => {
        this.menuAll = res.data.menuList
      })
    },
    handleNodeClick(data, checked, indeterminate) {
      this.parentForm = Object.assign({}, findParent(this.menuAll, data.id))
      this.formMenu = true
      this.formStatus = ''
      this.obj = data
      this.form = data
    },
    handleAdd() {
      if (validatenull(this.obj)) {
        this.$message({ showClose: true, message: '请选择菜单', type: 'warning' })
        return false
      }
      this.formMenu = false
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
      this.formMenu = false
    },
    handleDel() {
      if (validatenull(this.obj)) {
        this.$message({ showClose: true, message: '请选择菜单', type: 'warning' })
        return false
      }
      this.$confirm(`是否确认删除${this.form.label}菜单`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(() => {
        del(this.form.id).then(res => {
          if (res.data) {
            this.handleMenuList()
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
      this.menuObj.menuId = null
      this.menuObj.pid = this.obj.pid
      this.menuObj.menuName = this.form.label
      this.menuObj.path = this.form.path
      this.menuObj.url = this.form.url
      add(this.menuObj).then(res => {
        if (res.data) {
          this.handleMenuList()
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
      this.menuObj.menuId = this.obj.id
      this.menuObj.pid = this.obj.pid
      this.menuObj.menuName = this.form.label
      this.menuObj.path = this.form.path
      this.menuObj.url = this.form.url
      update(this.menuObj).then(res => {
        if (res.data) {
          this.handleMenuList()
          this.$notify({ title: '成功', message: '修改成功', type: 'success', duration: 2000 })
        } else {
          this.$notify({ title: '失败', message: '修改失败', type: 'error', duration: 2000 })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-container {
  padding: 0 20px;
}
.menu-header {
  padding: 8px 0;
}
</style>
