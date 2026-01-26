<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

function register() {
  const user = {
    name: name.value,
    email: email.value,
    password: password.value
  }

  localStorage.setItem('user', JSON.stringify(user))
  alert('Đăng ký thành công!')
  router.push('/')
}
</script>

<template>
  <h3>Đăng ký</h3>

  <input v-model="name" class="form-control mb-2" placeholder="Tên">
  <input v-model="email" class="form-control mb-2" placeholder="Email">
  <input v-model="password" type="password" class="form-control mb-2" placeholder="Mật khẩu">

  <button class="btn btn-success" @click="register">Đăng ký</button>
</template>
