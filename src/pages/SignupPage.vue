<template>
  <div class="signup-page">
    <div class="signup-box">
      <h2>Create Account</h2>
      <input type="text" placeholder="Full Name" v-model="name" />
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button @click="signup">Sign Up</button>
      <button class="back-btn" @click="goToLogin">Back to Login</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();

const signup = () => {
  console.log("Signing up:", name.value, email.value, password.value);
  // TODO: connect backend API
  router.push("/home");
};

const goToLogin = () => {
  router.push("/login");
};
</script>

<style scoped>
.signup-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f8f8f8;
}

.signup-box {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-align: center;
  width: 300px;
}

.signup-box h2 {
  margin-bottom: 20px;
}

.signup-box input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.signup-box button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background: #457b9d;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.signup-box button:hover {
  background: #1d3557;
}

.back-btn {
  background: #e63946;
  margin-top: 10px;
}
</style>
