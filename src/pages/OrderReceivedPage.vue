<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Order Received</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding center">
      <h2>✅ Your order is confirmed!</h2>
      <ion-button expand="block" routerLink="/order-tracker">Track Order</ion-button>
      <ion-button expand="block" fill="outline" routerLink="/loyalty-points">Return Home</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
</script>

<style scoped>
.center { display: grid; gap: 12px; justify-items: center; }
</style>
