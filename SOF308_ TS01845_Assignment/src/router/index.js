import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Posts from '../views/Posts.vue'
import Profile from '../views/profile.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/register', component: Register },
  { path: '/posts', component: Posts },
  {
    path: '/profile',
    component: Profile,
    meta: { requiresAuth: true } // 🔐 cần login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// ✅ CHẶN ROUTE
router.beforeEach((to) => {
  const isLogin = localStorage.getItem('isLogin') === 'true'

  if (to.meta.requiresAuth && !isLogin) {
    return '/' // quay về login
  }
})

export default router
