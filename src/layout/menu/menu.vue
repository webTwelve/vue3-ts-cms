<template>
  <div class="menu">
    <div class="logo">
      <img class="img" src="@/assets/images/logo.svg" alt="" />\
      <div class="title" v-if="!isCollapse">vue3-ts-cms</div>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in commonStore.userRole" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu class="el-submenu" :index="item.id + ''">
            <template #title>
              <el-icon><DataAnalysis /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <!-- <template v-if="subitem.children">
                <el-sub-menu class="el-submenu" :index="subitem.id + ''">
                  <template #title>
                    <el-icon><DataAnalysis /></el-icon>
                    <span>{{ subitem.name }}</span>
                  </template>
                  <template
                    v-for="subitemChild in subitem.children"
                    :key="subitemChild.id"
                  >
                    <el-menu-item :index="subitemChild.id + ''">
                      <span>{{ subitemChild.name }}</span>
                    </el-menu-item>
                  </template>
                </el-sub-menu>
              </template> -->
              <!-- <template v-else> -->
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuClick(subitem)"
              >
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
            <!-- </template> -->
          </el-sub-menu>
        </template>
        <template v-if="item.type === 2">
          <el-menu-item :index="item.id + ''" @click="handleMenuClick(item)">
            <el-icon><DataAnalysis /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import useCommonStore from '@/store/common'
import { defineProps, withDefaults } from 'vue'
const commonStore = useCommonStore()
interface IProps {
  isCollapse: boolean
}
withDefaults(defineProps<IProps>(), { isCollapse: false })
const handleMenuClick = (item: any) => {
  router.push(item.url)
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
      white-space: nowrap;
    }
  }

  .el-menu {
    border-right: none;
    background-color: #001529 !important;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
  }
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135 !important;
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
