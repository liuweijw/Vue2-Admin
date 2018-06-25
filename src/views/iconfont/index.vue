<template>
<div class="iconfon-container pull-height">
    <h3 style="color:red;">修改./src/config/env.js中的iconfontVersion地址即可实时调用阿里云在线图标库</h3>
    <ul class="icon-list">
        <li><span><i class="icon-xitongguanli"></i><span class="icon-name">icon-xitongguanli</span></span></li>
        <li><span><i class="icon-shuju2"></i><span class="icon-name">icon-shuju2</span></span></li>
        <li><span><i class="icon-canshu"></i><span class="icon-name">icon-canshu</span></span></li>
        <li><span><i class="icon-shuju4"></i><span class="icon-name">icon-shuju4</span></span></li>
        <li><span><i class="icon-wangzhi"></i><span class="icon-name">icon-wangzhi</span></span></li>
        <li><span><i class="icon-changyonglogo48"></i><span class="icon-name">icon-changyonglogo48</span></span></li>
        <li><span><i class="icon-mubiaoyemianliebiao"></i><span class="icon-name">icon-mubiaoyemianliebiao</span></span></li>
        <li><span><i class="icon-guanli2"></i><span class="icon-name">icon-guanli2</span></span></li>
        <li><span><i class="icon-changyonglogo27"></i><span class="icon-name">icon-changyonglogo27</span></span></li>
        <li><span><i class="icon-luyou"></i><span class="icon-name">icon-luyou</span></span></li>
        <li><span><i class="icon-iconset0450"></i><span class="icon-name">icon-iconset0450</span></span></li>
        <li><span><i class="icon-rizhi"></i><span class="icon-name">icon-rizhi</span></span></li>
        <li><span><i class="icon-webicon208"></i><span class="icon-name">icon-webicon208</span></span></li>
        <li><span><i class="icon-zidian"></i><span class="icon-name">icon-zidian</span></span></li>
        <li><span><i class="icon-web-icon-"></i><span class="icon-name">icon-web-icon-</span></span></li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'iconfont',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  props: [],
  methods: {},
  components: {}
}
</script>

<style lang="scss" scoped>
.iconfon-container {
  padding: 15px;
}
.iconfon-container > ul.icon-list {
  margin: 15px auto;
  overflow: hidden;
  list-style: none;
  padding: 0;
  border: 1px solid #eaeefb;
  border-radius: 4px;
}

.iconfon-container .content > ul:not(.timeline) {
  margin: 10px 0;
  padding: 0 0 0 20px;
  font-size: 14px;
  color: #5e6d82;
  line-height: 2em;
}
.icon-list li {
  float: left;
  width: 16.66%;
  text-align: center;
  height: 120px;
  line-height: 120px;
  color: #666;
  font-size: 13px;
  transition: color 0.15s linear;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-right: -1px;
  margin-bottom: -1px;
}
.icon-list li span {
  display: inline-block;
  line-height: normal;
  vertical-align: middle;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  color: #99a9bf;
}
.icon-list li i {
  display: block;
  font-size: 36px !important;
  margin-bottom: 15px;
  color: #606266;
}
.icon-list li .icon-name {
  display: inline-block;
  padding: 0 12px;
  font-size: 12px !important;
  height: 1em;
  color: #606266;
}
.iconfon-explace {
  width: 100%;
}
</style>
