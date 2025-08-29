<template>
  <ion-page>
    <app-header title="Profile" />
    <ion-content class="ion-padding">
      <p><strong>Name:</strong> {{ auth.user?.name }}</p>
      <p><strong>Email:</strong> {{ auth.user?.email }}</p>
      <ion-button expand="block" color="danger" @click="logout">Logout</ion-button>
    </ion-content>
    <app-footer />
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import { useAuthStore } from '@/store';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();

function logout() {
  auth.logout();
  router.push('/login');
}
</script>
