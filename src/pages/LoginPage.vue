<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="stacked">Email</ion-label>
        <ion-input v-model="email" type="email" placeholder="Enter email" />
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Password</ion-label>
        <ion-input v-model="password" type="password" placeholder="Enter password" />
      </ion-item>

      <ion-button expand="block" @click="handleLogin">Login</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonItem, IonLabel, IonInput, IonButton
} from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store';

const router = useRouter();
const auth = useAuthStore();

const email = ref('');
const password = ref('');

function handleLogin() {
  auth.login(email.value, password.value);
  if (auth.isAuthenticated) {
    router.push('/home');
  }
}
</script>
