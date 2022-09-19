<template>
  <div class="phone-box">
    <el-form class="login-form" :rules="phone_rules" :model="account">
      <el-form-item label="手机号" prop="tel">
        <el-input style="width: 138px" v-model="account.tel" />
      </el-form-item>
      <el-form-item label="验证码" prop="code" type="password">
        <el-input style="width: 138px" v-model="account.code" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { phone_rules } from '../config/login-config'
const account = reactive({
  tel: '',
  code: ''
})
</script>

<style lang="less" scoped></style>
