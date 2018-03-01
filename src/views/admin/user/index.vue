<template>
  <div>
    ---------------admin/user/index------------------
    <!-- <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="getMenuList">查询测试</el-button>
    <br/>
    <el-input
      type="textarea"
      :rows="10"
      placeholder="请输入内容"
      v-model="requestResponse">
    </el-input> -->
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  data() {
    return {
      requestResponse: ''
    }
  },
  methods: {
    getMenuList() {
      request({
        url: '/admin/menu/findMenuByRole/ROLE_ADMIN/',
        method: 'get'
      }).then(res => {
        this.requestResponse = JSON.stringify(res)
      })
    }
  }
}
</script>

