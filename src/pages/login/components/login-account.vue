<template>
  <div class="account-box">
    <el-form class="login-form" :rules="account_rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password" type="password">
        <el-input v-model="account.password" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { account_rules } from '../config/login-config'
const account = reactive({
  name: '',
  password: ''
})
</script>

<style lang="less" scoped>
.login-form {
  width: 300px;
}
</style>
