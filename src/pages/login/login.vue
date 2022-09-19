<template>
  <div class="login">
    <div class="login-title">后台管理系统</div>
    <el-tabs type="border-card" class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon style="margin-right: 8px"><Avatar /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <LoginAccount />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon style="margin-right: 8px"><calendar /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import LoginAccount from './components/login-account.vue'
import LoginPhone from './components/login-phone.vue'
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background: url('@/assets/banner.webp');
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .login-title {
    font-size: 40px;
    font-weight: 600;
  }
}
.custom-tabs-label {
  display: flex;
  align-items: center;
  justify-content: center;
}

.demo-tabs {
  margin-top: 20px;
}
</style>
