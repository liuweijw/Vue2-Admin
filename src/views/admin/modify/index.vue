<template>
  <div class="app-container calendar-list-container">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-form :model="editForm" :rules="editFormRules" ref="editForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
              <el-input type="text" :value="name" disabled></el-input>
            </el-form-item>
            <el-form-item label="原密码" prop="password">
              <el-input type="password" v-model="editForm.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="newpassword1">
              <el-input type="password" v-model="editForm.newpassword1" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="newpassword2">
              <el-input type="password" v-model="editForm.newpassword2" auto-complete="off"></el-input>
            </el-form-item>
            <!-- <el-form-item label="头像">
              <my-upload field="file"
                         @crop-upload-success="cropUploadSuccess"
                         v-model="show"
                         :width="300"
                         :height="300"
                         url="/admin/user/upload"
                         :headers="headers"
                         img-format="png">
              </my-upload>
              <img :src="avatar">
              <el-button type="primary" @click="toggleShow" size="mini">选择<i class="el-icon-upload el-icon--right"></i></el-button>
            </el-form-item> -->
            <el-form-item>
              <el-button type="primary" @click="submitForm('editForm')">提交</el-button>
              <el-button @click="resetForm('editForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

  </div>
</template>


<script>
  import { mapGetters } from 'vuex'
  import myUpload from 'vue-image-crop-upload'

  export default {
    components: { 'my-upload': myUpload },
    data() {
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }
      var validateNewPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.editForm.newpassword1) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        fileList: [],
        show: false,
        editForm: {
          password: '',
          newpassword1: '',
          newpassword2: '',
          avatar: ''
        },
        editFormRules: {
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }],
          newpassword1: [{ required: true, validator: validatePassword, trigger: 'blur' }],
          newpassword2: [{ required: true, validator: validateNewPassword, trigger: 'blur' }]
        }
      }
    },
    computed: {
      ...mapGetters([
        'name', 'avatar'
      ])
    },
    methods: {
      submitForm(_from) {
        this.$refs[_from].validate(r => {
          return r
        })
      },
      resetForm(_from) {
        this.$refs[_from].resetFields()
      },
      toggleShow() {
        this.show = !this.show
      },
      cropUploadSuccess(data, field) {
        this.$store.commit('SET_AVATAR', data.filename)
      }
    }
  }
</script>
