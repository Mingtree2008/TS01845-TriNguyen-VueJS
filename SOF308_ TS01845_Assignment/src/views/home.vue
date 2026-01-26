<template>
  <div>
    <h3>Danh sách bài viết</h3>

    <div class="card mb-3" v-for="post in posts" :key="post.id">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  { id: 1, title: 'Bài viết 1', content: 'Nội dung bài viết 1' },
  { id: 2, title: 'Bài viết 2', content: 'Nội dung bài viết 2' }
])
</script>
