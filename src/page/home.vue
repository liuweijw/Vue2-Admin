<template>
	<div class="pull-chheight wel-contailer">
			<div class="banner-text">
				<h2>Vue2-Admin 管理系统</h2>
			</div>
	</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      text: '',
      actor: '',
      count: 0,
      isText: false
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped="scoped" lang="scss">
.wel-contailer{
  position: relative;
}
.banner-text {
  position: relative;
  padding: 0 20px;
  font-size: 20px;
  text-align: center;
  color: #333;
}
.actor {
  height: 250px;
  overflow: hidden;
  font-size: 18px;
  color: #333;
}

.actor:after {
  content: "";
  width: 3px;
  height: 25px;
  vertical-align: -5px;
  margin-left: 5px;
  background-color: #333;
  display: inline-block;
  animation: blink 0.4s infinite alternate;
}

.typeing:after {
  animation: none;
}
</style>
