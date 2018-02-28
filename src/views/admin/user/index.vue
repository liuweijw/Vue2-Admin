<template>
  <div>
    ---------------admin/user/index------------------
    <!-- <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="getMenuList">{{$t('login.logIn')}}</el-button> -->

  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  methods: {
    getMenuList() {
      request({
        url: '/admin/menu/findMenuByRole/ROLE_ADMIN/',
        method: 'get'
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

