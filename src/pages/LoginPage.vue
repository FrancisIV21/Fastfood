<template>
  <div class="login-page">
    <div class="login-container">
      <!-- Logo top-left -->
      <img src="../assets/logo-red.png" alt="FastFood Logo" class="logo" />

      <!-- Greeting -->
      <h1 class="greeting">Bonjour!</h1>
      <p class="welcome-text">
        Welcome to all new FastFood mobile app. Kindly login your account. Thank you!
      </p>

      <!-- Form -->
      <div class="form-group">
        <input type="email" placeholder="Email Address" v-model="email" />
      </div>
      <div class="form-group password-field">
        <input type="password" placeholder="Enter your password" v-model="password" />
        <span class="forgot" @click="forgotPassword">Forgot?</span>
      </div>

      <!-- Buttons -->
      <button class="login-btn" @click="login">Login</button>
      <button class="guest-btn" @click="loginAsGuest">Login as Guest</button>
    </div>

    <!-- Footer pinned to bottom -->
    <div class="footer">
      Don’t have an account yet?
      <span class="create-link" @click="goToSignup">Create</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const login = () => {
  console.log("Logging in with:", email.value, password.value);
  router.push("/home");
};

const loginAsGuest = () => {
  router.push("/home");
};

const goToSignup = () => {
  router.push("/signup");
};

const forgotPassword = () => {
  alert("Redirect to forgot password page");
};
</script>

<style scoped>
/* General Layout */
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  background: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  padding: 24px;
}

/* Main content */
.login-container {
  max-width: 400px;
  width: 100%;
  text-align: left;
  margin-top: 60px;
}

/* Logo top-left */
.logo {
  width: 120px;
  margin-bottom: 20px;
}

/* Texts */
.greeting {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
}

.welcome-text {
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  margin-bottom: 28px;
}

/* Input fields */
.form-group {
  position: relative;
  margin-bottom: 18px;
}

input {
  width: 100%;
  padding: 14px 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;
}

input:focus {
  border-color: #e63946;
}

/* Forgot password link */
.password-field {
  position: relative;
}

.forgot {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 13px;
  color: #e63946;
  font-weight: 500;
  cursor: pointer;
}

/* Buttons */
.login-btn {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 12px;
  background: #e63946;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin: 12px 0;
  cursor: pointer;
}

.login-btn:hover {
  background: #d62828;
}

.guest-btn {
  width: 100%;
  padding: 14px;
  border: none;
  background: none;
  color: #e63946;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
}

/* Footer pinned to bottom */
.footer {
  margin-top: auto; /* pushes footer to bottom */
  text-align: center;
  font-size: 14px;
  color: #444;
  padding-bottom: 10px;
}

.create-link {
  color: #e63946;
  font-weight: 600;
  margin-left: 4px;
  cursor: pointer;
}
</style>
