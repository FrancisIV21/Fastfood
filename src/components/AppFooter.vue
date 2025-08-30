<template>
  <ion-footer>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button routerLink="/home">Home</ion-button>
        <ion-button routerLink="/menu">Menu</ion-button>
        <ion-button routerLink="/cart">Cart</ion-button>
        <ion-button routerLink="/profile">Profile</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-footer>
</template>

<script setup lang="ts">
import { IonFooter, IonToolbar, IonButtons, IonButton } from '@ionic/vue';
</script>
