<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'

const user = ref(null)
const router = useRouter()

// Fetch the user on mount
onMounted(async () => {
  const { data } = await supabase.auth.getUser()
  user.value = data.user

  // Listen to auth state changes
  supabase.auth.onAuthStateChange((event, session) => {
    user.value = session?.user || null

    if (!session) {
      router.push('/') // redirect to login if signed out
    }
  })
})

const logout = async () => {
  await supabase.auth.signOut()
}
</script>

<template>

  <router-view />
  
</template>

<style>
body {
  font-family: 'Inter', sans-serif;
}
</style>
