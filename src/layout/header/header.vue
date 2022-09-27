<template>
  <div class="header">
    <div class="header-info">
      <div class="header-left">
        <div class="fold" @click="handleFoldChange">
          <el-icon :size="24">
            <Fold v-if="!isFold" />
            <Expand v-else />
          </el-icon>
        </div>
        <div>面包屑</div>
      </div>
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts" setup>
import UserInfo from './components/userInfo.vue'
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['foldChange'])
const isFold = ref(false)
const handleFoldChange = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  .fold {
    display: flex;
    align-items: center;
  }
  .header-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-left {
    display: flex;
    align-items: center;
  }
}
</style>
