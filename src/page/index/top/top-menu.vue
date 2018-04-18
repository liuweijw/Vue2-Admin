<template>
  <div class="pull-auto top-menu">
    <el-menu :default-active="activeIndex" mode="horizontal">
      <template v-for="(item,index) in showItems">
        <el-menu-item :index="item.parentId+''" @click.native="openMenu(item)" :key="index">{{item.label}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { resolveUrlPath } from '@/util/util'
import { mapGetters } from 'vuex'
export default {
  name: 'top-menu',
  data() {
    return {
      activeIndex: '',
      items: [
        {
          label: '开发实例',
          href: '/home/index',
          roles: ['ROLE_SUPER_ADMIN'],
          parentId: 0
        },
        {
          label: '权限管理',
          roles: ['ROLE_SUPER_ADMIN', 'ROLE_ADMIN'],
          parentId: 1
        }
      ],
      initItem: {}
    }
  },
  created() {},
  computed: {
    ...mapGetters(['tagCurrent', 'menu', 'roles']),
    showItems() {
      let _items
      _items = this.items.filter(item => {
        return item.roles.indexOf(this.roles[0]) !== -1
      })
      if (_items.length === 0) {
        _items = []
        this.activeIndex = '-1'
        console.log(this.activeIndex)
        return _items
      }
      this.activeIndex = _items[0].parentId + ''
      this.initItem = _items[0]
      return _items
    }
  },
  watch: {
    initItem(curVal, oldVal) {
      this.openMenu(curVal)
    }
  },
  methods: {
    openMenu(item) {
      this.$store.dispatch('GetMenu', item.parentId).then(data => {
        let itemActive
        const childItemActive = 0
        if (item.href) {
          itemActive = item
        } else {
          if (this.menu[childItemActive].length === 0) {
            itemActive = this.menu[childItemActive]
          } else {
            itemActive = this.menu[childItemActive].children[childItemActive]
          }
        }
        this.$router.push({
          path: resolveUrlPath(itemActive.href, itemActive.label)
        })
      })
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
.top-menu {
  margin-top: -4px;
  box-sizing: border-box;
}
</style>
