<script setup>
import { onMounted, ref } from 'vue'
import { supabase } from '@/lib/supabase'

const user = ref(null)
const loading = ref(true)

const fetchUser = async () => {
  const {
    data: { user: currentUser },
    error
  } = await supabase.auth.getUser()

  if (error) {
    console.error('Error fetching user:', error.message)
  } else {
    user.value = currentUser
  }

  loading.value = false
}

onMounted(() => {
  fetchUser()
})

const logout = async () => {
  await supabase.auth.signOut()
  window.location.href = '/login'
}
</script>

<template>

<div class="bg-light shadow">
  <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link text-muted" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-muted" href="#">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-muted" href="#">Wallet</a>
  </li>
  <li class="nav-item">
    <a class="nav-link bg-danger text-light" href="#" @click="logout">Logout</a>
  </li>
</ul>
</div>

  <div class="container my-5 col-md-10 mx-auto text-center">

    <div class="card my-5 p-5">
       <h2>Dashboard</h2>

       <div class="card bg-warning bg-opacity-25 col-md-2">
  <div class="card-body">
    <h5 class="card-title">BALANCE</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">$2,346</h6>
   
  </div>
</div>
        
       <div class="my-5">
        <p v-if="loading">Loading user...</p>
         <h5 class="fst-italic">Welcome, {{ user?.email }}.</h5>
       </div>

       <!-- container  -->
       <div class="container">
        <h2>Cards</h2>

       <div class="row mt-5">

        <div class="col-md-4 my-2">
          <div class="card" style="width: auto;">
          <img src="/public/img/one.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">ANNIVERSARY CARDS</p>
          </div>
        </div>
        </div>

        <div class="col-md-4 my-2">
          <div class="card" style="width: auto;">
          <img src="/public/img/two.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">BIRTHDAY CARDS</p>
          </div>
        </div>
        </div>

         <div class="col-md-4 my-2">
          <div class="card" style="width: auto;">
          <img src="/public/img/three.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">GRADUATION CARDS</p>
          </div>
        </div>
        </div>

       </div>

    </div>
       </div>
       <!-- container  -->


   
  </div>
</template>
