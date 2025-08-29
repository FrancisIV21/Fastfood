<template>
  <ion-footer>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button router-link="/home">Home</ion-button>
        <ion-button router-link="/menu">Menu</ion-button>
        <ion-button router-link="/cart">Cart</ion-button>
        <ion-button router-link="/profile">Profile</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-footer>
</template>

<script setup lang="ts">
import { IonFooter, IonToolbar, IonButtons, IonButton } from '@ionic/vue';
</script>
