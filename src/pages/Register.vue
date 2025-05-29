<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'

const fullname = ref('')
const email = ref('')
const password = ref('')
const phone = ref('')
const router = useRouter()
const error = ref('')


//signup with email and password
const signUp = async () => {
  const { data, error: err } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })

  if (err) {
    error.value = err.message
    return
  }

  // ✅ All good, redirect
  router.push('/dashboard')
}


//signup with facebook
const signInWithFacebook = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook',
    options: {
      redirectTo: 'http://localhost:5173/dashboard'
    }
  })

  if (error) {
    console.error('OAuth login error:', error.message)
  }
}

</script>


<template>

    <div class="my-5 text-center">
    <router-link to="/" class="text-decoration-none"><h1 class="text-center mt-5 fw-bold">Limcard</h1></router-link>
    </div>

  <div class="container my-5 col-md-4 mx-auto text-center">

   <div class="card p-4 shadow">
     <h3 class="poppins">Create Your Account</h3>
    <div class="my-4">
    <input v-model="fullname" class="form-control" type="text" placeholder="enter your full name" />
    </div>
    <div class="mb-4">
    <input v-model="email" class="form-control" type="email" placeholder="enter your email" />
    </div>
    <div class="mb-4">
      <input v-model="phone" class="form-control" type="number" placeholder="Phone" />
    </div>
    <div class="mb-4">
    <input v-model="password" class="form-control" placeholder="Password" type="password" />
    </div>

    <div class="mb-4">
      <button class="btn btn-dark mx-3" @click="signUp">Sign Up</button>
        <button class="btn btn-primary mx-3" @click="signInWithFacebook">
         Sign Up with Facebook
      </button>
    </div>

    <div>
      <p>Already have an account? <router-link to="/login">Sign in</router-link></p>
    </div>

   
   </div>
    
  </div>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/poppins');
.poppins {
  font-family: 'Poppins', sans-serif;
}
</style>