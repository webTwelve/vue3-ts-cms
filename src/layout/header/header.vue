<template>
  <div class="header">
    <div class="fold" @click="handleFoldChange">
      <el-icon :size="24">
        <Fold v-if="!isFold" />
        <Expand v-else />
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['foldChange'])
const isFold = ref(false)
const handleFoldChange = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped></style>
