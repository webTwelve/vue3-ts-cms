<template>
  <div>
    {{ commonStore.token }}
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>
<script lang="ts" setup>
import useCommonStore from '@/store/common'
const commonStore = useCommonStore()
</script>

<style lang="less" scoped></style>
