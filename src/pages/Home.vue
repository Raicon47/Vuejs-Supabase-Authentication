<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'

const messages = ref([])
const newMessage = ref('')

const fetchMessages = async () => {
  const { data, error } = await supabase.from('messages').select('*')
  if (data) messages.value = data
}

const submit = async () => {
  if (!newMessage.value) return
  const { error } = await supabase.from('messages').insert({ content: newMessage.value })
  if (!error) {
    newMessage.value = ''
    fetchMessages()
  }
}

onMounted(fetchMessages)
</script>

<template>

  <router-link to="/" class="text-decoration-none"><h1 class="text-center mt-5 fw-bold">Limcard</h1></router-link>

 <div class="container col-md-5 mx-auto my-5 text-center">
    
    <button v-if="user" @click="logout">Logout</button>
    <p v-else>You're logged out. <router-link class="btn btn-warning" to="/register">Register</router-link></p>

    <div class="mt-5">
      <img src="/public/img/one.jpg" class="img-thumbnail" alt="">
    </div>

  </div>
</template>
