<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'

const email = ref('')
const password = ref('')
const router = useRouter()
const error = ref('')

const signIn = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (error) {
    console.error(error.message)
    return
  }

  router.push('/dashboard')
}
</script>


<template>

     <div class="my-5 text-center">
        <router-link to="/" class="text-decoration-none"><h1 class="text-center mt-5 fw-bold">Limcard</h1></router-link>
        </div>

  <div class="container my-5 col-md-4 mx-auto text-center">

     <div class="card p-4 shadow">
     <h3 class="poppins">Sign In to Your Account</h3>
    <div class="my-4">
    <input v-model="email" class="form-control" type="email" placeholder="enter your email" />
    </div>
    <div class="mb-4">
    <input v-model="password" class="form-control" placeholder="Password" type="password" />
    </div>

    <div class="mb-4">
      <button class="btn btn-dark mx-3" @click="signIn">Sign In</button>
        <button class="btn btn-primary mx-3" @click="signInWithFacebook">
         Sign In with Facebook
      </button>
    </div>

      <div>
      <router-link to="/login">Forgot password?</router-link>
    </div>

    <div class="mt-3">
      <p>Don't have an account? <router-link to="/register">Sign Up</router-link></p>
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