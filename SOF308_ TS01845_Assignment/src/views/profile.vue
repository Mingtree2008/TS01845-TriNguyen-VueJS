<script setup>
import { ref, onMounted } from 'vue'

const name = ref('')
const email = ref('')

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('currentUser'))
  if (user) {
    name.value = user.name
    email.value = user.email
  }
})

function saveProfile() {
  const user = JSON.parse(localStorage.getItem('currentUser'))
  user.name = name.value
  user.email = email.value

  localStorage.setItem('currentUser', JSON.stringify(user))
  localStorage.setItem('user', JSON.stringify(user))
  alert('Đã lưu!')
}
</script>

<template>
  <h3>Thông tin cá nhân</h3>

  <input class="form-control mb-2" v-model="name">
  <input class="form-control mb-2" v-model="email">

  <button class="btn btn-primary" @click="saveProfile">Lưu</button>
</template>
