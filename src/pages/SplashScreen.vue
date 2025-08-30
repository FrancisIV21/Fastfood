<template>
  <div class="splash-screen">
    <img src="../assets/logo-white.png" alt="Fastfood Logo" class="logo" />
    <p class="loading-text">Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push("/login");
  }, 2500); // redirect after 2.5s
});
</script>

<style scoped>
.splash-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #e2332e; /* Red background */
}

.logo {
  width: 150px;
  animation: fadeIn 1.5s ease-in-out;
}

.loading-text {
  margin-top: 16px;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff; /* White text */
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
</style>
