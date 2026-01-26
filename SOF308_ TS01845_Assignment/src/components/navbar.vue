<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand">SOF308</a>

      <div class="navbar-nav ms-auto">
        <router-link class="nav-link" to="/posts">Bài viết</router-link>
        <router-link v-if="isLogin" class="nav-link" to="/profile">Cá nhân</router-link>

        <!-- CHƯA LOGIN -->
        <router-link v-if="!isLogin" class="nav-link" to="/">Đăng nhập</router-link>
        <router-link v-if="!isLogin" class="nav-link" to="/register">Đăng ký</router-link>

        <!-- ĐÃ LOGIN -->
        <button v-if="isLogin" class="btn btn-danger btn-sm ms-2" @click="logout">
          Đăng xuất
        </button>
      </div>
    </div>
  </nav>
</template>

<<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLogin = ref(false)

function checkLogin() {
  isLogin.value = localStorage.getItem('isLogin') === 'true'
}

checkLogin()

router.afterEach(() => {
  checkLogin()
})

function logout() {
  localStorage.removeItem('isLogin')
  localStorage.removeItem('currentUser')
  checkLogin()
  router.push('/')
}
</script>
