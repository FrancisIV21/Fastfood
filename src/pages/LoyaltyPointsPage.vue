<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Loyalty Points</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding center">
      <h1>420</h1>
      <p>Total points</p>
      <ion-button expand="block" routerLink="/home">Go Back Home</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
</script>

<style scoped>
.center { display: grid; gap: 8px; justify-items: center; padding-top: 10vh; }
</style>
