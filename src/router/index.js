import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/pages/Register.vue'
import Login from '@/pages/Login.vue'
import Home from '@/pages/Home.vue'
import Dashboard from '@/pages/Dashboard.vue'
import { supabase } from '@/lib/supabase'

const routes = [
  { path: '/', 
    name: 'Home', 
    component: Home 
  },
  { path: '/register', 
    name: 'Register', 
    component: Register 
  },
  { path: '/login', 
    name: 'login', 
    component: Login 
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation Guard
router.beforeEach(async (to, from, next) => {
  const {
    data: { session }
  } = await supabase.auth.getSession()

  // If the route requires auth and user is not logged in, redirect to login
  if (to.meta.requiresAuth && !session) {
    return next('/login') // ✅ redirect to login
  }

  // If the user is logged in and tries to access login or register, redirect to dashboard
  if ((to.path === '/login' || to.path === '/register') && session) {
    return next('/dashboard') // Optional: keep logged-in users away from login/register
  }

  next()
})

export default router