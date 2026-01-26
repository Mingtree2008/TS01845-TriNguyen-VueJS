<template>
  <h3>Đăng nhập</h3> 
  <input class="form-control mb-2" v-model="email" placeholder="Email"> <input
    class="form-control mb-2" type="password" v-model="password" placeholder="Mật khẩu"> 
    <button class="btn btn-primary"@click="login">Đăng nhập</button>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

function login() {
  const user = JSON.parse(localStorage.getItem('user'))

  if (!user) {
    alert('Chưa có tài khoản!')
    return
  }

  if (email.value === user.email && password.value === user.password) {
    localStorage.setItem('isLogin', 'true')
    localStorage.setItem('currentUser', JSON.stringify(user))
    router.push('/Posts')
  } else {
    alert('Sai email hoặc mật khẩu')
  }
}
</script>
